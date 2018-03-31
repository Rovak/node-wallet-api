const {Block, Transaction} = require("../protocol/core/Tron_pb");
const {TransferContract} = require("../protocol/core/Contract_pb");


function deserializeTransaction(tx) {
  let contractType = Transaction.Contract.ContractType;

  let contractList = tx.getRawData().getContractList();
  for (let contract of contractList) {
    let any = contract.getParameter();

    switch (contract.getType()) {

      case contractType .ACCOUNTCREATECONTRACT: {
        // contractType = contractType .ACCOUNTCREATECONTRACT;

        let obje = any.unpack(AccountCreateContract.deserializeBinary, "protocol.AccountCreateContract");

        return {};
      }

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

        return {
          from: ownerHex,
          to: toHex,
          amount,
        };
      }
    }
  }
}

module.exports = {
  deserializeTransaction
};
