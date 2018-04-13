"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ReactDOM = require("react-dom");
var Utilty = require("./Utility");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { token: "" };
        return _this;
    }
    App.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilty.login("Jim", "Org1")];
                    case 1:
                        token = _a.sent();
                        this.setState({ token: token });
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.createChannel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilty.createChannel(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.joinChannel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilty.joinChannel(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.installChaincode = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilty.installChaincode(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.instantiateChaincode = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilty.instantiateChaincode(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.invoke = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilty.invoke(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.query = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilty.query(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.render = function () {
        return React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
            React.createElement("div", null,
                "token = ",
                this.state.token),
            React.createElement("div", { onClick: this.login.bind(this) }, "login"),
            React.createElement("div", { onClick: this.createChannel.bind(this) }, "createChannel"),
            React.createElement("div", { onClick: this.joinChannel.bind(this) }, "joinChannel"),
            React.createElement("div", { onClick: this.installChaincode.bind(this) }, "installChaincode"),
            React.createElement("div", { onClick: this.instantiateChaincode.bind(this) }, "instantiateChaincode"),
            React.createElement("div", { onClick: this.invoke.bind(this) }, "invoke"),
            React.createElement("div", { onClick: this.query.bind(this) }, "query"));
    };
    return App;
}(React.Component));
exports.App = App;
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
