const {WalletClient} = require("../protocol/api/api_grpc_pb");
const {EmptyMessage} = require("../protocol/api/api_pb");
const caller = require('grpc-caller')

class Client {
  constructor(options) {
    this.hostname = options.hostname;
    this.port = options.port;
    this.api = caller(`${this.hostname}:${this.port}`, WalletClient);
  }

  async getWitnesses() {
    return await this.api.listWitnesses(new EmptyMessage())
      .then(x => x.getWitnessesList());
  }


  async getNodes() {
    return await this.api.listNodes(new EmptyMessage())
      .then(x => x.getNodesList());
  }
}

module.exports = Client;
