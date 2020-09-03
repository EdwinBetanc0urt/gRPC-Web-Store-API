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


// 	Web Store Service used for ADempiere integration with vue store front api
var WebStoreService = exports.WebStoreService = {
  // 	Create Customer: POST /api/user/create: https://docs.storefrontapi.com/guide/default-modules/api.html#post-api-user-create
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
};

exports.WebStoreClient = grpc.makeGenericClientConstructor(WebStoreService);
