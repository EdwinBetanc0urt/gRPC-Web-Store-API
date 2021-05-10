# ADempiere Web Store backend API for gRPC
[![npm version](https://img.shields.io/npm/v/@adempiere/grpc-web-store.svg)](https://www.npmjs.com/package/@adempiere/grpc-web-store)
[![License](https://img.shields.io/npm/l/@adempiere/grpc-web-store.svg)](https://github.com/erpcya/adempiere-web-store/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@adempiere/grpc-web-store.svg)](https://www.npmjs.com/package/@adempiere/grpc-web-store)
[![Dependencies](https://img.shields.io/librariesio/github/erpcya/grpc-web-store.svg)](https://www.npmjs.com/package/@adempiere/grpc-web-store-api)

ADempiere Web Store Client write in Javascript for gRPC service, use it for connect with
[ADempiere-gRPC-Server](https://github.com/erpcya/adempiere-gRPC-Server).

## Requirements
- [Envoy Proxy](https://www.envoyproxy.io/)
- [Envoy Pre-configured Proxy](https://github.com/erpcya/gRPC-Envoy-Proxy)

## Using it

``` bash
# installing via NPM
npm install @adempiere/grpc-web-store-api --save
```
``` bash
# installing via Yarn
yarn add @adempiere/grpc-web-store-api
```

## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)
- [gRPC-Node](https://github.com/grpc/grpc-node)


## Install prerequisites for proto stub generation

### Install Proto C

```shell
# Get the latest version number of protoc
LATEST_VERSION=$(curl --silent "https://api.github.com/repos/protocolbuffers/protobuf/releases/latest" |
    grep -Po '"tag_name": "\K.*?(?=")' |
    sed -E 's|v||g')

ARCHITECTURE=$(arch)

ZIP_FILE=protoc-$1-linux-$ARCHITECTURE.zip

# Download latest version
URL="https://github.com/protocolbuffers/protobuf/releases/download/v$LATEST_VERSION/$ZIP_FILE"
curl -OL $URL

# Extract and overwrite into dir
sudo unzip -o $ZIP_FILE -d /usr/local bin/protoc
sudo unzip -o $ZIP_FILE -d /usr/local 'include/*'

# Delete donwloaded file
rm -f -v $ZIP_FILE

# Assign read and execute permissions
sudo chmod 755 /usr/local/bin/protoc
sudo chmod 755 -R /usr/local/include/google/
```

When installation is complete, check the version with
```Shell
protoc --version
```

### Install Proto C Gen gRPC Web
This is only used to generate the stub if gRPC is handled on the client side.

```shell
# Get the latest version number of protoc-gen-grpc-web
LATEST_VERSION=$(curl --silent "https://api.github.com/repos/grpc/grpc-web/releases/latest" |
    grep -Po '"tag_name": "\K.*?(?=")' |
    sed -E 's|v||g')

FILE=protoc-gen-grpc-web

# Download
URL=https://github.com/grpc/grpc-web/releases/download/$LATEST_VERSION/$FILE-$1-linux-x86_64
curl -L $URL -o $FILE

# Extract and overwrite into dir
sudo mv -f -v $FILE /usr/local/bin/

# Assign read and execute permissions
sudo chmod 755 /usr/local/bin/$FILE
```

### Install gRPC Tools (Node Proto C)
It can be installed as a global dependency although it is already managed as a project dependency.

Via npm:
```shell
sudo npm install -g grpc-tools
```

Via yarn:
```shell
yarn global add grpc-tools
```

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

Generate all stub:
```shell
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:src/grpc \
    --grpc_out=src/grpc \
    proto/access.proto proto/client.proto proto/web_store.proto
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```


* To access:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/access.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To client:
```shell
# Generate stub to client.proto file
grpc_tools_node_protoc \
    proto/access.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To web store:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/web_store.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```


### Output proto stub
The result is generated on: `src/grpc/proto/` folder
- `access_grpc_pb.js`
- `access_pb.js`
- `client_grpc_pb.js`
- `client_pb.js`
- `web_store_grpc_pb.js`
- `web_store_pb.js`


## Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. [Become a sponsor](https://www.paypal.com/paypalme/YamelSenih)

<a href="http://erpya.com/"><img width="250px" src="https://erpya.com/wp-content/uploads/2017/11/ERP-logotipo-H-color.png" /></a>
