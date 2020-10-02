/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client                       		               *
 * Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com				  		                         *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

class WebStore {

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor(config) {
    if(config) {
      const adempiereConfig = config.adempiere.api
      this.accessHost = adempiereConfig.accessHost
      this.storeHost = adempiereConfig.storeHost
      this.version = adempiereConfig.version
      this.language = adempiereConfig.language
      this.user = adempiereConfig.user
      this.password = adempiereConfig.password
    }
    this.initAccessService()
    this.initStoreService()
  }

  //  Init service
  initService() {
    if(this.clientContext) {
      return
    }
    const current = this
    const language = this.language
    this.login({
      user: this.user,
      password: this.password
    }, function(err, response) {
      if(response) {
        const { ClientRequest } = require('./src/grpc/proto/client_pb.js')
        const client = new ClientRequest()
        client.setSessionUuid(response.getUuid())
        client.setLanguage(language)
        current.setClientContext(client)
        console.log('ADempiere Client Started')
      } else if(err) {
        console.log(err)
      }
    })
  }

  //  Create Client request from token
  createClientRequest(token) {
    const { ClientRequest } = require('./src/grpc/proto/client_pb.js')
    const client = new ClientRequest()
    client.setSessionUuid(token)
    client.setLanguage(this.language)
    return client
  }

  // Init connection
  initAccessService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/access_grpc_pb');
    this.access = new services.SecurityClient(this.accessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initStoreService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/web_store_grpc_pb');
    this.store = new services.WebStoreClient(this.storeHost, grpc.credentials.createInsecure());
  }

  //  Get Access Service
  getAccessService() {
    return this.access
  }

  //  Get Store Service
  getStoreService() {
    return this.store
  }

  //  Get Client Context
  getClientContext() {
    return this.clientContext
  }

  //  Set client context
  setClientContext(context) {
    this.clientContext = context
  }

