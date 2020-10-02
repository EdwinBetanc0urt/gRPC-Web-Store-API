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

function serialize_data_Cart(arg) {
  if (!(arg instanceof proto_web_store_pb.Cart)) {
    throw new Error('Expected argument of type data.Cart');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Cart(buffer_arg) {
  return proto_web_store_pb.Cart.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CartItem(arg) {
  if (!(arg instanceof proto_web_store_pb.CartItem)) {
    throw new Error('Expected argument of type data.CartItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CartItem(buffer_arg) {
  return proto_web_store_pb.CartItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CartTotals(arg) {
  if (!(arg instanceof proto_web_store_pb.CartTotals)) {
    throw new Error('Expected argument of type data.CartTotals');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CartTotals(buffer_arg) {
  return proto_web_store_pb.CartTotals.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_data_CreateCartRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.CreateCartRequest)) {
    throw new Error('Expected argument of type data.CreateCartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateCartRequest(buffer_arg) {
  return proto_web_store_pb.CreateCartRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_CreateOrderRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type data.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateOrderRequest(buffer_arg) {
  return proto_web_store_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_DeleteCartItemRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.DeleteCartItemRequest)) {
    throw new Error('Expected argument of type data.DeleteCartItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteCartItemRequest(buffer_arg) {
  return proto_web_store_pb.DeleteCartItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Empty(arg) {
  if (!(arg instanceof proto_web_store_pb.Empty)) {
    throw new Error('Expected argument of type data.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Empty(buffer_arg) {
  return proto_web_store_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetCartRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetCartRequest)) {
    throw new Error('Expected argument of type data.GetCartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetCartRequest(buffer_arg) {
  return proto_web_store_pb.GetCartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetCartTotalsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetCartTotalsRequest)) {
    throw new Error('Expected argument of type data.GetCartTotalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetCartTotalsRequest(buffer_arg) {
  return proto_web_store_pb.GetCartTotalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_GetShippingInformationRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetShippingInformationRequest)) {
    throw new Error('Expected argument of type data.GetShippingInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetShippingInformationRequest(buffer_arg) {
  return proto_web_store_pb.GetShippingInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_ListPaymentMethodsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListPaymentMethodsRequest)) {
    throw new Error('Expected argument of type data.ListPaymentMethodsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPaymentMethodsRequest(buffer_arg) {
  return proto_web_store_pb.ListPaymentMethodsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPaymentMethodsResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListPaymentMethodsResponse)) {
    throw new Error('Expected argument of type data.ListPaymentMethodsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPaymentMethodsResponse(buffer_arg) {
  return proto_web_store_pb.ListPaymentMethodsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_ListShippingMethodsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListShippingMethodsRequest)) {
    throw new Error('Expected argument of type data.ListShippingMethodsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListShippingMethodsRequest(buffer_arg) {
  return proto_web_store_pb.ListShippingMethodsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListShippingMethodsResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListShippingMethodsResponse)) {
    throw new Error('Expected argument of type data.ListShippingMethodsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListShippingMethodsResponse(buffer_arg) {
  return proto_web_store_pb.ListShippingMethodsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_Order(arg) {
  if (!(arg instanceof proto_web_store_pb.Order)) {
    throw new Error('Expected argument of type data.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Order(buffer_arg) {
  return proto_web_store_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_ShippingInformation(arg) {
  if (!(arg instanceof proto_web_store_pb.ShippingInformation)) {
    throw new Error('Expected argument of type data.ShippingInformation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ShippingInformation(buffer_arg) {
  return proto_web_store_pb.ShippingInformation.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_UpdateCartRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.UpdateCartRequest)) {
    throw new Error('Expected argument of type data.UpdateCartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateCartRequest(buffer_arg) {
  return proto_web_store_pb.UpdateCartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateCustomerRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.UpdateCustomerRequest)) {
    throw new Error('Expected argument of type data.UpdateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateCustomerRequest(buffer_arg) {
  return proto_web_store_pb.UpdateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  // 	Update Cutomer Info: POST /api/user/me
updateCustomer: {
    path: '/data.WebStore/UpdateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.UpdateCustomerRequest,
    responseType: proto_web_store_pb.Customer,
    requestSerialize: serialize_data_UpdateCustomerRequest,
    requestDeserialize: deserialize_data_UpdateCustomerRequest,
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
  // 	Create Cart: POST /api/cart/create
createCart: {
    path: '/data.WebStore/CreateCart',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.CreateCartRequest,
    responseType: proto_web_store_pb.Cart,
    requestSerialize: serialize_data_CreateCartRequest,
    requestDeserialize: deserialize_data_CreateCartRequest,
    responseSerialize: serialize_data_Cart,
    responseDeserialize: deserialize_data_Cart,
  },
  // 	Pull Cart: GET /api/cart/pull
getCart: {
    path: '/data.WebStore/GetCart',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetCartRequest,
    responseType: proto_web_store_pb.Cart,
    requestSerialize: serialize_data_GetCartRequest,
    requestDeserialize: deserialize_data_GetCartRequest,
    responseSerialize: serialize_data_Cart,
    responseDeserialize: deserialize_data_Cart,
  },
  // 	Update Cart: POST /api/cart/update
updateCart: {
    path: '/data.WebStore/UpdateCart',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.UpdateCartRequest,
    responseType: proto_web_store_pb.CartItem,
    requestSerialize: serialize_data_UpdateCartRequest,
    requestDeserialize: deserialize_data_UpdateCartRequest,
    responseSerialize: serialize_data_CartItem,
    responseDeserialize: deserialize_data_CartItem,
  },
  // 	Create Order: POST /api/order/create
createOrder: {
    path: '/data.WebStore/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.CreateOrderRequest,
    responseType: proto_web_store_pb.Order,
    requestSerialize: serialize_data_CreateOrderRequest,
    requestDeserialize: deserialize_data_CreateOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order,
  },
  // 	Get Payment Methods: GET /api/cart/payment-methods
listPaymentMethods: {
    path: '/data.WebStore/ListPaymentMethods',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListPaymentMethodsRequest,
    responseType: proto_web_store_pb.ListPaymentMethodsResponse,
    requestSerialize: serialize_data_ListPaymentMethodsRequest,
    requestDeserialize: deserialize_data_ListPaymentMethodsRequest,
    responseSerialize: serialize_data_ListPaymentMethodsResponse,
    responseDeserialize: deserialize_data_ListPaymentMethodsResponse,
  },
  // 	Get Shipping Methods: POST /api/cart/shipping-methods
listShippingMethods: {
    path: '/data.WebStore/ListShippingMethods',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListShippingMethodsRequest,
    responseType: proto_web_store_pb.ListShippingMethodsResponse,
    requestSerialize: serialize_data_ListShippingMethodsRequest,
    requestDeserialize: deserialize_data_ListShippingMethodsRequest,
    responseSerialize: serialize_data_ListShippingMethodsResponse,
    responseDeserialize: deserialize_data_ListShippingMethodsResponse,
  },
  // 	Get Shipping Information: POST /api/cart/shipping-information
getShippingInformation: {
    path: '/data.WebStore/GetShippingInformation',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetShippingInformationRequest,
    responseType: proto_web_store_pb.ShippingInformation,
    requestSerialize: serialize_data_GetShippingInformationRequest,
    requestDeserialize: deserialize_data_GetShippingInformationRequest,
    responseSerialize: serialize_data_ShippingInformation,
    responseDeserialize: deserialize_data_ShippingInformation,
  },
  // 	Get Cart Totals: GET /api/cart/totals
getCartTotals: {
    path: '/data.WebStore/GetCartTotals',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetCartTotalsRequest,
    responseType: proto_web_store_pb.CartTotals,
    requestSerialize: serialize_data_GetCartTotalsRequest,
    requestDeserialize: deserialize_data_GetCartTotalsRequest,
    responseSerialize: serialize_data_CartTotals,
    responseDeserialize: deserialize_data_CartTotals,
  },
  // 	Post Cart: POST /api/cart/delete
deleteCartItem: {
    path: '/data.WebStore/DeleteCartItem',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.DeleteCartItemRequest,
    responseType: proto_web_store_pb.Empty,
    requestSerialize: serialize_data_DeleteCartItemRequest,
    requestDeserialize: deserialize_data_DeleteCartItemRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
};

exports.WebStoreClient = grpc.makeGenericClientConstructor(WebStoreService);
