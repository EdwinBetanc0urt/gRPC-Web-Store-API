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
  constructor({ host, version, language = 'en_US' }) {
    this.host = host;
    this.version = version;
    this.language = language;
  }

  // Init connection
  init() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/helloworld_grpc_pb');
    this.connection = new services.GreeterClient(this.host, grpc.credentials.createInsecure());
  }

  /**
   * Make login
   * @param {string} userName User Name
   * @param {string} userPass User Pass
   * @return {Session} Session assigned
   */
  sayHello({ name }) {
    var messages = require('./src/grpc/proto/helloworld_pb');
    var request = new messages.HelloRequest();
    request.setName('Epale');
    this.connection.sayHello(request, function(err, response) {
      console.log('Greeting:', response);
    });
  }
}
module.exports = WebStore;
