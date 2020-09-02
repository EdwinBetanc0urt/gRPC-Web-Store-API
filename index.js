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
  constructor({
    host,
    version,
    language = 'en_US'
  }) {
    this.host = host
    this.version = version
    this.language = language
  }

  // Init connection
  // init() {
  //   var grpc = require('grpc');
  //   var services = require('./src/grpc/proto/web_store_grpc_pb');
  //   this.connection = new services.GreeterClient(this.host, grpc.credentials.createInsecure());
  // }

  /**
   * Load gRPC Connection
   * @return {Object} Return request for get data
   */
  getAccessService() {
    const grpc_promise = require('grpc-promise')
    const { SecurityPromiseClient } = require('./src/grpc/proto/access_grpc_web_pb.js')
    const requestService = new SecurityPromiseClient(this.host)
    grpc_promise.promisifyAll(requestService)
    return requestService
  }

  //  Get Admin token from ADempiere
  getAdminToken({
    user,
    password
  }) {
    console.log(this.login({user, password}))
  }

  login({
    user,
    password,
    roleUuid,
    organizationUuid
  }) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new LoginRequest()
    request.setUsername(user)
    request.setUserpass(password)
    request.setRoleuuid(roleUuid)
    request.setOrganizationuuid(organizationUuid)
    request.setLanguage(this.language)
    request.setClientversion(this.version)
    return this.getAccessService().runLoginDefault(request)
      .then(response => {
        return response
      })
  }
}
module.exports = WebStore;
