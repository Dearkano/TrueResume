"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_bootstrap_1 = require("react-bootstrap");
var React = require("react");
var MainPage = /** @class */ (function (_super) {
    tslib_1.__extends(MainPage, _super);
    function MainPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.state = {
            key: 1
        };
        return _this;
    }
    MainPage.prototype.handleSelect = function (key) {
        this.setState({ key: key });
    };
    MainPage.prototype.render = function () {
        return React.createElement("div", { className: "mainpage-body" },
            React.createElement("img", { src: "./static/nebulas.png", className: "logo" }),
            React.createElement("div", { style: { marginTop: "-20px" } },
                React.createElement("img", { src: "/static/blockchain.jpg", width: "1515px" }),
                React.createElement("h1", { className: "title" }, "\u57FA\u4E8E\u661F\u4E91\u94FE\u7684\u7B80\u5386\u9A8C\u8BC1\u7CFB\u7EDF"),
                React.createElement("h2", { className: "title1" }, "\u81F4\u529B\u4E8E\u5728\u53BB\u4E2D\u5FC3\u5316\u7684\u73AF\u5883\u4E0B\u4E3A\u4F01\u4E1A\u63D0\u4F9B\u4E00\u4E2A\u5B89\u5168\u53EF\u4FE1\u7684\u7B80\u5386\u9A8C\u8BC1\u89E3\u51B3\u65B9\u6848")),
            React.createElement("div", { style: { width: "900px", marginTop: "230px" } },
                React.createElement(react_bootstrap_1.Tabs, { activeKey: this.state.key, onSelect: this.handleSelect, id: "controlled-tab-example" },
                    React.createElement(react_bootstrap_1.Tab, { eventKey: 1, title: "简历样例1" },
                        React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "\u6761\u76EE"),
                                    React.createElement("th", null, "\u5185\u5BB9"))),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u59D3\u540D"),
                                    React.createElement("td", null, "\u6BD4\u5C14\u00B7\u76D6\u8328")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u5E74\u9F84"),
                                    React.createElement("td", null, "63")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u5B66\u5386"),
                                    React.createElement("td", null, "\u54C8\u4F5B\u5927\u5B66\u8084\u4E1A")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u8BBA\u6587\u6570\u91CF"),
                                    React.createElement("td", null, "1")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u4E13\u5229\u6570\u91CF"),
                                    React.createElement("td", null, "3000/\u5E74"))))),
                    React.createElement(react_bootstrap_1.Tab, { eventKey: 2, title: "简历样例2" },
                        React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "\u6761\u76EE"),
                                    React.createElement("th", null, "\u5185\u5BB9"))),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u59D3\u540D"),
                                    React.createElement("td", null, "\u5FA1\u5742\u7F8E\u7434")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u5E74\u9F84"),
                                    React.createElement("td", null, "16")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u5B66\u5386"),
                                    React.createElement("td", null, "\u5E38\u76D8\u53F0\u4E2D\u5B66")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u8BBA\u6587\u6570\u91CF"),
                                    React.createElement("td", null, "0")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u4E13\u5229\u6570\u91CF"),
                                    React.createElement("td", null, "1\uFF08\u8D85\u7535\u78C1\u70AE\uFF09"))))),
                    React.createElement(react_bootstrap_1.Tab, { eventKey: 3, title: "简历样例3" },
                        React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "\u6761\u76EE"),
                                    React.createElement("th", null, "\u5185\u5BB9"))),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u59D3\u540D"),
                                    React.createElement("td", null, "\u5434\u671D\u6656")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u5E74\u9F84"),
                                    React.createElement("td", null, "52")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u5B66\u5386"),
                                    React.createElement("td", null, "\u6D59\u6C5F\u5927\u5B66\u535A\u58EB")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u8BBA\u6587\u6570\u91CF"),
                                    React.createElement("td", null, "180")),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "\u4E13\u5229\u6570\u91CF"),
                                    React.createElement("td", null, "120"))))))));
    };
    return MainPage;
}(React.Component));
exports.MainPage = MainPage;
