"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var md5 = require("md5");
var request = require("request");
function test() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
function HCFetch(_url, jsonStr) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var token, headers, url, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = localStorage.getItem("token");
                    headers = { "Authorization": token, "Content-Type": "application/json", "Accept": "application/json", "Origin": "chrome-extension://eajclkbhbmkkkpbdedfhmeffeobjkgid" };
                    url = "https://api.hyperchain.cn/v1/" + _url;
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: jsonStr })];
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
function GetToken() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, body, response, data, token;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://api.hyperchain.cn/v1/token/gtoken";
                    headers = { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json" };
                    body = "phone=18868104684&password=tzj13999567168&client_id=c18f2ead-eeb8-4c0b-8378-b6c2ce129f57&client_secret=1108M45t16X2F399706f9p12cv10Pq3H";
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: body })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    token = data.access_token;
                    console.log(token);
                    localStorage.setItem("token", token);
                    return [2 /*return*/, token];
            }
        });
    });
}
exports.GetToken = GetToken;
function resultFunction(callback, error, response, body) {
    if (!error && response.statusCode === 200) {
        callback({ success: true, msg: body });
        console.log('request is success ');
    }
    else {
        console.log('request is error', error);
        callback({ success: false, msg: error });
    }
}
function CompileContract() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var contract, url, body, data, CTS, Abi, Bin;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contract = "contract Resume { struct Rsm{ bytes32 name; string val; string valhash; } mapping(bytes32=>Rsm) public data; function invoke(bytes32 userName, bytes32 _name,string _val,string _valhash){ Rsm resume ; resume.name=_name; resume.val=_val; resume.valhash=_valhash; data[_name]=resume; } function query(bytes32 userName,bytes32 name)returns(string){ if(name==userName){ return data[name].val; }else{ return data[name].valhash; } } } ";
                    url = "dev/contract/compile";
                    body = { "CTCode": contract };
                    return [4 /*yield*/, HCFetch(url, JSON.stringify(body))];
                case 1:
                    data = _a.sent();
                    CTS = data.Cts[0];
                    Abi = CTS.Abi;
                    Bin = CTS.Bin;
                    localStorage.setItem("Abi", Abi);
                    localStorage.setItem("Bin", Bin);
                    return [2 /*return*/];
            }
        });
    });
}
exports.CompileContract = CompileContract;
function DeployContract() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var addr, Bin, body, url, data, contractAddr;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    addr = "be0d7d79dbd922bebc4aab63045ebee529f18395";
                    localStorage.setItem("address", addr);
                    Bin = localStorage.getItem("Bin");
                    body = { "Bin": Bin, "From": addr };
                    url = "dev/contract/deploysync";
                    return [4 /*yield*/, HCFetch(url, JSON.stringify(body))];
                case 1:
                    data = _a.sent();
                    contractAddr = data.ContractAddress;
                    localStorage.setItem("contractAddress", contractAddr);
                    return [2 /*return*/];
            }
        });
    });
}
exports.DeployContract = DeployContract;
function GetPayload(Args, func) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var Abi, body, url, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Abi = localStorage.getItem("Abi");
                    body = { "Abi": Abi, "Args": Args, "Func": func };
                    url = "dev/payload";
                    return [4 /*yield*/, HCFetch(url, JSON.stringify(body))];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.GetPayload = GetPayload;
function InvokeContract(Args, func) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, PayLoad, From, To, body, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "dev/contract/invokesync";
                    return [4 /*yield*/, GetPayload(Args, func)];
                case 1:
                    PayLoad = _a.sent();
                    From = localStorage.getItem("address");
                    To = localStorage.getItem("contractAddress");
                    body = { "Const": false, "PayLoad": PayLoad, "From": From, "To": To };
                    return [4 /*yield*/, HCFetch(url, JSON.stringify(body))];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.InvokeContract = InvokeContract;
function FormData(Args) {
    //生成md5
    var str = Args[2].toString();
    console.log("formdata str=" + str);
    var hash = md5(str);
    console.log("zij=" + hash);
    Args.push(hash);
    console.log(Args);
    return Args;
}
exports.FormData = FormData;
function Account(name, psw) {
    var accounts = [
        { name: "Vayne", password: "vayne" },
        { name: "Mana", password: "mana" },
        { name: "HR", password: "hr" },
        { name: "CA", password: "ca" },
        { name: "Myrcella", password: "myrcella" }
    ];
    for (var _i = 0, accounts_1 = accounts; _i < accounts_1.length; _i++) {
        var ac = accounts_1[_i];
        if (name === ac.name) {
            if (psw === ac.password) {
                if (name === 'Vayne') {
                    var data = {
                        name: "吴朝晖",
                        age: 52,
                        education: "浙江大学博士",
                        paper: 180,
                        patent: 120
                    };
                    localStorage.setItem("myResume", JSON.stringify(data));
                }
                else if (name === "Mana") {
                    localStorage.removeItem("myResume");
                }
                return true;
            }
        }
    }
    return false;
}
exports.Account = Account;
