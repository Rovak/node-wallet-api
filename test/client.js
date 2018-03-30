const {bytesToString} = require("../src/utils/bytes");
const {GrpcClient} = require("../src");
const assert = require("assert");


describe('client', () => {

  return;

  let client = new GrpcClient({
    hostname: "localhost",
    port: 50051,
  });

  it('list nodes', async () => {
    let nodes = await client.getNodes();
    for (let node of nodes) {
      console.log("node", node.getAddress().getHost_asB64())
    }
  });

  it('list witnesses', async () => {
    let witnesses = await client.getWitnesses();

    for (let witness of witnesses) {
      console.log("witness", witness.getUrl());
    }
  });

  it('list accounts', async () => {
    let accounts = await client.getAccounts();

    for (let account of accounts) {
      console.log("account", {
        balance: account.getBalance(),
        name: bytesToString(account.getAccountName()),
      });
    }
  });

  it('retrieve block by number', async () => {
    for (let blockNumber = 0; blockNumber < 10; blockNumber++) {
      let block = await client.getBlockByNumber(blockNumber);
      assert.equal(block.getBlockHeader().getRawData().getNumber(), blockNumber);
    }
  });
});
