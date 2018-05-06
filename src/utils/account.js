const byteArray2hexStr = require("./bytes").byteArray2hexStr;
const base64EncodeToString = require("../lib/code").base64EncodeToString;
const {getBase58CheckAddress, genPriKey, getAddressFromPriKey} = require("./crypto");

/**
 * Generate a new account
 */
function generateAccount() {
  let priKeyBytes = genPriKey();
  let addressBytes = getAddressFromPriKey(priKeyBytes);
  let address = getBase58CheckAddress(addressBytes);
  let privateKey = byteArray2hexStr(priKeyBytes);

  return {
    privateKey,
    address,
  }
}

module.exports = {
  generateAccount,
};
