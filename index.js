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
    request.setClientrequest(this.getClientContext())
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
    request.setClientrequest(this.createClientRequest(token))
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
    request.setClientrequest(this.createClientRequest(token))
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
    request.setClientrequest(this.createClientRequest(token))
    this.getStoreService().getCustomer(request, callback)
  }

  //  Get Stock from SKU
  getStock({
    sku
  }, callback) {
    const { GetStockRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new GetStockRequest()
    request.setClientrequest(this.getClientContext())
    request.setSku(sku)
    this.getStoreService().getStock(request, callback)
  }

  //  Get Stock from SKU
  listStock({
    sku
  }, callback) {
    const { ListStockRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ListStockRequest()
    request.setClientrequest(this.getClientContext())
    request.setSku(sku)
    this.getStoreService().listStock(request, callback)
  }

  //  List product attributes based on sku list
  listProducts({
    skus
  }, callback) {
    const { ListProductsRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ListProductsRequest()
    request.setClientrequest(this.getClientContext())
    skus.forEach(sku => request.addSkus(sku))
    this.getStoreService().listProducts(request, callback)
  }

  //  List render products attributes based on sku list
  listRenderProducts({
    skus
  }, callback) {
    const { ListRenderProductsRequest } = require('./src/grpc/proto/web_store_pb.js')
    const request = new ListRenderProductsRequest()
    request.setClientrequest(this.getClientContext())
    skus.forEach(sku => request.addSkus(sku))
    this.getStoreService().listRenderProducts(request, callback)
  }
}
module.exports = WebStore;
