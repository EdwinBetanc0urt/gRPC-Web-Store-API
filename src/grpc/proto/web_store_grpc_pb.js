// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                     *
// Contributor(s): Yamel Senih ysenih@erpya.com                                     *
// This program is free software: you can redistribute it and/or modify             *
// it under the terms of the GNU General Public License as published by             *
// the Free Software Foundation, either version 2 of the License, or                *
// (at your option) any later version.                                              *
// This program is distributed in the hope that it will be useful,                  *
// but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.	See the                     *
// GNU General Public License for more details.                                     *
// You should have received a copy of the GNU General Public License                *
// along with this program.	If not, see <https://www.gnu.org/licenses/>.            *
// **********************************************************************************
'use strict';
var grpc = require('grpc');
var proto_web_store_pb = require('../proto/web_store_pb.js');
var proto_client_pb = require('../proto/client_pb.js');

function serialize_data_ChangePasswordRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type data.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ChangePasswordRequest(buffer_arg) {
  return proto_web_store_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ChangePasswordResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ChangePasswordResponse)) {
    throw new Error('Expected argument of type data.ChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ChangePasswordResponse(buffer_arg) {
  return proto_web_store_pb.ChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateCustomerRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.CreateCustomerRequest)) {
    throw new Error('Expected argument of type data.CreateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateCustomerRequest(buffer_arg) {
  return proto_web_store_pb.CreateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Customer(arg) {
  if (!(arg instanceof proto_web_store_pb.Customer)) {
    throw new Error('Expected argument of type data.Customer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Customer(buffer_arg) {
  return proto_web_store_pb.Customer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetCustomerRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetCustomerRequest)) {
    throw new Error('Expected argument of type data.GetCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetCustomerRequest(buffer_arg) {
  return proto_web_store_pb.GetCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetResourceRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetResourceRequest)) {
    throw new Error('Expected argument of type data.GetResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetResourceRequest(buffer_arg) {
  return proto_web_store_pb.GetResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetStockRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetStockRequest)) {
    throw new Error('Expected argument of type data.GetStockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetStockRequest(buffer_arg) {
  return proto_web_store_pb.GetStockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListProductsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListProductsRequest)) {
    throw new Error('Expected argument of type data.ListProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListProductsRequest(buffer_arg) {
  return proto_web_store_pb.ListProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListProductsResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListProductsResponse)) {
    throw new Error('Expected argument of type data.ListProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListProductsResponse(buffer_arg) {
  return proto_web_store_pb.ListProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListRenderProductsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListRenderProductsRequest)) {
    throw new Error('Expected argument of type data.ListRenderProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListRenderProductsRequest(buffer_arg) {
  return proto_web_store_pb.ListRenderProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListRenderProductsResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListRenderProductsResponse)) {
    throw new Error('Expected argument of type data.ListRenderProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListRenderProductsResponse(buffer_arg) {
  return proto_web_store_pb.ListRenderProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListStocksRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListStocksRequest)) {
    throw new Error('Expected argument of type data.ListStocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListStocksRequest(buffer_arg) {
  return proto_web_store_pb.ListStocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListStocksResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListStocksResponse)) {
    throw new Error('Expected argument of type data.ListStocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListStocksResponse(buffer_arg) {
  return proto_web_store_pb.ListStocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ResetPasswordRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ResetPasswordRequest)) {
    throw new Error('Expected argument of type data.ResetPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ResetPasswordRequest(buffer_arg) {
  return proto_web_store_pb.ResetPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ResetPasswordResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ResetPasswordResponse)) {
    throw new Error('Expected argument of type data.ResetPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ResetPasswordResponse(buffer_arg) {
  return proto_web_store_pb.ResetPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Resource(arg) {
  if (!(arg instanceof proto_web_store_pb.Resource)) {
    throw new Error('Expected argument of type data.Resource');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Resource(buffer_arg) {
  return proto_web_store_pb.Resource.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Stock(arg) {
  if (!(arg instanceof proto_web_store_pb.Stock)) {
    throw new Error('Expected argument of type data.Stock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Stock(buffer_arg) {
  return proto_web_store_pb.Stock.deserializeBinary(new Uint8Array(buffer_arg));
}


// 	Web Store Service used for ADempiere integration with vue store front api
var WebStoreService = exports.WebStoreService = {
  // 	Create Customer: POST /api/user/create
createCustomer: {
    path: '/data.WebStore/CreateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.CreateCustomerRequest,
    responseType: proto_web_store_pb.Customer,
    requestSerialize: serialize_data_CreateCustomerRequest,
    requestDeserialize: deserialize_data_CreateCustomerRequest,
    responseSerialize: serialize_data_Customer,
    responseDeserialize: deserialize_data_Customer,
  },
  //  Reset Password from Store: POST /api/user/reset-password
resetPassword: {
    path: '/data.WebStore/ResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ResetPasswordRequest,
    responseType: proto_web_store_pb.ResetPasswordResponse,
    requestSerialize: serialize_data_ResetPasswordRequest,
    requestDeserialize: deserialize_data_ResetPasswordRequest,
    responseSerialize: serialize_data_ResetPasswordResponse,
    responseDeserialize: deserialize_data_ResetPasswordResponse,
  },
  //  Change Password: POST /api/user/change-password
changePassword: {
    path: '/data.WebStore/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ChangePasswordRequest,
    responseType: proto_web_store_pb.ChangePasswordResponse,
    requestSerialize: serialize_data_ChangePasswordRequest,
    requestDeserialize: deserialize_data_ChangePasswordRequest,
    responseSerialize: serialize_data_ChangePasswordResponse,
    responseDeserialize: deserialize_data_ChangePasswordResponse,
  },
  //  Get Customer: GET /api/user/me
getCustomer: {
    path: '/data.WebStore/GetCustomer',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetCustomerRequest,
    responseType: proto_web_store_pb.Customer,
    requestSerialize: serialize_data_GetCustomerRequest,
    requestDeserialize: deserialize_data_GetCustomerRequest,
    responseSerialize: serialize_data_Customer,
    responseDeserialize: deserialize_data_Customer,
  },
  //  Get Stock: GET /api/stock/check/sku
getStock: {
    path: '/data.WebStore/GetStock',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetStockRequest,
    responseType: proto_web_store_pb.Stock,
    requestSerialize: serialize_data_GetStockRequest,
    requestDeserialize: deserialize_data_GetStockRequest,
    responseSerialize: serialize_data_Stock,
    responseDeserialize: deserialize_data_Stock,
  },
  //  List Stock: GET /api/stock/list
listStocks: {
    path: '/data.WebStore/ListStocks',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListStocksRequest,
    responseType: proto_web_store_pb.ListStocksResponse,
    requestSerialize: serialize_data_ListStocksRequest,
    requestDeserialize: deserialize_data_ListStocksRequest,
    responseSerialize: serialize_data_ListStocksResponse,
    responseDeserialize: deserialize_data_ListStocksResponse,
  },
  //  List Products: GET /api/product/list
listProducts: {
    path: '/data.WebStore/ListProducts',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListProductsRequest,
    responseType: proto_web_store_pb.ListProductsResponse,
    requestSerialize: serialize_data_ListProductsRequest,
    requestDeserialize: deserialize_data_ListProductsRequest,
    responseSerialize: serialize_data_ListProductsResponse,
    responseDeserialize: deserialize_data_ListProductsResponse,
  },
  //  List Products: GET /api/product/render-list
listRenderProducts: {
    path: '/data.WebStore/ListRenderProducts',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListRenderProductsRequest,
    responseType: proto_web_store_pb.ListRenderProductsResponse,
    requestSerialize: serialize_data_ListRenderProductsRequest,
    requestDeserialize: deserialize_data_ListRenderProductsRequest,
    responseSerialize: serialize_data_ListRenderProductsResponse,
    responseDeserialize: deserialize_data_ListRenderProductsResponse,
  },
  // 	Service for get a resource from resource uuid: GET /img
getResource: {
    path: '/data.WebStore/GetResource',
    requestStream: false,
    responseStream: true,
    requestType: proto_web_store_pb.GetResourceRequest,
    responseType: proto_web_store_pb.Resource,
    requestSerialize: serialize_data_GetResourceRequest,
    requestDeserialize: deserialize_data_GetResourceRequest,
    responseSerialize: serialize_data_Resource,
    responseDeserialize: deserialize_data_Resource,
  },
};

exports.WebStoreClient = grpc.makeGenericClientConstructor(WebStoreService);
