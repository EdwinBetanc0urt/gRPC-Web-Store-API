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

function serialize_store_Cart(arg) {
  if (!(arg instanceof proto_web_store_pb.Cart)) {
    throw new Error('Expected argument of type store.Cart');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_Cart(buffer_arg) {
  return proto_web_store_pb.Cart.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_CartItem(arg) {
  if (!(arg instanceof proto_web_store_pb.CartItem)) {
    throw new Error('Expected argument of type store.CartItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_CartItem(buffer_arg) {
  return proto_web_store_pb.CartItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_CartTotals(arg) {
  if (!(arg instanceof proto_web_store_pb.CartTotals)) {
    throw new Error('Expected argument of type store.CartTotals');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_CartTotals(buffer_arg) {
  return proto_web_store_pb.CartTotals.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ChangePasswordRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type store.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ChangePasswordRequest(buffer_arg) {
  return proto_web_store_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ChangePasswordResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ChangePasswordResponse)) {
    throw new Error('Expected argument of type store.ChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ChangePasswordResponse(buffer_arg) {
  return proto_web_store_pb.ChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_CreateCartRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.CreateCartRequest)) {
    throw new Error('Expected argument of type store.CreateCartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_CreateCartRequest(buffer_arg) {
  return proto_web_store_pb.CreateCartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_CreateCustomerRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.CreateCustomerRequest)) {
    throw new Error('Expected argument of type store.CreateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_CreateCustomerRequest(buffer_arg) {
  return proto_web_store_pb.CreateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_CreateOrderRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type store.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_CreateOrderRequest(buffer_arg) {
  return proto_web_store_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_Customer(arg) {
  if (!(arg instanceof proto_web_store_pb.Customer)) {
    throw new Error('Expected argument of type store.Customer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_Customer(buffer_arg) {
  return proto_web_store_pb.Customer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_DeleteCartItemRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.DeleteCartItemRequest)) {
    throw new Error('Expected argument of type store.DeleteCartItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_DeleteCartItemRequest(buffer_arg) {
  return proto_web_store_pb.DeleteCartItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_Empty(arg) {
  if (!(arg instanceof proto_web_store_pb.Empty)) {
    throw new Error('Expected argument of type store.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_Empty(buffer_arg) {
  return proto_web_store_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_GetCartRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetCartRequest)) {
    throw new Error('Expected argument of type store.GetCartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_GetCartRequest(buffer_arg) {
  return proto_web_store_pb.GetCartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_GetCartTotalsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetCartTotalsRequest)) {
    throw new Error('Expected argument of type store.GetCartTotalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_GetCartTotalsRequest(buffer_arg) {
  return proto_web_store_pb.GetCartTotalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_GetCustomerRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetCustomerRequest)) {
    throw new Error('Expected argument of type store.GetCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_GetCustomerRequest(buffer_arg) {
  return proto_web_store_pb.GetCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_GetResourceRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetResourceRequest)) {
    throw new Error('Expected argument of type store.GetResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_GetResourceRequest(buffer_arg) {
  return proto_web_store_pb.GetResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_GetShippingInformationRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetShippingInformationRequest)) {
    throw new Error('Expected argument of type store.GetShippingInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_GetShippingInformationRequest(buffer_arg) {
  return proto_web_store_pb.GetShippingInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_GetStockRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.GetStockRequest)) {
    throw new Error('Expected argument of type store.GetStockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_GetStockRequest(buffer_arg) {
  return proto_web_store_pb.GetStockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListPaymentMethodsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListPaymentMethodsRequest)) {
    throw new Error('Expected argument of type store.ListPaymentMethodsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListPaymentMethodsRequest(buffer_arg) {
  return proto_web_store_pb.ListPaymentMethodsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListPaymentMethodsResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListPaymentMethodsResponse)) {
    throw new Error('Expected argument of type store.ListPaymentMethodsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListPaymentMethodsResponse(buffer_arg) {
  return proto_web_store_pb.ListPaymentMethodsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListProductsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListProductsRequest)) {
    throw new Error('Expected argument of type store.ListProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListProductsRequest(buffer_arg) {
  return proto_web_store_pb.ListProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListProductsResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListProductsResponse)) {
    throw new Error('Expected argument of type store.ListProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListProductsResponse(buffer_arg) {
  return proto_web_store_pb.ListProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListRenderProductsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListRenderProductsRequest)) {
    throw new Error('Expected argument of type store.ListRenderProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListRenderProductsRequest(buffer_arg) {
  return proto_web_store_pb.ListRenderProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListRenderProductsResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListRenderProductsResponse)) {
    throw new Error('Expected argument of type store.ListRenderProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListRenderProductsResponse(buffer_arg) {
  return proto_web_store_pb.ListRenderProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListShippingMethodsRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListShippingMethodsRequest)) {
    throw new Error('Expected argument of type store.ListShippingMethodsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListShippingMethodsRequest(buffer_arg) {
  return proto_web_store_pb.ListShippingMethodsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListShippingMethodsResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListShippingMethodsResponse)) {
    throw new Error('Expected argument of type store.ListShippingMethodsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListShippingMethodsResponse(buffer_arg) {
  return proto_web_store_pb.ListShippingMethodsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListStocksRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ListStocksRequest)) {
    throw new Error('Expected argument of type store.ListStocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListStocksRequest(buffer_arg) {
  return proto_web_store_pb.ListStocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ListStocksResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ListStocksResponse)) {
    throw new Error('Expected argument of type store.ListStocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ListStocksResponse(buffer_arg) {
  return proto_web_store_pb.ListStocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_Order(arg) {
  if (!(arg instanceof proto_web_store_pb.Order)) {
    throw new Error('Expected argument of type store.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_Order(buffer_arg) {
  return proto_web_store_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ResetPasswordRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.ResetPasswordRequest)) {
    throw new Error('Expected argument of type store.ResetPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ResetPasswordRequest(buffer_arg) {
  return proto_web_store_pb.ResetPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ResetPasswordResponse(arg) {
  if (!(arg instanceof proto_web_store_pb.ResetPasswordResponse)) {
    throw new Error('Expected argument of type store.ResetPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ResetPasswordResponse(buffer_arg) {
  return proto_web_store_pb.ResetPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_Resource(arg) {
  if (!(arg instanceof proto_web_store_pb.Resource)) {
    throw new Error('Expected argument of type store.Resource');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_Resource(buffer_arg) {
  return proto_web_store_pb.Resource.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_ShippingInformation(arg) {
  if (!(arg instanceof proto_web_store_pb.ShippingInformation)) {
    throw new Error('Expected argument of type store.ShippingInformation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_ShippingInformation(buffer_arg) {
  return proto_web_store_pb.ShippingInformation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_Stock(arg) {
  if (!(arg instanceof proto_web_store_pb.Stock)) {
    throw new Error('Expected argument of type store.Stock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_Stock(buffer_arg) {
  return proto_web_store_pb.Stock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_UpdateCartRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.UpdateCartRequest)) {
    throw new Error('Expected argument of type store.UpdateCartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_UpdateCartRequest(buffer_arg) {
  return proto_web_store_pb.UpdateCartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_store_UpdateCustomerRequest(arg) {
  if (!(arg instanceof proto_web_store_pb.UpdateCustomerRequest)) {
    throw new Error('Expected argument of type store.UpdateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_store_UpdateCustomerRequest(buffer_arg) {
  return proto_web_store_pb.UpdateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// 	Web Store Service used for ADempiere integration with vue store front api
var WebStoreService = exports.WebStoreService = {
  // 	Create Customer: POST /api/user/create
createCustomer: {
    path: '/store.WebStore/CreateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.CreateCustomerRequest,
    responseType: proto_web_store_pb.Customer,
    requestSerialize: serialize_store_CreateCustomerRequest,
    requestDeserialize: deserialize_store_CreateCustomerRequest,
    responseSerialize: serialize_store_Customer,
    responseDeserialize: deserialize_store_Customer,
  },
  //  Reset Password from Store: POST /api/user/reset-password
resetPassword: {
    path: '/store.WebStore/ResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ResetPasswordRequest,
    responseType: proto_web_store_pb.ResetPasswordResponse,
    requestSerialize: serialize_store_ResetPasswordRequest,
    requestDeserialize: deserialize_store_ResetPasswordRequest,
    responseSerialize: serialize_store_ResetPasswordResponse,
    responseDeserialize: deserialize_store_ResetPasswordResponse,
  },
  //  Change Password: POST /api/user/change-password
changePassword: {
    path: '/store.WebStore/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ChangePasswordRequest,
    responseType: proto_web_store_pb.ChangePasswordResponse,
    requestSerialize: serialize_store_ChangePasswordRequest,
    requestDeserialize: deserialize_store_ChangePasswordRequest,
    responseSerialize: serialize_store_ChangePasswordResponse,
    responseDeserialize: deserialize_store_ChangePasswordResponse,
  },
  //  Get Customer: GET /api/user/me
getCustomer: {
    path: '/store.WebStore/GetCustomer',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetCustomerRequest,
    responseType: proto_web_store_pb.Customer,
    requestSerialize: serialize_store_GetCustomerRequest,
    requestDeserialize: deserialize_store_GetCustomerRequest,
    responseSerialize: serialize_store_Customer,
    responseDeserialize: deserialize_store_Customer,
  },
  // 	Update Cutomer Info: POST /api/user/me
updateCustomer: {
    path: '/store.WebStore/UpdateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.UpdateCustomerRequest,
    responseType: proto_web_store_pb.Customer,
    requestSerialize: serialize_store_UpdateCustomerRequest,
    requestDeserialize: deserialize_store_UpdateCustomerRequest,
    responseSerialize: serialize_store_Customer,
    responseDeserialize: deserialize_store_Customer,
  },
  //  Get Stock: GET /api/stock/check/sku
getStock: {
    path: '/store.WebStore/GetStock',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetStockRequest,
    responseType: proto_web_store_pb.Stock,
    requestSerialize: serialize_store_GetStockRequest,
    requestDeserialize: deserialize_store_GetStockRequest,
    responseSerialize: serialize_store_Stock,
    responseDeserialize: deserialize_store_Stock,
  },
  //  List Stock: GET /api/stock/list
listStocks: {
    path: '/store.WebStore/ListStocks',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListStocksRequest,
    responseType: proto_web_store_pb.ListStocksResponse,
    requestSerialize: serialize_store_ListStocksRequest,
    requestDeserialize: deserialize_store_ListStocksRequest,
    responseSerialize: serialize_store_ListStocksResponse,
    responseDeserialize: deserialize_store_ListStocksResponse,
  },
  //  List Products: GET /api/product/list
listProducts: {
    path: '/store.WebStore/ListProducts',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListProductsRequest,
    responseType: proto_web_store_pb.ListProductsResponse,
    requestSerialize: serialize_store_ListProductsRequest,
    requestDeserialize: deserialize_store_ListProductsRequest,
    responseSerialize: serialize_store_ListProductsResponse,
    responseDeserialize: deserialize_store_ListProductsResponse,
  },
  //  List Products: GET /api/product/render-list
listRenderProducts: {
    path: '/store.WebStore/ListRenderProducts',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListRenderProductsRequest,
    responseType: proto_web_store_pb.ListRenderProductsResponse,
    requestSerialize: serialize_store_ListRenderProductsRequest,
    requestDeserialize: deserialize_store_ListRenderProductsRequest,
    responseSerialize: serialize_store_ListRenderProductsResponse,
    responseDeserialize: deserialize_store_ListRenderProductsResponse,
  },
  // 	Service for get a resource from resource uuid: GET /img
getResource: {
    path: '/store.WebStore/GetResource',
    requestStream: false,
    responseStream: true,
    requestType: proto_web_store_pb.GetResourceRequest,
    responseType: proto_web_store_pb.Resource,
    requestSerialize: serialize_store_GetResourceRequest,
    requestDeserialize: deserialize_store_GetResourceRequest,
    responseSerialize: serialize_store_Resource,
    responseDeserialize: deserialize_store_Resource,
  },
  // 	Create Cart: POST /api/cart/create
createCart: {
    path: '/store.WebStore/CreateCart',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.CreateCartRequest,
    responseType: proto_web_store_pb.Cart,
    requestSerialize: serialize_store_CreateCartRequest,
    requestDeserialize: deserialize_store_CreateCartRequest,
    responseSerialize: serialize_store_Cart,
    responseDeserialize: deserialize_store_Cart,
  },
  // 	Pull Cart: GET /api/cart/pull
getCart: {
    path: '/store.WebStore/GetCart',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetCartRequest,
    responseType: proto_web_store_pb.Cart,
    requestSerialize: serialize_store_GetCartRequest,
    requestDeserialize: deserialize_store_GetCartRequest,
    responseSerialize: serialize_store_Cart,
    responseDeserialize: deserialize_store_Cart,
  },
  // 	Update Cart: POST /api/cart/update
updateCart: {
    path: '/store.WebStore/UpdateCart',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.UpdateCartRequest,
    responseType: proto_web_store_pb.CartItem,
    requestSerialize: serialize_store_UpdateCartRequest,
    requestDeserialize: deserialize_store_UpdateCartRequest,
    responseSerialize: serialize_store_CartItem,
    responseDeserialize: deserialize_store_CartItem,
  },
  // 	Create Order: POST /api/order/create
createOrder: {
    path: '/store.WebStore/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.CreateOrderRequest,
    responseType: proto_web_store_pb.Order,
    requestSerialize: serialize_store_CreateOrderRequest,
    requestDeserialize: deserialize_store_CreateOrderRequest,
    responseSerialize: serialize_store_Order,
    responseDeserialize: deserialize_store_Order,
  },
  // 	Get Payment Methods: GET /api/cart/payment-methods
listPaymentMethods: {
    path: '/store.WebStore/ListPaymentMethods',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListPaymentMethodsRequest,
    responseType: proto_web_store_pb.ListPaymentMethodsResponse,
    requestSerialize: serialize_store_ListPaymentMethodsRequest,
    requestDeserialize: deserialize_store_ListPaymentMethodsRequest,
    responseSerialize: serialize_store_ListPaymentMethodsResponse,
    responseDeserialize: deserialize_store_ListPaymentMethodsResponse,
  },
  // 	Get Shipping Methods: POST /api/cart/shipping-methods
listShippingMethods: {
    path: '/store.WebStore/ListShippingMethods',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.ListShippingMethodsRequest,
    responseType: proto_web_store_pb.ListShippingMethodsResponse,
    requestSerialize: serialize_store_ListShippingMethodsRequest,
    requestDeserialize: deserialize_store_ListShippingMethodsRequest,
    responseSerialize: serialize_store_ListShippingMethodsResponse,
    responseDeserialize: deserialize_store_ListShippingMethodsResponse,
  },
  // 	Get Shipping Information: POST /api/cart/shipping-information
getShippingInformation: {
    path: '/store.WebStore/GetShippingInformation',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetShippingInformationRequest,
    responseType: proto_web_store_pb.ShippingInformation,
    requestSerialize: serialize_store_GetShippingInformationRequest,
    requestDeserialize: deserialize_store_GetShippingInformationRequest,
    responseSerialize: serialize_store_ShippingInformation,
    responseDeserialize: deserialize_store_ShippingInformation,
  },
  // 	Get Cart Totals: GET /api/cart/totals
getCartTotals: {
    path: '/store.WebStore/GetCartTotals',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.GetCartTotalsRequest,
    responseType: proto_web_store_pb.CartTotals,
    requestSerialize: serialize_store_GetCartTotalsRequest,
    requestDeserialize: deserialize_store_GetCartTotalsRequest,
    responseSerialize: serialize_store_CartTotals,
    responseDeserialize: deserialize_store_CartTotals,
  },
  // 	Post Cart: POST /api/cart/delete
deleteCartItem: {
    path: '/store.WebStore/DeleteCartItem',
    requestStream: false,
    responseStream: false,
    requestType: proto_web_store_pb.DeleteCartItemRequest,
    responseType: proto_web_store_pb.Empty,
    requestSerialize: serialize_store_DeleteCartItemRequest,
    requestDeserialize: deserialize_store_DeleteCartItemRequest,
    responseSerialize: serialize_store_Empty,
    responseDeserialize: deserialize_store_Empty,
  },
};

exports.WebStoreClient = grpc.makeGenericClientConstructor(WebStoreService);
