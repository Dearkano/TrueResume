"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * {
  "success": true,
  "secret": "RaxhMgevgJcm",
  "message": "Jim enrolled Successfully",
  "token": "<put JSON Web Token here>"
}
 * @param name
 * @param org
 */
function login(name, org) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, body, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://47.100.192.19:4000/users";
                    headers = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };
                    body = 'username=' + name + '&orgName=' + org;
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: body })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.token];
            }
        });
    });
}
exports.login = login;
function createChannel(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, body, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://47.100.192.19:4000/channels';
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    body = {
                        "channelName": "mychannel",
                        "channelConfigPath": "../artifacts/channel/mychannel.tx"
                    };
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: JSON.stringify(body) })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createChannel = createChannel;
function joinChannel(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, body, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://47.100.192.19:4000/channels/mychannel/peers';
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    body = {
                        "peers": ["peer0.org1.example.com", "peer1.org1.example.com"]
                    };
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: JSON.stringify(body) })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.joinChannel = joinChannel;
function installChaincode(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, body, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://47.100.192.19:4000/chaincodes';
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    body = {
                        "peers": ["peer0.org1.example.com", "peer1.org1.example.com"],
                        "chaincodeName": "mycc",
                        "chaincodePath": "github.com/example_cc/go",
                        "chaincodeType": "golang",
                        "chaincodeVersion": "v0"
                    };
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: JSON.stringify(body) })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.installChaincode = installChaincode;
function instantiateChaincode(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, body, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://47.100.192.19:4000/channel/mychannel/chaincodes';
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    body = {
                        "peers": ["peer0.org1.example.com", "peer1.org1.example.com"],
                        "chaincodeName": "mycc",
                        "chaincodeVersion": "v0",
                        "chaincodeType": "golang",
                        "args": ["a", "100", "b", "200"]
                    };
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: JSON.stringify(body) })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.instantiateChaincode = instantiateChaincode;
function invoke(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, body, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://47.100.192.19:4000/channels/mychannel/chaincodes/mycc';
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    body = {
                        "peers": ["peer0.org1.example.com", "peer1.org1.example.com"],
                        "fcn": "move",
                        "args": ["a", "b", "10"]
                    };
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: JSON.stringify(body) })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.invoke = invoke;
function query(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://47.100.192.19:4000/channels/mychannel/chaincodes/mycc?peer=peer0.org1.example.com&fcn=query&args=%5B%22a%22%5D';
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.query = query;
function queryBlock(token, id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://localhost:4000/channels/mychannel/blocks/' + id + '?peer=peer0.org1.example.com';
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.queryBlock = queryBlock;
function queryTraction(token, id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://localhost:4000/channels/mychannel/transactions/' + id + '?peer=peer0.org1.example.com';
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.queryTraction = queryTraction;
function queryChainInfo(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://localhost:4000/channels/mychannel?peer=peer0.org1.example.com';
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.queryChainInfo = queryChainInfo;
function queryInstalledChaincode(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:4000/chaincodes?peer=peer0.org1.example.com&type=installed";
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.queryInstalledChaincode = queryInstalledChaincode;
function queryInstantiatedChaincode(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:4000/chaincodes?peer=peer0.org1.example.com&type=instantiated";
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.queryInstantiatedChaincode = queryInstantiatedChaincode;
function queryChannels(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:4000/channels?peer=peer0.org1.example.com";
                    headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.queryChannels = queryChannels;
