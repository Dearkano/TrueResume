"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var md5 = require("md5");
var NebPay = require("nebpay");
var $ = require("jquery");
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
var intervalQuery;
function addResume(args) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var nebPay, serialNumber, intervalQuery, to, value, callFunction, data, callArgs;
        return tslib_1.__generator(this, function (_a) {
            nebPay = new NebPay();
            to = "n1rkPbRrsvesLJFS8HqUBmXE3ZrxSCLqGih";
            value = "0";
            callFunction = "save" //调用的函数名称
            ;
            data = [{ nameHash: args[1], resume: args[2], resumeHash: args[3] }];
            callArgs = JSON.stringify(data);
            //发送交易(发起智能合约调用)
            serialNumber = nebPay.call(to, value, callFunction, callArgs);
            //设置定时查询交易结果
            intervalQuery = setInterval(function () {
                funcIntervalQuery(serialNumber, null);
            }, 10000); //建议查询频率10-15s,因为星云链出块时间为15s,并且查询服务器限制每分钟最多查询10次。
            return [2 /*return*/];
        });
    });
}
exports.addResume = addResume;
function funcIntervalQuery(serialNumber, options) {
    var nebPay = new NebPay();
    //queryPayInfo的options参数用来指定查询交易的服务器地址,(如果是主网可以忽略,因为默认服务器是在主网查询)
    nebPay.queryPayInfo(serialNumber, options) //search transaction result from server (result upload to server by app)
        .then(function (resp) {
        console.log("tx result: " + resp); //resp is a JSON string
        var respObject = JSON.parse(resp);
        //code==0交易发送成功, status==1交易已被打包上链
        if (respObject.code === 0 && respObject.data.status === 1) {
            //交易成功,处理后续任务....
            $("#txtip").text("交易已完成，您现在可以去验证简历");
            document.location.href = "/usercenter";
            clearInterval(intervalQuery); //清除定时查询
        }
    })
        .catch(function (err) {
        console.log(err);
    });
}
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
                        "from": "n1bz1jRkWC37Ka2xZY3zQhhLn3C5PfYpG9p",
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
        { account: "user", password: "iamuser" },
        { account: "manager", password: "iammanager" },
    ];
    for (var i in users) {
        if (users[i].account == account && users[i].password == password) {
            localStorage.setItem("HCAccount", users[i].account);
            return true;
        }
    }
    return false;
}
exports.login = login;
