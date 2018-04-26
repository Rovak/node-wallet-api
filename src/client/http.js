const xhr = require("axios");
const deserializeTransaction = require("../protocol/serializer").deserializeTransaction;
const {base64DecodeFromString, byteArray2hexStr, bytesToString} = require("../utils/bytes");
const {Block, Transaction, Account} = require("../protocol/core/Tron_pb");
const {AccountList, NumberMessage, WitnessList, AssetIssueList} = require("../protocol/api/api_pb");
const {TransferContract} = require("../protocol/core/Contract_pb");
const qs = require("qs");
const stringToBytes = require("../lib/code").stringToBytes;
const { getBase58CheckAddress, signTransaction, passwordToAddress } = require("../utils/crypto");

const ONE_TRX = 1000000;

class HttpClient {

  constructor(options = {}) {
    this.url = options.url || `https://tronscan.io`;
  }

  /**
   * Retrieve all active nodes
   *
   * @returns {Promise<*>}
   */
  async getNodes() {
    let {data} = await xhr.get(`${this.url}/nodeList`);
    return JSON.parse(data);
  }
  /**
   * Retrieve latest block
   *
   * @returns {Promise<*>}
   */
  async getLatestBlock() {

    let {data} = await xhr.get(`${this.url}/getBlockToView`);
    let currentBlock = base64DecodeFromString(data);
    let block = Block.deserializeBinary(currentBlock);

    return {
      number: block.getBlockHeader().getRawData().getNumber(),
      witnessId: block.getBlockHeader().getRawData().getWitnessId(),
      parentHash: byteArray2hexStr(block.getBlockHeader().getRawData().getParenthash()),
    };
  }

  /**
   * Retrieve block by number
   *
   * @returns {Promise<*>}
   */
  async getBlockByNum(blockNumber) {
    let {data} = await xhr.get(`${this.url}/getBlockByNumToView?num=${blockNumber}`);
    let currentBlock = base64DecodeFromString(data);
    let blockData = Block.deserializeBinary(currentBlock);

    let recentBlock = base64DecodeFromString(data);

    let transactions = [];

    for (let transaction of blockData.getTransactionsList()) {
      transactions = transactions.concat(deserializeTransaction(transaction));
    }

    return {
      size: recentBlock.length,
      parentHash: byteArray2hexStr(blockData.getBlockHeader().getRawData().getParenthash()),
      number: blockData.getBlockHeader().getRawData().getNumber(),
      witnessAddress: getBase58CheckAddress(Array.from(blockData.getBlockHeader().getRawData().getWitnessAddress())),
      time: blockData.getBlockHeader().getRawData().getTimestamp(),
      transactionsCount: blockData.getTransactionsList().length,
      contractType: Transaction.Contract.ContractType,
      transactions,
    };
  }

  /**
   * Retrieve the total number of transactions
   * @returns {Promise<number>}
   */
  async getTotalNumberOfTransactions() {
    let {data} = await xhr.get(`${this.url}/getTotalTransaction`);
    let totalTransaction = base64DecodeFromString(data);
    let totalData = NumberMessage.deserializeBinary(totalTransaction);
    return totalData.getNum();
  }

  /**
   * Retrieve all accounts
   * @returns {Promise<*>}
   */
  async getAccountList() {

    let {data} = await xhr.get(`${this.url}/accountList`);

    let bytesAccountList = base64DecodeFromString(data);
    let account = AccountList.deserializeBinary(bytesAccountList);
    let accountList = account.getAccountsList();

    return accountList.map(account => {
      let name = bytesToString(account.getAccountName());
      let address = getBase58CheckAddress(Array.from(account.getAddress()));
      let balance = account.getBalance();
      let balanceNum = 0;
      if (balance !== 0) {
        balanceNum = (balance / ONE_TRX).toFixed(6);
      }
      return {
        name,
        address,
        balance,
        balanceNum,
      };
    });
  }

  /**
   * Retrieves all witnesses
   *
   * @returns {Promise<*>}
   */
  async getWitnesses() {
    let {data} = await xhr.get(`${this.url}/witnessList`);

    let bytesWitnessList = base64DecodeFromString(data);
    let witness = WitnessList.deserializeBinary(bytesWitnessList);
    let witnessList = witness.getWitnessesList();

    return witnessList.map(witness => {

      return {
        address: getBase58CheckAddress(Array.from(witness.getAddress())),
        url: witness.getUrl(),
        latestBlockNumber: witness.getLatestblocknum(),
        producedTotal: witness.getTotalproduced(),
        missedTotal: witness.getTotalmissed(),
        votes: witness.getVotecount(),
      };
    });
  }

