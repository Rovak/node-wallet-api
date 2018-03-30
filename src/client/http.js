const xhr = require("axios");
const byteArray2hexStr = require("../utils/bytes").byteArray2hexStr;
const deserializeTransaction = require("../protocol/serializer").deserializeTransaction;
const bytesToString = require("../utils/bytes").bytesToString;
const {base64DecodeFromString} = require("../utils/bytes");
const {Block, Transaction} = require("../protocol/core/Tron_pb");
const {AccountList} = require("../protocol/api/api_pb");
const {TransferContract} = require("../protocol/core/Contract_pb");

class HttpClient {

  constructor(options = {}) {
    this.hostname = options.hostname || "tronscan.io";
    this.port = options.port || 80;

    /**
     * @type {WalletClient}
     */
    this.url = `https://${this.hostname}`;
    if (this.port !== 80) {
      this.url+= `:${this.port}`;
    }
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

    return {
      size: recentBlock.length,
      number: blockData.getBlockHeader().getRawData().getNumber(),
      // witnessAddress: bytesToString(blockData.getBlockHeader().getRawData().getWitnessAddress()),
      time: blockData.getBlockHeader().getRawData().getTimestamp(),
      transactionsCount: blockData.getTransactionsList().length,
      contraxtType: Transaction.Contract.ContractType,
      transactions: blockData.getTransactionsList().map(deserializeTransaction),
    };
  }

  async getAccountList() {

    let {data} = await xhr.get(`${this.url}/accountList`);

    let bytesAccountList = base64DecodeFromString(data);
    let account = AccountList.deserializeBinary(bytesAccountList);
    let accountList = account.getAccountsList();

    return accountList.map(account => {
      let name = bytesToString(account.getAccountName());
      let address = byteArray2hexStr(account.getAddress());
      let balance = account.getBalance();
      let balanceNum = 0;
      if (balance !== 0) {
        balanceNum = (balance / 1000000).toFixed(6);
      }
      return {
        name,
        address,
        balance,
        balanceNum,
      };
    });
  }

}

module.exports = HttpClient;
