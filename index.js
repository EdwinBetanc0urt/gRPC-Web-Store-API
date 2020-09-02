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
    accessHost,
    storeHost,
    version,
    language = 'en_US'
  }) {
    this.accessHost = accessHost
    this.storeHost = storeHost
    this.version = version
    this.language = language
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

  //  Get Admin token from ADempiere
  getAdminToken({
    user,
    password
  }) {
    var accessGranted = this.login({
      user,
      password
    })
    return accessGranted.getUuid()
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
    return this.getAccessService().runLoginDefault(request, function(err, response) {
      return response
    });
  }
}
module.exports = WebStore;
