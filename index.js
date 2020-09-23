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
      request.setId(cartId)
    } else {
      request.setClientRequest(this.getClientContext())
      request.setIsGuest(true)
      request.setUuid(cartId)
    }
    this.getStoreService().getCart(request, callback)
  }
}
module.exports = WebStore;
