"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var md5 = require("md5");
function formData(Args) {
    //生成md5
    var resume = Args[2].toString();
    var address = Args[0];
    var resumeHash = md5(resume);
    console.log("on chain = " + resume);
    console.log("on chain hash = " + resumeHash);
    var nameHash = md5(Args[1]);
    var args = [address, nameHash, resume, resumeHash];
    return args;
}
exports.formData = formData;
function getContractAddress() {
    return "n1rkPbRrsvesLJFS8HqUBmXE3ZrxSCLqGih";
}
function getNonce(address) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, body, response, data, nonce;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://mainnet.nebulas.io/v1/user/accountstate";
                    headers = { "Content-Type": "application/json" };
                    body = JSON.stringify({ "address": address });
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: body })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    nonce = data.result.nonce;
                    return [2 /*return*/, nonce];
            }
        });
    });
}
exports.getNonce = getNonce;
function addResume(args) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, nonce, c, data, body, response, rs, abi, _url, body1, _response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://111.231.75.113:8685/v1/admin/sign ";
                    headers = { "Content-Type": "application/json" };
                    return [4 /*yield*/, getNonce(args[0])];
                case 1:
                    nonce = _a.sent();
                    c = 1;
                    console.log(nonce);
                    nonce = parseInt(nonce) + c;
                    console.log(nonce);
                    data = [{ nameHash: args[1], resume: args[2], resumeHash: args[3] }];
                    body = JSON.stringify({
                        transaction: {
                            from: args[0],
                            to: getContractAddress(),
                            value: "0",
                            nonce: nonce,
                            gasPrice: "1000000",
                            gasLimit: "2000000",
                            contract: { "function": "save", "args": JSON.stringify(data) }
                        },
                        passphrase: localStorage.getItem("AccountSecret")
                    });
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: body })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    rs = _a.sent();
                    console.log(rs.result);
                    abi = rs.result.data;
                    _url = "https://mainnet.nebulas.io/v1/user/rawtransaction";
                    body1 = JSON.stringify({ data: abi });
                    return [4 /*yield*/, fetch(_url, { method: "POST", headers: headers, body: body1 })];
                case 4:
                    _response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addResume = addResume;
function queryResume(nameHash) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, nh, account, body, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://mainnet.nebulas.io/v1/user/call";
                    headers = { "Content-Type": "application/json" };
                    nh = JSON.stringify([nameHash]);
                    account = localStorage.getItem("HCAccount");
                    body = JSON.stringify({
                        "from": account,
                        "to": getContractAddress(),
                        "value": "0",
                        "nonce": 0,
                        "gasPrice": "1000000",
                        "gasLimit": "2000000",
                        "contract": {
                            "function": "query", "args": nh
                        }
                    });
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: body })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.queryResume = queryResume;
function login(account, password) {
    var users = [
        { account: "n1QopLp3CrV9xZJtC7eF64kxDVhP3NTHruw", password: "zjutzj3160", secret: "zjutzj3160" },
        { account: "n1Y7qZ842hb3XhoqfzpMwyKWYNXYtixddPm", password: "123456789", secret: "123456789" },
        { account: "user", password: "123456", secret: "" }
    ];
    for (var i in users) {
        if (users[i].account == account && users[i].password == password) {
            localStorage.setItem("HCAccount", users[i].account);
            localStorage.setItem("AccountSecret", users[i].secret);
            return true;
        }
    }
    return false;
}
exports.login = login;
