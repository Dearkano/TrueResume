"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Hyperchain = require("../Hyperchain");
var react_bootstrap_1 = require("react-bootstrap");
var HyperChainAPITest = /** @class */ (function (_super) {
    tslib_1.__extends(HyperChainAPITest, _super);
    function HyperChainAPITest(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            token: "", result: "", tip: "初始化状态", dat: { name: "", age: "" }
        };
        return _this;
    }
    HyperChainAPITest.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Hyperchain.GetToken()];
                    case 1:
                        token = _a.sent();
                        this.setState({ token: token, tip: "登陆成功" });
                        return [2 /*return*/];
                }
            });
        });
    };
    HyperChainAPITest.prototype.compileContract = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Hyperchain.CompileContract()];
                    case 1:
                        _a.sent();
                        this.setState({ tip: "编译合约成功" });
                        return [2 /*return*/];
                }
            });
        });
    };
    HyperChainAPITest.prototype.deployContract = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Hyperchain.DeployContract()];
                    case 1:
                        _a.sent();
                        this.setState({ tip: "部署合约成功" });
                        return [2 /*return*/];
                }
            });
        });
    };
    HyperChainAPITest.prototype.invokeContract = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var rs, Args;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rs = {
                            name: "吴朝晖",
                            age: 52,
                            education: "浙江大学博士",
                            paper: 180,
                            patent: 120
                        };
                        Args = Hyperchain.FormData(["Vayne", "吴朝晖", JSON.stringify(rs)]);
                        console.log(JSON.stringify(rs));
                        return [4 /*yield*/, Hyperchain.InvokeContract(Args, "invoke")];
                    case 1:
                        _a.sent();
                        this.setState({ tip: "调用合约成功" });
                        return [2 /*return*/];
                }
            });
        });
    };
    HyperChainAPITest.prototype.queryContract = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var Args, data, ret, r, buf, s;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Args = ["Vayne", this.state.dat.name];
                        console.log(Args);
                        return [4 /*yield*/, Hyperchain.InvokeContract(Args, "query")];
                    case 1:
                        data = _a.sent();
                        ret = data.Ret;
                        r = ret.substring(2);
                        buf = new Buffer(r, 'hex');
                        s = buf.toString();
                        this.setState({ result: s, tip: "查询成功 参数为" + Args.toString() });
                        return [2 /*return*/];
                }
            });
        });
    };
    HyperChainAPITest.prototype.queryMyself = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var Args, data, ret, r, buf, s;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Args = ["Mana", "Mana"];
                        return [4 /*yield*/, Hyperchain.InvokeContract(Args, "query")];
                    case 1:
                        data = _a.sent();
                        ret = data.Ret;
                        r = ret.substring(2);
                        buf = new Buffer(r, 'hex');
                        s = buf.toString();
                        this.setState({ result: s, tip: "查询成功 参数为" + Args.toString() });
                        return [2 /*return*/];
                }
            });
        });
    };
    HyperChainAPITest.prototype.handleNameChange = function (e) {
        var t = { name: e.target.value, age: this.state.dat.age };
        this.setState({ dat: t });
    };
    HyperChainAPITest.prototype.handleAgeChange = function (e) {
        var t = { name: this.state.dat.name, age: e.target.value };
        this.setState({ dat: t });
    };
    HyperChainAPITest.prototype.render = function () {
        var wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
        var buttonsInstance = (React.createElement("div", { className: "well", style: wellStyles },
            React.createElement(react_bootstrap_1.Button, { onClick: this.login.bind(this), bsSize: "large", block: true }, "\u767B\u9646"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.compileContract.bind(this), bsSize: "large", block: true }, "\u7F16\u8BD1\u5408\u7EA6"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.deployContract.bind(this), bsSize: "large", block: true }, "\u90E8\u7F72\u5408\u7EA6"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.invokeContract.bind(this), bsSize: "large", block: true }, "\u8C03\u7528\u5408\u7EA6"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.queryContract.bind(this), bsSize: "large", block: true }, "\u67E5\u8BE2\u5408\u7EA6"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.queryMyself.bind(this), bsSize: "large", block: true }, "\u67E5\u8BE2\u81EA\u5DF1")));
        return React.createElement("div", { style: { display: "flex", flexDirection: "row", justifyContent: "space-around" } },
            React.createElement("div", null, buttonsInstance),
            React.createElement("div", null,
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "username" }, "\u59D3\u540D\uFF1A"),
                    React.createElement("input", { type: "text", value: this.state.dat.name, onChange: this.handleNameChange.bind(this) }))),
            React.createElement("div", null,
                React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "\u6761\u76EE"),
                            React.createElement("th", null, "\u5185\u5BB9"))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "Token"),
                            React.createElement("td", null, this.state.token)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Result"),
                            React.createElement("td", null, this.state.result)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "State"),
                            React.createElement("td", null, this.state.tip))))));
    };
    return HyperChainAPITest;
}(React.Component));
exports.HyperChainAPITest = HyperChainAPITest;
