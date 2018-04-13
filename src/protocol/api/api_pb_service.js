// package: protocol
// file: api/api.proto

var api_api_pb = require("../api/api_pb");
var core_Tron_pb = require("../core/Tron_pb");
var core_Contract_pb = require("../core/Contract_pb");

var Wallet = (function () {
  function Wallet() {}
  Wallet.serviceName = "protocol.Wallet";
  return Wallet;
}());

Wallet.GetAccount = {
  methodName: "GetAccount",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Tron_pb.Account,
  responseType: core_Tron_pb.Account
};

Wallet.CreateTransaction = {
  methodName: "CreateTransaction",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Contract_pb.TransferContract,
  responseType: core_Tron_pb.Transaction
};

Wallet.BroadcastTransaction = {
  methodName: "BroadcastTransaction",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Tron_pb.Transaction,
  responseType: api_api_pb.Return
};

Wallet.ListAccounts = {
  methodName: "ListAccounts",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: api_api_pb.EmptyMessage,
  responseType: api_api_pb.AccountList
};

Wallet.UpdateAccount = {
  methodName: "UpdateAccount",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Contract_pb.AccountUpdateContract,
  responseType: core_Tron_pb.Transaction
};

Wallet.CreateAccount = {
  methodName: "CreateAccount",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Contract_pb.AccountCreateContract,
  responseType: core_Tron_pb.Transaction
};

Wallet.VoteWitnessAccount = {
  methodName: "VoteWitnessAccount",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Contract_pb.VoteWitnessContract,
  responseType: core_Tron_pb.Transaction
};

Wallet.CreateAssetIssue = {
  methodName: "CreateAssetIssue",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Contract_pb.AssetIssueContract,
  responseType: core_Tron_pb.Transaction
};

Wallet.ListWitnesses = {
  methodName: "ListWitnesses",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: api_api_pb.EmptyMessage,
  responseType: api_api_pb.WitnessList
};

Wallet.UpdateWitness = {
  methodName: "UpdateWitness",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Contract_pb.WitnessUpdateContract,
  responseType: core_Tron_pb.Transaction
};

Wallet.CreateWitness = {
  methodName: "CreateWitness",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Contract_pb.WitnessCreateContract,
  responseType: core_Tron_pb.Transaction
};

Wallet.TransferAsset = {
  methodName: "TransferAsset",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Contract_pb.TransferAssetContract,
  responseType: core_Tron_pb.Transaction
};

Wallet.ParticipateAssetIssue = {
  methodName: "ParticipateAssetIssue",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Contract_pb.ParticipateAssetIssueContract,
  responseType: core_Tron_pb.Transaction
};

Wallet.ListNodes = {
  methodName: "ListNodes",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: api_api_pb.EmptyMessage,
  responseType: api_api_pb.NodeList
};

Wallet.GetAssetIssueList = {
  methodName: "GetAssetIssueList",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: api_api_pb.EmptyMessage,
  responseType: api_api_pb.AssetIssueList
};

Wallet.GetAssetIssueByAccount = {
  methodName: "GetAssetIssueByAccount",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: core_Tron_pb.Account,
  responseType: api_api_pb.AssetIssueList
};

Wallet.GetAssetIssueByName = {
  methodName: "GetAssetIssueByName",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: api_api_pb.BytesMessage,
  responseType: core_Contract_pb.AssetIssueContract
};

Wallet.GetNowBlock = {
  methodName: "GetNowBlock",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: api_api_pb.EmptyMessage,
  responseType: core_Tron_pb.Block
};

Wallet.GetBlockByNum = {
  methodName: "GetBlockByNum",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: api_api_pb.NumberMessage,
  responseType: core_Tron_pb.Block
};

Wallet.TotalTransaction = {
  methodName: "TotalTransaction",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: api_api_pb.EmptyMessage,
  responseType: api_api_pb.NumberMessage
};

Wallet.GetDynamicProperties = {
  methodName: "GetDynamicProperties",
  service: Wallet,
  requestStream: false,
  responseStream: false,
  requestType: api_api_pb.EmptyMessage,
  responseType: core_Tron_pb.DynamicProperties
};

exports.Wallet = Wallet;

var Database = (function () {
  function Database() {}
  Database.serviceName = "protocol.Database";
  return Database;
}());

exports.Database = Database;

var Network = (function () {
  function Network() {}
  Network.serviceName = "protocol.Network";
  return Network;
}());

exports.Network = Network;

