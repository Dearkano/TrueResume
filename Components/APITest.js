"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utility = require("../Utility");
var react_bootstrap_1 = require("react-bootstrap");
var APITest = /** @class */ (function (_super) {
    tslib_1.__extends(APITest, _super);
    function APITest(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { token: "" };
        return _this;
    }
    APITest.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.login("Mana", "org1")];
                    case 1:
                        token = _a.sent();
                        this.setState({ token: token });
                        return [2 /*return*/];
                }
            });
        });
    };
    APITest.prototype.createChannel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.createChannel(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    APITest.prototype.joinChannel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.joinChannel(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    APITest.prototype.installChaincode = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.installChaincode(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    APITest.prototype.instantiateChaincode = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.instantiateChaincode(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    APITest.prototype.invoke = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.invoke(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    APITest.prototype.query = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.query(this.state.token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    APITest.prototype.render = function () {
        var wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
        var buttonsInstance = (React.createElement("div", { className: "well", style: wellStyles },
            React.createElement(react_bootstrap_1.Button, { onClick: this.login.bind(this), bsSize: "large", block: true }, "login"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.createChannel.bind(this), bsSize: "large", block: true }, "createChannel"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.joinChannel.bind(this), bsSize: "large", block: true }, "joinChannel"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.installChaincode.bind(this), bsSize: "large", block: true }, "installChaincode"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.instantiateChaincode.bind(this), bsSize: "large", block: true }, "instantiateChaincode"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.invoke.bind(this), bsSize: "large", block: true }, "invoke"),
            React.createElement(react_bootstrap_1.Button, { onClick: this.query.bind(this), bsSize: "large", block: true }, "query")));
        return React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
            React.createElement("div", null,
                "token = ",
                this.state.token),
            buttonsInstance);
    };
    return APITest;
}(React.Component));
exports.APITest = APITest;
