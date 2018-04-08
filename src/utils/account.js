const byteArray2hexStr = require("./bytes").byteArray2hexStr;
const base64EncodeToString = require("../lib/code").base64EncodeToString;
const {genPriKey, getAddressFromPriKey} = require("./crypto");

function generateAccount() {
  let priKeyBytes = genPriKey();
  let addressBytes = getAddressFromPriKey(priKeyBytes);
  let pk = base64EncodeToString(priKeyBytes);
  let address = byteArray2hexStr(addressBytes);

  return {
    privateKey: pk,
    address,
    password: byteArray2hexStr(priKeyBytes),
  }
}


module.exports = {
  generateAccount,
};
