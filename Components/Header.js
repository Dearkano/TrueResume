"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_bootstrap_1 = require("react-bootstrap");
var React = require("react");
var Header = /** @class */ (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var isLogin = false;
        var name = "";
        if (localStorage.getItem("HCAccount")) {
            isLogin = true;
            name = localStorage.getItem("HCAccount");
        }
        var userCenter = null;
        if (localStorage.getItem("HCAccount") == "manager") {
            userCenter = React.createElement(react_bootstrap_1.NavItem, { eventKey: 1, href: "/usercenter" }, "\u4E2A\u4EBA\u4E2D\u5FC3");
        }
        return React.createElement("div", null,
            React.createElement(react_bootstrap_1.Navbar, { inverse: true, collapseOnSelect: true },
                React.createElement(react_bootstrap_1.Navbar.Header, null,
                    React.createElement(react_bootstrap_1.Navbar.Brand, null,
                        React.createElement("a", { href: "/" }, "\u7B80\u5386\u9A8C\u8BC1\u5E73\u53F0")),
                    React.createElement(react_bootstrap_1.Navbar.Toggle, null)),
                React.createElement(react_bootstrap_1.Navbar.Collapse, null,
                    React.createElement(react_bootstrap_1.Nav, null,
                        React.createElement(react_bootstrap_1.NavItem, { eventKey: 1, href: "/myresume" }, "\u6211\u7684\u7B80\u5386"),
                        React.createElement(react_bootstrap_1.NavItem, { eventKey: 2, href: "/verify" }, "\u9A8C\u8BC1\u7B80\u5386")),
                    React.createElement(react_bootstrap_1.Nav, { pullRight: true },
                        userCenter,
                        React.createElement(react_bootstrap_1.NavItem, { eventKey: 2, href: isLogin ? "/logout" : "/login" }, isLogin ? name + "/注销" : "登录")))));
    };
    return Header;
}(React.Component));
exports.Header = Header;