  //  Login with a user
  login({
    user,
    password,
    roleUuid,
    organizationUuid
  }, callback) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new LoginRequest()
    request.setUsername(user)
    request.setUserpass(password)
    request.setRoleuuid(roleUuid)
    request.setOrganizationuuid(organizationUuid)
    request.setLanguage(this.language)
    request.setClientversion(this.version)
    this.getAccessService().runLoginDefault(request, callback)
  }

  //  Create a new user / customer
  createCustomer({
    email,
    firstName,
    lastName,
    password
  }, callback) {
    const { CreateCustomerRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new CreateCustomerRequest()
    request.setClientRequest(this.getClientContext())
    request.setEmail(email)
    request.setFirstName(firstName)
    request.setLastName(lastName)
    request.setPassword(password)
    this.getStoreService().createCustomer(request, callback)
  }

  //  Change password from current session
  changePassword({
    token,
    currentPassword,
    newPassword
  }, callback) {
    const { ChangePasswordRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ChangePasswordRequest()
    request.setClientRequest(this.createClientRequest(token))
    request.setCurrentPassword(currentPassword)
    request.setNewPassword(newPassword)
    this.getStoreService().changePassword(request, callback)
  }

  // Sed a request for reset password
  resetPassword({
    user,
    email
  }, callback) {
    const { ResetPasswordRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ResetPasswordRequest()
    request.setClientRequest(this.createClientRequest(token))
    request.setsetUserName(user)
    request.setEmail(email)
    this.getStoreService().resetPassword(request, callback)
  }

  //  Get customer
  getCustomer({
    token
  }, callback) {
    const { GetCustomerRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new GetCustomerRequest()
    request.setClientRequest(this.createClientRequest(token))
    this.getStoreService().getCustomer(request, callback)
  }

  //  Get Stock from SKU
  getStock({
    sku
  }, callback) {
    const { GetStockRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new GetStockRequest()
    request.setClientRequest(this.getClientContext())
    request.setSku(sku)
    this.getStoreService().getStock(request, callback)
  }

  //  Get Stock from SKU
  listStock({
    sku
  }, callback) {
    const { ListStocksRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ListStocksRequest()
    request.setClientRequest(this.getClientContext())
    request.setSku(sku)
    this.getStoreService().listStocks(request, callback)
  }

  //  List product attributes based on sku list
  listProducts({
    skus
  }, callback) {
    const { ListProductsRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ListProductsRequest()
    request.setClientRequest(this.getClientContext())
    skus.forEach(sku => request.addSkus(sku))
    this.getStoreService().listProducts(request, callback)
  }

  //  List render products attributes based on sku list
  listRenderProducts({
    skus
  }, callback) {
    const { ListRenderProductsRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ListRenderProductsRequest()
    request.setClientRequest(this.getClientContext())
    skus.forEach(sku => request.addSkus(sku))
    this.getStoreService().listRenderProducts(request, callback)
  }

  //  Get Resource Image from name
  getResource({
    resourceName,
    resourceUuid
  }, callback) {
    const { GetResourceRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new GetResourceRequest()
    request.setClientRequest(this.getClientContext())
    request.setResourceName(resourceName)
    request.setResourceUuid(resourceUuid)
    const stream = this.getStoreService().getResource(request)//, callback)
    let result = new Uint8Array()
    stream.on('data', (response) => {
      result = this.mergeByteArray(result, response.getData())
    })
    stream.on('status', (status) => {
      if (status && status.code === 13) {
        callback(status, undefined)
      }
    })
    stream.on('end', (end) => {
      callback(undefined, result)
    })
  }

  // Merge two arrays and return merged array
  mergeByteArray(currentArray, arrayToMerge) {
    const mergedArray = new currentArray.constructor(currentArray.length + arrayToMerge.length)
    mergedArray.set(currentArray)
    mergedArray.set(arrayToMerge, currentArray.length)
    return mergedArray
  }

  // Build a base 64 image from array
  buildImageFromArray(resource, byteArray) {
    return 'data:' + resource.contentType + ';base64,' + btoa(
      byteArray.reduce(
        (data, byte) => data + String.fromCharCode(byte), ''
      )
    )
  }

  //  Create Cart
  createCart({
    token
  }, callback) {
    const { CreateCartRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new CreateCartRequest()
    if (token) {
      request.setClientRequest(this.createClientRequest(token))
      request.setIsGuest(false)
    } else {
      request.setClientRequest(this.getClientContext())
      request.setIsGuest(true)
    }
    this.getStoreService().createCart(request, callback)
  }

  //  Get Cart
  getCart({
    token,
    cartId
  }, callback) {
    const { GetCartRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new GetCartRequest()
    if (token) {
      request.setClientRequest(this.createClientRequest(token))
      request.setIsGuest(false)
      request.setCartId(cartId)
    } else {
      request.setClientRequest(this.getClientContext())
      request.setIsGuest(true)
      request.setCartUuid(cartId)
    }
    this.getStoreService().getCart(request, callback)
  }

  //  Get Cart
  updateCart({
    token,
    cartId,
    sku,
    quantity
  }, callback) {
    const { UpdateCartRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new UpdateCartRequest()
    if (token) {
      request.setClientRequest(this.createClientRequest(token))
      request.setIsGuest(false)
      request.setCartId(cartId)
    } else {
      request.setClientRequest(this.getClientContext())
      request.setIsGuest(true)
      request.setCartUuid(cartId)
    }
    request.setSku(sku)
    request.setQuantity(quantity)
    this.getStoreService().updateCart(request, callback)
  }

  //  Get Payment Methods
  getPaymentMethods({
    token,
    cartId
  }, callback) {
    const { ListPaymentMethodsRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ListPaymentMethodsRequest()
    if (token) {
      request.setClientRequest(this.createClientRequest(token))
      request.setCartId(cartId)
    } else {
      request.setClientRequest(this.getClientContext())
      request.setCartUuid(cartId)
    }
    this.getStoreService().listPaymentMethods(request, callback)
  }

  //  Get Shipping Methods
  getShippingMethods({
    token,
    cartId,
    countryCode,
    regionId,
    regionName,
    cityName,
    postalCode,
    address1,
    address2,
    address3,
    address4
  }, callback) {
    const { ListShippingMethodsRequest, AddressRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ListShippingMethodsRequest()
    if (token) {
      request.setClientRequest(this.createClientRequest(token))
      request.setCartId(cartId)
    } else {
      request.setClientRequest(this.getClientContext())
      request.setCartUuid(cartId)
    }
    //  Commons
    const shippingAddress = new AddressRequest()
    shippingAddress.setCountryCode(countryCode)
    shippingAddress.setRegionId(regionId)
    shippingAddress.setRegionName(regionName)
    shippingAddress.setCityName(cityName)
    shippingAddress.setPostalCode(postalCode)
    shippingAddress.setAddress1(address1)
    shippingAddress.setAddress2(address2)
    shippingAddress.setAddress3(address3)
    shippingAddress.setAddress4(address4)
    request.setShippingAddress(shippingAddress)
    this.getStoreService().listShippingMethods(request, callback)
  }

  //  Get Shipping Information
  getShippingInformation({
    token,
    cartId,
    shippingAddress,
    billingAddress,
    carrierCode,
    methodCode
  }, callback) {
    const { GetShippingInformationRequest, AddressRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new GetShippingInformationRequest()
    if (token) {
      request.setClientRequest(this.createClientRequest(token))
      request.setCartId(cartId)
    } else {
      request.setClientRequest(this.getClientContext())
      request.setCartUuid(cartId)
    }
    //  Commons
    const shippingAddressToSet = new AddressRequest()
    shippingAddressToSet.setCountryCode(shippingAddress.countryCode)
    shippingAddressToSet.setCityName(shippingAddress.cityName)
    shippingAddressToSet.setPostalCode(shippingAddress.postalCode)
    shippingAddressToSet.setAddress1(shippingAddress.address1)
    shippingAddressToSet.setAddress2(shippingAddress.address2)
    shippingAddressToSet.setAddress3(shippingAddress.address3)
    shippingAddressToSet.setAddress4(shippingAddress.address4)
    //  Set Shipping Address
    request.setShippingAddress(shippingAddressToSet)
    //  Set Billing Address
    const billingAddressToSet = new AddressRequest()
    billingAddressToSet.setCountryCode(billingAddress.countryCode)
    billingAddressToSet.setCityName(billingAddress.cityName)
    billingAddressToSet.setPostalCode(billingAddress.postalCode)
    billingAddressToSet.setAddress1(billingAddress.address1)
    billingAddressToSet.setAddress2(billingAddress.address2)
    billingAddressToSet.setAddress3(billingAddress.address3)
    billingAddressToSet.setAddress4(billingAddress.address4)
    //  Set Shipping Address
    request.setBillingAddress(billingAddressToSet)
    //  Set Methods
    request.setCarrierCode(carrierCode)
    request.setMethodCode(methodCode)
    this.getStoreService().getShippingInformation(request, callback)
  }

  //  Get Cart Totals
  getCartTotals({
    token,
    cartId
  }, callback) {
    const { GetCartTotalsRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new GetCartTotalsRequest()
    if (token) {
      request.setClientRequest(this.createClientRequest(token))
      request.setCartId(cartId)
    } else {
      request.setClientRequest(this.getClientContext())
      request.setCartUuid(cartId)
    }
    //
    this.getStoreService().getCartTotals(request, callback)
  }

  //  Get Cart
  deleteCartItem({
    token,
    cartId,
    sku,
    productId
  }, callback) {
    const { DeleteCartItemRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new DeleteCartItemRequest()
    if (token) {
      request.setClientRequest(this.createClientRequest(token))
      request.setCartId(cartId)
    } else {
      request.setClientRequest(this.getClientContext())
      request.setCartUuid(cartId)
    }
    request.setSku(sku)
    request.setProductId(productId)
    this.getStoreService().deleteCartItem(request, callback)
  }

  //  Update a new user / customer
  updateCustomer({
    customerId,
    email,
    firstName,
    lastName,
    addresses
  }, callback) {
    const { UpdateCustomerRequest, AddressRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new UpdateCustomerRequest()
    request.setClientRequest(this.getClientContext())
    request.setId(customerId)
    request.setEmail(email)
    request.setFirstName(firstName)
    request.setLastName(lastName)
    addresses.forEach(address => {
      const addressToSet = new AddressRequest()
      addressToSet.setId(address.id)
      addressToSet.setFirstName(address.firstname)
      addressToSet.setLastName(address.lastname)
      addressToSet.setCountryCode(address.countryCode)
      addressToSet.setCityName(address.cityName)
      addressToSet.setPostalCode(address.postalCode)
      addressToSet.setPhone(address.phone)
      addressToSet.setAddress1(address.address1)
      addressToSet.setAddress2(address.address2)
      addressToSet.setAddress3(address.address3)
      addressToSet.setAddress4(address.address4)
      request.addAddresses(addressToSet)
    })
    this.getStoreService().updateCustomer(request, callback)
  }
}
module.exports = WebStore;
