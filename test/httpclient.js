const {HttpClient} = require("../src");
const assert = require("assert");

describe('http client', () => {

  return;

  let client = new HttpClient({
    hostname: "tronscan.io",
    port: 80,
  });

  it('show latest block', async () => {
    let latestBlock = await client.getLatestBlock();
  });

  it('show latest 7 blocks', async () => {
    let latestBlock = await client.getLatestBlock();
    for (let i = 0; i < 7; i++) {
      let block = await client.getBlockByNum(latestBlock.number - i);
      console.log("BLOCK", block);
    }
  });

});
