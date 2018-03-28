const {Client} = require("../src");

describe('client', () => {

  let client = new Client({
    hostname: "localhost",
    port: 50051,
  });

  it('list nodes', async () => {
    let nodes = await client.getNodes();
    for (let node of nodes) {
      console.log("node", node.getAddress().getHost_asB64())
    }
  });

  it('read witnesses', async () => {
    let witnesses = await client.getWitnesses();

    for (let witness of witnesses) {
      console.log("witness", witness.getUrl())
    }
  });
});
