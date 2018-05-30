"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Nebulas = require("../Nebulas");
var $ = require("jquery");
var react_bootstrap_1 = require("react-bootstrap");
var UserCenter = /** @class */ (function (_super) {
    tslib_1.__extends(UserCenter, _super);
    function UserCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserCenter.prototype.accept = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var Args, args;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Args = JSON.parse(localStorage.getItem("myResumeData"));
                        Args[0] = localStorage.getItem("HCAccount");
                        return [4 /*yield*/, Nebulas.addResume(Args)];
                    case 1:
                        args = _a.sent();
                        localStorage.setItem("myResumeState", "accept");
                        //localStorage.removeItem("myResumeData");
                        $("#acceptR").attr("disabled", true);
                        $("#rejectR").attr("disabled", true);
                        $("#txtip").text("交易已发送，验证交易完成后，您可以去验证简历");
                        return [2 /*return*/];
                }
            });
        });
    };
    UserCenter.prototype.refuse = function () {
        localStorage.setItem("myResumeState", "refuse");
        localStorage.removeItem("myResumeData");
        document.location.href = "/usercenter";
    };
    UserCenter.prototype.render = function () {
        if (localStorage.getItem("HCAccount") != "manager") {
            return React.createElement("div", null, "\u60A8\u6CA1\u6709\u6743\u9650");
        }
        var Args = null;
        var UI = React.createElement("div", { className: "column" },
            React.createElement("h1", null, "\u5F53\u524D\u6CA1\u6709\u9700\u8981\u5BA1\u6838\u7684\u7B80\u5386"));
        var state = localStorage.getItem("myResumeState");
        console.log(state);
        if (state == "wait") {
            Args = localStorage.getItem("myResumeData");
            var resume = JSON.parse(JSON.parse(Args)[2]);
            UI = React.createElement("div", { className: "column", style: { alignItems: "center" } },
                " ",
                React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "\u6761\u76EE"),
                            React.createElement("th", null, "\u5185\u5BB9"))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u59D3\u540D"),
                            React.createElement("td", null, resume.name)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u5E74\u9F84"),
                            React.createElement("td", null, resume.age)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u5B66\u5386"),
                            React.createElement("td", null, resume.education)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u8BBA\u6587\u6570\u91CF"),
                            React.createElement("td", null, resume.paper)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u4E13\u5229\u6570\u91CF"),
                            React.createElement("td", null, resume.patent)))),
                React.createElement(react_bootstrap_1.Button, { style: { marginTop: "25px", width: "200px" }, bsStyle: "success", id: "acceptR", onClick: this.accept.bind(this) }, "\u901A\u8FC7"),
                React.createElement(react_bootstrap_1.Button, { style: { marginTop: "25px", width: "200px" }, bsStyle: "danger", id: "rejectR", onClick: this.refuse.bind(this) }, "\u62D2\u7EDD"),
                React.createElement("div", { id: "txtip" }));
        }
        return React.createElement("div", null, UI);
    };
    return UserCenter;
}(React.Component));
exports.UserCenter = UserCenter;
