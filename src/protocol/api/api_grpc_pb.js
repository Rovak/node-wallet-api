// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_api_pb = require('../api/api_pb.js');
var core_Tron_pb = require('../core/Tron_pb.js');
var core_Contract_pb = require('../core/Contract_pb.js');
// var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_protocol_Account(arg) {
  if (!(arg instanceof core_Tron_pb.Account)) {
    throw new Error('Expected argument of type protocol.Account');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Account(buffer_arg) {
  return core_Tron_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AccountList(arg) {
  if (!(arg instanceof api_api_pb.AccountList)) {
    throw new Error('Expected argument of type protocol.AccountList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AccountList(buffer_arg) {
  return api_api_pb.AccountList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AccountUpdateContract(arg) {
  if (!(arg instanceof core_Contract_pb.AccountUpdateContract)) {
    throw new Error('Expected argument of type protocol.AccountUpdateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AccountUpdateContract(buffer_arg) {
  return core_Contract_pb.AccountUpdateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AssetIssueContract(arg) {
  if (!(arg instanceof core_Contract_pb.AssetIssueContract)) {
    throw new Error('Expected argument of type protocol.AssetIssueContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AssetIssueContract(buffer_arg) {
  return core_Contract_pb.AssetIssueContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_AssetIssueList(arg) {
  if (!(arg instanceof api_api_pb.AssetIssueList)) {
    throw new Error('Expected argument of type protocol.AssetIssueList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_AssetIssueList(buffer_arg) {
  return api_api_pb.AssetIssueList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_Block(arg) {
  if (!(arg instanceof core_Tron_pb.Block)) {
    throw new Error('Expected argument of type protocol.Block');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Block(buffer_arg) {
  return core_Tron_pb.Block.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BlockLimit(arg) {
  if (!(arg instanceof api_api_pb.BlockLimit)) {
    throw new Error('Expected argument of type protocol.BlockLimit');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BlockLimit(buffer_arg) {
  return api_api_pb.BlockLimit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BlockList(arg) {
  if (!(arg instanceof api_api_pb.BlockList)) {
    throw new Error('Expected argument of type protocol.BlockList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BlockList(buffer_arg) {
  return api_api_pb.BlockList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BlockReference(arg) {
  if (!(arg instanceof api_api_pb.BlockReference)) {
    throw new Error('Expected argument of type protocol.BlockReference');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BlockReference(buffer_arg) {
  return api_api_pb.BlockReference.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_BytesMessage(arg) {
  if (!(arg instanceof api_api_pb.BytesMessage)) {
    throw new Error('Expected argument of type protocol.BytesMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_BytesMessage(buffer_arg) {
  return api_api_pb.BytesMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_DynamicProperties(arg) {
  if (!(arg instanceof core_Tron_pb.DynamicProperties)) {
    throw new Error('Expected argument of type protocol.DynamicProperties');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_DynamicProperties(buffer_arg) {
  return core_Tron_pb.DynamicProperties.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_EmptyMessage(arg) {
  if (!(arg instanceof api_api_pb.EmptyMessage)) {
    throw new Error('Expected argument of type protocol.EmptyMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_EmptyMessage(buffer_arg) {
  return api_api_pb.EmptyMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_FreezeBalanceContract(arg) {
  if (!(arg instanceof core_Contract_pb.FreezeBalanceContract)) {
    throw new Error('Expected argument of type protocol.FreezeBalanceContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_FreezeBalanceContract(buffer_arg) {
  return core_Contract_pb.FreezeBalanceContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_NodeList(arg) {
  if (!(arg instanceof api_api_pb.NodeList)) {
    throw new Error('Expected argument of type protocol.NodeList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_NodeList(buffer_arg) {
  return api_api_pb.NodeList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_NumberMessage(arg) {
  if (!(arg instanceof api_api_pb.NumberMessage)) {
    throw new Error('Expected argument of type protocol.NumberMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_NumberMessage(buffer_arg) {
  return api_api_pb.NumberMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ParticipateAssetIssueContract(arg) {
  if (!(arg instanceof core_Contract_pb.ParticipateAssetIssueContract)) {
    throw new Error('Expected argument of type protocol.ParticipateAssetIssueContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_ParticipateAssetIssueContract(buffer_arg) {
  return core_Contract_pb.ParticipateAssetIssueContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_Return(arg) {
  if (!(arg instanceof api_api_pb.Return)) {
    throw new Error('Expected argument of type protocol.Return');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Return(buffer_arg) {
  return api_api_pb.Return.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TimeMessage(arg) {
  if (!(arg instanceof api_api_pb.TimeMessage)) {
    throw new Error('Expected argument of type protocol.TimeMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TimeMessage(buffer_arg) {
  return api_api_pb.TimeMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_Transaction(arg) {
  if (!(arg instanceof core_Tron_pb.Transaction)) {
    throw new Error('Expected argument of type protocol.Transaction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_Transaction(buffer_arg) {
  return core_Tron_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransactionList(arg) {
  if (!(arg instanceof api_api_pb.TransactionList)) {
    throw new Error('Expected argument of type protocol.TransactionList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransactionList(buffer_arg) {
  return api_api_pb.TransactionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransferAssetContract(arg) {
  if (!(arg instanceof core_Contract_pb.TransferAssetContract)) {
    throw new Error('Expected argument of type protocol.TransferAssetContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransferAssetContract(buffer_arg) {
  return core_Contract_pb.TransferAssetContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_TransferContract(arg) {
  if (!(arg instanceof core_Contract_pb.TransferContract)) {
    throw new Error('Expected argument of type protocol.TransferContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_TransferContract(buffer_arg) {
  return core_Contract_pb.TransferContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_UnfreezeBalanceContract(arg) {
  if (!(arg instanceof core_Contract_pb.UnfreezeBalanceContract)) {
    throw new Error('Expected argument of type protocol.UnfreezeBalanceContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_UnfreezeBalanceContract(buffer_arg) {
  return core_Contract_pb.UnfreezeBalanceContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_VoteWitnessContract(arg) {
  if (!(arg instanceof core_Contract_pb.VoteWitnessContract)) {
    throw new Error('Expected argument of type protocol.VoteWitnessContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_VoteWitnessContract(buffer_arg) {
  return core_Contract_pb.VoteWitnessContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_WithdrawBalanceContract(arg) {
  if (!(arg instanceof core_Contract_pb.WithdrawBalanceContract)) {
    throw new Error('Expected argument of type protocol.WithdrawBalanceContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_WithdrawBalanceContract(buffer_arg) {
  return core_Contract_pb.WithdrawBalanceContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_WitnessCreateContract(arg) {
  if (!(arg instanceof core_Contract_pb.WitnessCreateContract)) {
    throw new Error('Expected argument of type protocol.WitnessCreateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_WitnessCreateContract(buffer_arg) {
  return core_Contract_pb.WitnessCreateContract.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_WitnessList(arg) {
  if (!(arg instanceof api_api_pb.WitnessList)) {
    throw new Error('Expected argument of type protocol.WitnessList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_WitnessList(buffer_arg) {
  return api_api_pb.WitnessList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_WitnessUpdateContract(arg) {
  if (!(arg instanceof core_Contract_pb.WitnessUpdateContract)) {
    throw new Error('Expected argument of type protocol.WitnessUpdateContract');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_protocol_WitnessUpdateContract(buffer_arg) {
  return core_Contract_pb.WitnessUpdateContract.deserializeBinary(new Uint8Array(buffer_arg));
}


var WalletService = exports.WalletService = {
  getAccount: {
    path: '/protocol.Wallet/GetAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: core_Tron_pb.Account,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_Account,
    responseDeserialize: deserialize_protocol_Account,
  },
  createTransaction: {
    path: '/protocol.Wallet/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.TransferContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_TransferContract,
    requestDeserialize: deserialize_protocol_TransferContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  broadcastTransaction: {
    path: '/protocol.Wallet/BroadcastTransaction',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Transaction,
    responseType: api_api_pb.Return,
    requestSerialize: serialize_protocol_Transaction,
    requestDeserialize: deserialize_protocol_Transaction,
    responseSerialize: serialize_protocol_Return,
    responseDeserialize: deserialize_protocol_Return,
  },
  listAccounts: {
    path: '/protocol.Wallet/ListAccounts',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.AccountList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_AccountList,
    responseDeserialize: deserialize_protocol_AccountList,
  },
  updateAccount: {
    path: '/protocol.Wallet/UpdateAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.AccountUpdateContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_AccountUpdateContract,
    requestDeserialize: deserialize_protocol_AccountUpdateContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  voteWitnessAccount: {
    path: '/protocol.Wallet/VoteWitnessAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.VoteWitnessContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_VoteWitnessContract,
    requestDeserialize: deserialize_protocol_VoteWitnessContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  createAssetIssue: {
    path: '/protocol.Wallet/CreateAssetIssue',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.AssetIssueContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_AssetIssueContract,
    requestDeserialize: deserialize_protocol_AssetIssueContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  listWitnesses: {
    path: '/protocol.Wallet/ListWitnesses',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.WitnessList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_WitnessList,
    responseDeserialize: deserialize_protocol_WitnessList,
  },
  updateWitness: {
    path: '/protocol.Wallet/UpdateWitness',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.WitnessUpdateContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_WitnessUpdateContract,
    requestDeserialize: deserialize_protocol_WitnessUpdateContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  createWitness: {
    path: '/protocol.Wallet/CreateWitness',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.WitnessCreateContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_WitnessCreateContract,
    requestDeserialize: deserialize_protocol_WitnessCreateContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  transferAsset: {
    path: '/protocol.Wallet/TransferAsset',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.TransferAssetContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_TransferAssetContract,
    requestDeserialize: deserialize_protocol_TransferAssetContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  participateAssetIssue: {
    path: '/protocol.Wallet/ParticipateAssetIssue',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.ParticipateAssetIssueContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_ParticipateAssetIssueContract,
    requestDeserialize: deserialize_protocol_ParticipateAssetIssueContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  freezeBalance: {
    path: '/protocol.Wallet/FreezeBalance',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.FreezeBalanceContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_FreezeBalanceContract,
    requestDeserialize: deserialize_protocol_FreezeBalanceContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  unfreezeBalance: {
    path: '/protocol.Wallet/UnfreezeBalance',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.UnfreezeBalanceContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_UnfreezeBalanceContract,
    requestDeserialize: deserialize_protocol_UnfreezeBalanceContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  withdrawBalance: {
    path: '/protocol.Wallet/WithdrawBalance',
    requestStream: false,
    responseStream: false,
    requestType: core_Contract_pb.WithdrawBalanceContract,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_WithdrawBalanceContract,
    requestDeserialize: deserialize_protocol_WithdrawBalanceContract,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  listNodes: {
    path: '/protocol.Wallet/ListNodes',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.NodeList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_NodeList,
    responseDeserialize: deserialize_protocol_NodeList,
  },
  getAssetIssueList: {
    path: '/protocol.Wallet/GetAssetIssueList',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getAssetIssueByAccount: {
    path: '/protocol.Wallet/GetAssetIssueByAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getAssetIssueByName: {
    path: '/protocol.Wallet/GetAssetIssueByName',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Contract_pb.AssetIssueContract,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_AssetIssueContract,
    responseDeserialize: deserialize_protocol_AssetIssueContract,
  },
  getNowBlock: {
    path: '/protocol.Wallet/GetNowBlock',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  getBlockByNum: {
    path: '/protocol.Wallet/GetBlockByNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  totalTransaction: {
    path: '/protocol.Wallet/TotalTransaction',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
  getBlockById: {
    path: '/protocol.Wallet/GetBlockById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  getBlockByLimitNext: {
    path: '/protocol.Wallet/GetBlockByLimitNext',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BlockLimit,
    responseType: api_api_pb.BlockList,
    requestSerialize: serialize_protocol_BlockLimit,
    requestDeserialize: deserialize_protocol_BlockLimit,
    responseSerialize: serialize_protocol_BlockList,
    responseDeserialize: deserialize_protocol_BlockList,
  },
  getBlockByLatestNum: {
    path: '/protocol.Wallet/GetBlockByLatestNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: api_api_pb.BlockList,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_BlockList,
    responseDeserialize: deserialize_protocol_BlockList,
  },
  getTransactionById: {
    path: '/protocol.Wallet/GetTransactionById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
};

exports.WalletClient = grpc.makeGenericClientConstructor(WalletService);
var WalletSolidityService = exports.WalletSolidityService = {
  getAccount: {
    path: '/protocol.WalletSolidity/GetAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: core_Tron_pb.Account,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_Account,
    responseDeserialize: deserialize_protocol_Account,
  },
  listAccounts: {
    path: '/protocol.WalletSolidity/ListAccounts',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.AccountList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_AccountList,
    responseDeserialize: deserialize_protocol_AccountList,
  },
  listWitnesses: {
    path: '/protocol.WalletSolidity/ListWitnesses',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.WitnessList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_WitnessList,
    responseDeserialize: deserialize_protocol_WitnessList,
  },
  getAssetIssueList: {
    path: '/protocol.WalletSolidity/GetAssetIssueList',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getAssetIssueListByTimestamp: {
    path: '/protocol.WalletSolidity/GetAssetIssueListByTimestamp',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getAssetIssueByAccount: {
    path: '/protocol.WalletSolidity/GetAssetIssueByAccount',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: api_api_pb.AssetIssueList,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_AssetIssueList,
    responseDeserialize: deserialize_protocol_AssetIssueList,
  },
  getAssetIssueByName: {
    path: '/protocol.WalletSolidity/GetAssetIssueByName',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Contract_pb.AssetIssueContract,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_AssetIssueContract,
    responseDeserialize: deserialize_protocol_AssetIssueContract,
  },
  getNowBlock: {
    path: '/protocol.WalletSolidity/GetNowBlock',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  getBlockByNum: {
    path: '/protocol.WalletSolidity/GetBlockByNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  // get transaction
  totalTransaction: {
    path: '/protocol.WalletSolidity/TotalTransaction',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.NumberMessage,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_NumberMessage,
    responseDeserialize: deserialize_protocol_NumberMessage,
  },
  getTransactionById: {
    path: '/protocol.WalletSolidity/GetTransactionById',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.BytesMessage,
    responseType: core_Tron_pb.Transaction,
    requestSerialize: serialize_protocol_BytesMessage,
    requestDeserialize: deserialize_protocol_BytesMessage,
    responseSerialize: serialize_protocol_Transaction,
    responseDeserialize: deserialize_protocol_Transaction,
  },
  getTransactionsByTimestamp: {
    path: '/protocol.WalletSolidity/GetTransactionsByTimestamp',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.TimeMessage,
    responseType: api_api_pb.TransactionList,
    requestSerialize: serialize_protocol_TimeMessage,
    requestDeserialize: deserialize_protocol_TimeMessage,
    responseSerialize: serialize_protocol_TransactionList,
    responseDeserialize: deserialize_protocol_TransactionList,
  },
  getTransactionsFromThis: {
    path: '/protocol.WalletSolidity/GetTransactionsFromThis',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: api_api_pb.TransactionList,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_TransactionList,
    responseDeserialize: deserialize_protocol_TransactionList,
  },
  getTransactionsToThis: {
    path: '/protocol.WalletSolidity/GetTransactionsToThis',
    requestStream: false,
    responseStream: false,
    requestType: core_Tron_pb.Account,
    responseType: api_api_pb.TransactionList,
    requestSerialize: serialize_protocol_Account,
    requestDeserialize: deserialize_protocol_Account,
    responseSerialize: serialize_protocol_TransactionList,
    responseDeserialize: deserialize_protocol_TransactionList,
  },
};

exports.WalletSolidityClient = grpc.makeGenericClientConstructor(WalletSolidityService);
// the api of tron's db
var DatabaseService = exports.DatabaseService = {
  // for tapos
  getBlockReference: {
    path: '/protocol.Database/getBlockReference',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: api_api_pb.BlockReference,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_BlockReference,
    responseDeserialize: deserialize_protocol_BlockReference,
  },
  getDynamicProperties: {
    path: '/protocol.Database/GetDynamicProperties',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.DynamicProperties,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_DynamicProperties,
    responseDeserialize: deserialize_protocol_DynamicProperties,
  },
  getNowBlock: {
    path: '/protocol.Database/GetNowBlock',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.EmptyMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_EmptyMessage,
    requestDeserialize: deserialize_protocol_EmptyMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
  getBlockByNum: {
    path: '/protocol.Database/GetBlockByNum',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.NumberMessage,
    responseType: core_Tron_pb.Block,
    requestSerialize: serialize_protocol_NumberMessage,
    requestDeserialize: deserialize_protocol_NumberMessage,
    responseSerialize: serialize_protocol_Block,
    responseDeserialize: deserialize_protocol_Block,
  },
};

exports.DatabaseClient = grpc.makeGenericClientConstructor(DatabaseService);
// the api of tron's network such as node list.
var NetworkService = exports.NetworkService = {
};

exports.NetworkClient = grpc.makeGenericClientConstructor(NetworkService);
