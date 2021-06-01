ADempiere gRPC Web Store API library to Node.js
==============

<div align="center">
  <img src="https://camo.githubusercontent.com/911c5d54ded447403e56de3f96f332c06bceb8bd/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f622f62312f4164656d70696572652d6c6f676f2e706e67" style="text-align:center;" width="400" />
</div>

![node version](https://img.shields.io/badge/node-v10.x-blue.svg)
[![npm version](https://img.shields.io/npm/v/@adempiere/grpc-web-store.svg)](https://www.npmjs.com/package/@adempiere/grpc-web-store)
[![License](https://img.shields.io/npm/l/@adempiere/grpc-web-store.svg)](https://github.com/erpcya/adempiere-web-store/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@adempiere/grpc-web-store.svg)](https://www.npmjs.com/package/@adempiere/grpc-web-store)
[![Dependencies](https://img.shields.io/librariesio/github/erpcya/grpc-web-store.svg)](https://www.npmjs.com/package/@adempiere/grpc-web-store-api)

ADempiere node.js write in JavaScript for gRPC service, use it for connect with:
- [ADempiere-gRPC-Server](https://github.com/adempiere/adempiere-gRPC-Server), docker image [erpya/adempiere-grpc-all-in-one](https://hub.docker.com/r/erpya/adempiere-grpc-all-in-one).

See also:
- [eCommerce-ADempiere](https://github.com/adempiere/eCommerce), docker image [erpya/adempiere-ecommerce](https://hub.docker.com/r/erpya/adempiere-ecommerce).
- [Proxy-Adempiere-API](https://github.com/adempiere/proxy-adempiere-api), docker image [erpya/proxy-adempiere-api](https://hub.docker.com/r/erpya/proxy-adempiere-api).


## Using it

```shell
# installing via NPM
npm install @adempiere/grpc-web-store-api --save
```

```shell
# installing via Yarn
yarn add @adempiere/grpc-web-store-api
```

### A Example
Here a example for it using from Proxy of ADempiere API: https://github.com/adempiere/proxy-adempiere-api/blob/master/src/modules/adempiere-api/index.ts#L17


## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)


## Generate Proto Stub:

### Generate with npm (Recommended):
```shell
# install dependecies and dev dependencies
npm i

# generate all stub
npm run stub
```

Note to generate specific proto definition:
* To access: `npm run stub:access`
* To client: `npm run stub:client`
* To web store: `npm run stub:web_store`


### Generate directly with grpc_tools_node_protoc:
It can be installed as a global dependency although it is already managed as a project dependency.

Via npm:
```shell
sudo npm install -g grpc-tools
```

Via yarn:
```shell
yarn global add grpc-tools
```

Generate all stub:
```shell
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:src/grpc/ \
  --grpc_out=src/grpc/ \
  proto/access.proto proto/client.proto proto/web_store.proto
  # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc/
```


* To access:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:src/grpc/  \
  --grpc_out=grpc_js:src/grpc/ \
  proto/access.proto
  # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc/
```

* To client:
```shell
# Generate stub to client.proto file
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:src/grpc/  \
  --grpc_out=grpc_js:src/grpc/ \
  proto/client.proto
  # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc/
```

* To web store:
```shell
# Generate stub to web_store.proto file
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:src/grpc/  \
  --grpc_out=grpc_js:src/grpc/ \
  proto/web_store.proto
  # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc/
```


### Output proto stub
The result is generated on: `src/grpc/proto/` folder:
- `access_grpc_pb.js`
- `access_pb.js`
- `client_grpc_pb.js`
- `client_pb.js`
- `web_store_grpc_pb.js`
- `web_store_pb.js`


## Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. [Become a sponsor](https://www.paypal.com/paypalme/YamelSenih)

<a href="http://erpya.com/">
  <img width="250px" src="https://erpya.com/wp-content/uploads/2017/11/ERP-logotipo-H-color.png" />
</a>
