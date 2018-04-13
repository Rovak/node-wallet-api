const {grpc} = require("grpc-web-client");
const {EmptyMessage, NumberMessage} = require("../protocol/api/api_pb");
const {Wallet} = require("../protocol/api/api_pb_service");

class GRPCWebClient {

  constructor(options = {}) {
    this.url = options.url || `http://localhost:8080`;
  }

  makeRequest(method, request) {
    return new Promise(resolve => {
      grpc.unary(method, {
        request: request,
        host: this.url,
        onEnd: res => {
          const { status, statusMessage, headers, message, trailers } = res;
          if (status === grpc.Code.OK && message) {
            resolve(message.toObject());
          }
        }
      });
    });
  }

  /**
   * Retrieve all connected witnesses
   *
   * @returns {Promise<*>}
   */
  async getWitnesses() {
    let {witnessesList} = await this.makeRequest(Wallet.ListWitnesses, new EmptyMessage());
    return witnessesList;
  }

  /**
   * Retrieve all connected nodes
   *
   * @returns {Promise<*>}
   */
  async getNodes() {
    let {nodesList} = await this.makeRequest(Wallet.ListNodes, new EmptyMessage());
    return nodesList;
  }

  /**
   * Retrieve all accounts
   *
   * @returns {Promise<*>}
   */
  async getAccounts() {
    let {accountsList} = await this.makeRequest(Wallet.ListAccounts, new EmptyMessage());
    return accountsList;
  }

  /**
   * Retrieves a block by the given number
   *
   * @param {number} number block number
   * @returns {Promise<*>}
   */
  async getBlockByNum(number) {
    let message = new NumberMessage();
    message.setNum(number);
    return await this.makeRequest(Wallet.GetBlockByNum, message);
  }

  async getLatestBlock() {
    let message = new NumberMessage();
    message.setNum(-1);
    return await this.makeRequest(Wallet.GetBlockByNum, message);
  }

  async getTotalNumberOfTransactions() {
    let {num} = await this.makeRequest(Wallet.TotalTransaction, new EmptyMessage());
    return num;
  }
}

module.exports = GRPCWebClient;