  /**
   * Retrieve all tokens
   *
   * @returns {Promise<*>}
   */
  async getAssetIssueList() {
    let {data} = await xhr.get(`${this.url}/getAssetIssueList`);

    let assetIssueListObj = AssetIssueList.deserializeBinary(base64DecodeFromString(data));
    return assetIssueListObj.getAssetissueList().map(asset => {
      return {
        name: bytesToString(asset.getName()),
        ownerAddress: getBase58CheckAddress(Array.from(asset.getOwnerAddress())),
        totalSupply: asset.getTotalSupply(),
        startTime: asset.getStartTime(),
        endTime: asset.getEndTime(),
        description: bytesToString(asset.getDescription()),
        num: asset.getNum(),
        trxNum: asset.getTrxNum(),
        price: asset.getTrxNum() / asset.getNum(),
      };
    });
  }

  /**
   * Retrieves the balance for the account which belongs to the given address
   *
   * @param address
   * @returns {Promise<*>}
   */
  async getAccountBalances(address) {
    let {data} = await xhr.post(`${this.url}/queryAccount`, qs.stringify({
      address,
    }));

    let bytesAccountInfo = base64DecodeFromString(data);
    let accountInfo = Account.deserializeBinary(bytesAccountInfo);
    let assetMap = accountInfo.getAssetMap().toArray();
    let trxBalance = accountInfo.getBalance();
    let trxBalanceNum = (trxBalance / ONE_TRX).toFixed(6);

    let balances = [{
      name: 'TRX',
      balance: trxBalanceNum
    }];

    for (let asset of Object.keys(assetMap)) {
      balances.push({
        name: assetMap[asset][0],
        balance: assetMap[asset][1],
      })
    }

    return balances;
  }

  /**
   * Vote for witnesses
   *
   * @param password account password
   * @param votes witness votes
   * @returns {Promise<void>}
   */
  async voteForWitnesses(password, votes) {
    let {data} = await xhr.post(`${this.url}/createVoteWitnessToView`, {
      owner: passwordToAddress(password),
      list: votes,
    });

    return await this.signTransaction(password, data);
  }

  /**
   * Apply for delegate
   *
   * @param password account address
   * @param url personal website url
   *
   * @returns {Promise<void>}
   */
  async applyForDelegate(password, url) {
    let {data} = await xhr
      .post(`${this.url}/createWitnessToView`, qs.stringify({
        address: passwordToAddress(password),
        onwerUrl: url, // TODO yes this is spelled wrong :(
      }));

    return await this.signTransaction(password, data);
  }

  async signTransaction(password, data) {
    let bytesDecode = base64DecodeFromString(data);
    let transaction = Transaction.deserializeBinary(bytesDecode);
    let transactionSigned = signTransaction(base64DecodeFromString(password), transaction);
    let transactionBytes = transactionSigned.serializeBinary();
    let transactionString = byteArray2hexStr(transactionBytes);

    let {data: transData} = await xhr.post(`${this.url}/transactionFromView`, qs.stringify({
      transactionData: transactionString,
    }));

    return transData;
  }

  /**
   * Send tokens to another address
   *
   * @param password
   * @param token
   * @param to
   * @param amount
   * @returns {Promise<void>}
   */
  async send(password, token, to, amount) {

    if (token.toUpperCase() === 'TRX') {
      let {data} = await xhr.post(`${this.url}/sendCoinToView`, qs.stringify({
        Address: passwordToAddress(password),
        toAddress: to,
        Amount: amount
      }));

      return await this.signTransaction(password, data);
    } else {
      let {data} = await xhr.post(`${this.url}/TransferAssetToView`, qs.stringify({
        assetName: token,
        Address: passwordToAddress(password),
        toAddress: to,
        Amount: amount / ONE_TRX,
      }));

      return await this.signTransaction(password, data);
    }
  }

  /**
   * Create a new token
   *
   * @returns {Promise<void>}
   */
  async createToken(password, config) {
      let {data} = await xhr.post(`${this.url}/createAssetIssueToView`, qs.stringify({
        name: config.name,
        totalSupply: config.totalSupply,
        num: config.num,
        trxNum: config.trxNum,
        startTime: Date.parse(config.startTime),
        endTime: Date.parse(config.endTime),
        description: config.description,
        url: config.url,
        ownerAddress: passwordToAddress(password),
      }));

    return await this.signTransaction(password, data);
  }

  async participateAsset(password, config) {
    let {data} = await xhr.post(`${this.url}/ParticipateAssetIssueToView`, qs.stringify({
      name: byteArray2hexStr(stringToBytes(config.name)),
      ownerAddress: passwordToAddress(password),
      toAddress: config.issuerAddress,
      amount: config.amount,
    }));

    return await this.signTransaction(password, data);
  }
}

module.exports = HttpClient;
