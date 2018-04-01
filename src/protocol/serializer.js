const {Block, Transaction} = require("../protocol/core/Tron_pb");
const {TransferContract} = require("../protocol/core/Contract_pb");


function deserializeTransaction(tx) {
  let contractType = Transaction.Contract.ContractType;

  let contractList = tx.getRawData().getContractList();

  let transactions = [];

  for (let contract of contractList) {
    let any = contract.getParameter();

    console.log(contract.getType());

    switch (contract.getType()) {

      case contractType.ACCOUNTCREATECONTRACT: {
        // contractType = contractType .ACCOUNTCREATECONTRACT;

        let obje = any.unpack(AccountCreateContract.deserializeBinary, "protocol.AccountCreateContract");

        transactions.push({});
      }
        break;

      case contractType .TRANSFERCONTRACT: {
        // let contractType = contractType .TRANSFERCONTRACT;

        let obje = any.unpack(TransferContract.deserializeBinary, "protocol.TransferContract");

        let owner = obje.getOwnerAddress();
        let ownerHex = byteArray2hexStr(owner);
        let ownerHexSix = ownerHex.substr(0, 6) + '...';

        let to = obje.getToAddress();
        let toHex = byteArray2hexStr(to);

        let toHexSix = toHex.substr(0, 6) + '...';

        let amount = obje.getAmount() / 1000000;

        transactions.push({
          from: ownerHex,
          to: toHex,
          amount,
        });
      }
      break;
    }

  }

  return transactions;
}

module.exports = {
  deserializeTransaction
};
