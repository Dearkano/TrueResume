"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("./Components/Header");
var Footer_1 = require("./Components/Footer");
var MainPage_1 = require("./Components/MainPage");
var HyperChainAPITest_1 = require("./Components/HyperChainAPITest");
var LogIn_1 = require("./Components/LogIn");
var LogOut_1 = require("./Components/LogOut");
var MyResume_1 = require("./Components/MyResume");
var Veryify_1 = require("./Components/Veryify");
var UserCenter_1 = require("./Components/UserCenter");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", { className: "root" },
                React.createElement(Header_1.Header, null),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: MainPage_1.MainPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/apitest", component: HyperChainAPITest_1.HyperChainAPITest }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: LogIn_1.LogIn }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/logout", component: LogOut_1.LogOut }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/myresume", component: MyResume_1.MyResume }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/verify", component: Veryify_1.Veryify }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/usercenter", component: UserCenter_1.UserCenter }),
                React.createElement(Footer_1.Footer, null)));
    };
    return App;
}(React.Component));
exports.App = App;
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
