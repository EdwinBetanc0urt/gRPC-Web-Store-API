# ADempiere Web Store backend API for gRPC
[![npm version](https://img.shields.io/npm/v/@adempiere/grpc-web-store.svg)](https://www.npmjs.com/package/@adempiere/grpc-web-store)
[![License](https://img.shields.io/npm/l/@adempiere/grpc-web-store.svg)](https://github.com/erpcya/adempiere-web-store/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@adempiere/grpc-web-store.svg)](https://www.npmjs.com/package/@adempiere/grpc-web-store)
[![Dependencies](https://img.shields.io/librariesio/github/erpcya/grpc-web-store.svg)](https://www.npmjs.com/package/@adempiere/grpc-web-store)

ADempiere Web Store Client write in Javascript for gRPC service, use it for connect with
[ADempiere-gRPC-Server](https://github.com/erpcya/adempiere-gRPC-Server).

## Requirements
- [Envoy Proxy](https://www.envoyproxy.io/)
- [Envoy Pre-configured Proxy](https://github.com/erpcya/gRPC-Envoy-Proxy)

## Using it

``` bash
# installing via NPM
npm install @adempiere/grpc-web-store --save
```
``` bash
# installing via Yarn
yarn add @adempiere/grpc-web-store
```

## A Example
### Declare Data
```javascript
const Access = require('@adempiere/grpc-web-store');
// URL, Version
let access = new Access(GRPC_HOST, 'Version Epale');
```
### Declare Data with specific language
```javascript
const Access = require('@adempiere/grpc-web-store');
let access = new Access(GRPC_HOST, 'Version Epale');
```

### Request Roles for a user
```javascript
//  Request User Roles
//  UserName, UserPass
access.requestUserRoles('SuperUser', 'System')
.then(userRoles => {
  console.log('Object with Role List' + userRoles);
})
.catch(err => console.log("Error: " + err.message));
```

Output
```
Hola
```

### Request Login
```javascript
//  Request Login for User
//  UserName, UserPass, Language
access.requestUserLogin('SuperUser', 'System', 'es_VE')
.then(session => {
  console.log('Object with Session values' + session);
})
.catch(err => console.log("Error: " + err.message));
```

Output
```
None
```

### Request Logout
```javascript
//  Request Logout for User
//  SessionUuid
access.requestUserLogout('8cc49692-fb40-11e8-a479-7a0060f0aa01')
.then(session => {
  console.log('Object with Logout Session' + session);
})
.catch(err => console.log("Error: " + err.message));
```

Output
```
None
```

## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)

Note: You can also install `protoc` and `protoc-gen-grpc-web` by going to the repository directory and run the command:
```Shell
sh install-protoc.sh
```

When installation is complete, check the version with
```Shell
protoc --version
```

After installed it just go to source code folder an run it:

Run Access gRPC
```sh
cd ../../protos
yarn global add grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:src/grpc --grpc_out=src/grpc --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` proto/helloworld.proto

protoc proto/access.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
```

Or run:
```Shell
sh generate-stub.sh
```

The result is generated on: src/grpc folder
- `access_grpc_web_pb.js`
- `access_pb.js`
