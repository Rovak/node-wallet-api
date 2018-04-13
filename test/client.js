const {bytesToString} = require("../src/utils/bytes");
const GRPCWebClient = require("../src/client/grpc-web");
const assert = require("assert");


describe('client', () => {

  let client = new GRPCWebClient({
    hostname: "localhost",
    port: 8080,
  });

  it('list nodes', async () => {
    let nodes = await client.getNodes();
    for (let node of nodes) {
      console.log("node", node.address)
    }
  });

  it('list witnesses', async () => {
    let witnesses = await client.getWitnesses();

    for (let witness of witnesses) {
      console.log("witness", witness.url);
    }
  });

  it('list accounts', async () => {
    let accounts = await client.getAccounts();

    for (let account of accounts) {
      console.log("account", {
        balance: account.balance,
        name: bytesToString(account.accountName),
      });
    }
  });

  it('retrieve block by number', async () => {
    for (let blockNumber = 0; blockNumber < 10; blockNumber++) {
      let block = await client.getBlockByNumber(blockNumber);
      assert.equal(block.blockHeader.rawData.number, blockNumber);
    }
  });
});
