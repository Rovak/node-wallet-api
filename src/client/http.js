const xhr = require("axios");
const bytesToString = require("../utils/bytes").bytesToString;
const {base64DecodeFromString} = require("../utils/bytes");
const {Block, Transaction} = require("../protocol/core/Tron_pb");

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
   * Retrieve all connected witnesses
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
   * Retrieve all connected witnesses
   *
   * @returns {Promise<*>}
   */
  async getBlockByNum(blockNumber) {
    let {data} = await xhr.get(`${this.url}/getBlockByNumToView?num=${blockNumber}`);
    let currentBlock = base64DecodeFromString(data);
    let blockData = Block.deserializeBinary(currentBlock);

    let recentBlock = base64DecodeFromString(data);

    return {
      data: Block.deserializeBinary(recentBlock),
      number: blockData.getBlockHeader().getRawData().getNumber(),
      // witnessAddress: bytesToString(blockData.getBlockHeader().getRawData().getWitnessAddress()),
      time: blockData.getBlockHeader().getRawData().getTimestamp(),
      transactionsCount: blockData.getTransactionsList().length,
      contraxtType: Transaction.Contract.ContractType,
    };
  }

}

module.exports = HttpClient;
