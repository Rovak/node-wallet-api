const {bytesToString} = require("../dist/utils/bytes");
const {GrpcClient} = require("../dist");
const assert = require("assert");
const getContractListFromTransaction = require("../src/lib/code").getContractListFromTransaction;


describe('client', () => {

  let client = new GrpcClient({
    hostname: "47.254.146.147",
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


  it('retrieve block by number', async () => {
    let block = await client.getBlockByNumber(105);
    console.log("number", block.getBlockHeader().getRawData().getNumber());
    let contracts = getContractListFromTransaction(block.getTransactionsList()[0]);
    console.log("number of contracts", contracts.length);
  });
});
