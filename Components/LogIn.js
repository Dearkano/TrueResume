"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Hyperchain = require("../Hyperchain");
var react_bootstrap_1 = require("react-bootstrap");
var LogIn = /** @class */ (function (_super) {
    tslib_1.__extends(LogIn, _super);
    function LogIn(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { name: "", password: "", tip: "" };
        return _this;
    }
    LogIn.prototype.handleNameChange = function (e) {
        this.setState({ name: e.target.value });
    };
    LogIn.prototype.handlePasswordChange = function (e) {
        this.setState({ password: e.target.value });
    };
    LogIn.prototype.handleLogin = function () {
        if (Hyperchain.Account(this.state.name, this.state.password)) {
            localStorage.setItem("HCAccount", this.state.name);
            localStorage.setItem("HCPassword", this.state.password);
            this.setState({ tip: "登陆成功" });
        }
        else {
            this.setState({ tip: "登陆失败" });
        }
    };
    LogIn.prototype.componentDidMount = function () {
        if (localStorage.getItem("HCAccount"))
            document.location.href = "/";
    };
    LogIn.prototype.render = function () {
        return React.createElement("div", { className: "column", style: { alignItems: "center", width: "100%" } },
            " ",
            React.createElement("form", { onSubmit: this.handleLogin.bind(this), autoComplete: "on" },
                React.createElement("div", { className: "login-form" },
                    React.createElement("p", null, "\u7528\u6237\u540D"),
                    React.createElement("input", { name: "username", type: "text", id: "loginName", onChange: this.handleNameChange.bind(this), value: this.state.name, autoComplete: "username" })),
                React.createElement("div", { className: "login-form" },
                    React.createElement("p", null, "\u5BC6\u7801"),
                    React.createElement("input", { name: "password", type: "password", id: "loginPassword", onChange: this.handlePasswordChange.bind(this), autoComplete: "current-password" })),
                React.createElement("p", { id: "loginMessage" }, this.state.tip),
                React.createElement(react_bootstrap_1.Button, { type: "submit" }, "\u767B\u5F55")),
            React.createElement("div", { style: { width: "30%", marginTop: "40px" } },
                React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "\u8D26\u53F7"),
                            React.createElement("th", null, "\u5BC6\u7801"))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "Vayne\uFF08\u5DF2\u7ECF\u521B\u5EFA\u8FC7\u7B80\u5386\uFF09"),
                            React.createElement("td", null, "vayne")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Mana\uFF08\u6CA1\u6709\u521B\u5EFA\u8FC7\u7B80\u5386\uFF0C\u6BCF\u6B21\u4F1A\u88AB\u5220\uFF09"),
                            React.createElement("td", null, "mana")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Myrcella\uFF08\u6CA1\u6709\u521B\u5EFA\u8FC7\u7B80\u5386,\u4E0D\u4F1A\u88AB\u5220\uFF09"),
                            React.createElement("td", null, "myrcella")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "HR\uFF08\u67E5\u8BE2\u8005\uFF09"),
                            React.createElement("td", null, "hr")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "CA\uFF08\u7BA1\u7406\u5458\uFF09"),
                            React.createElement("td", null, "ca"))))));
    };
    return LogIn;
}(React.Component));
exports.LogIn = LogIn;
