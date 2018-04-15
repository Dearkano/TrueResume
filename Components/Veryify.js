"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Hyperchain = require("../Hyperchain");
var react_bootstrap_1 = require("react-bootstrap");
var Utility = require("../Utility");
var md5 = require("md5");
var Veryify = /** @class */ (function (_super) {
    tslib_1.__extends(Veryify, _super);
    function Veryify(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { resumes: null, done: false, resume1hash: "", resume1Rhash: "", resume2hash: "", resume2Rhash: "", tip1: "", tip2: "" };
        return _this;
    }
    Veryify.prototype.getResume = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var reponse, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/static/resume.json")];
                    case 1:
                        reponse = _a.sent();
                        return [4 /*yield*/, reponse.json()];
                    case 2:
                        data = _a.sent();
                        this.setState({ resumes: data, done: true });
                        return [2 /*return*/];
                }
            });
        });
    };
    Veryify.prototype.veryify1 = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var jstr, hash, curUser, name, data, Ret, r, buf, s, bchash1, tip, bchash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jstr = JSON.stringify(this.state.resumes[0]);
                        console.log("jstr=" + jstr);
                        hash = md5(jstr);
                        curUser = localStorage.getItem("HCAccount");
                        name = this.state.resumes[0].name;
                        return [4 /*yield*/, Hyperchain.InvokeContract([curUser, name], "query")];
                    case 1:
                        data = _a.sent();
                        Ret = data.Ret;
                        r = Ret.substring(2);
                        buf = new Buffer(r, 'hex');
                        s = buf.toString();
                        bchash1 = Utility.trim(s);
                        tip = "验证失败！";
                        bchash = bchash1.replace(-2, "");
                        if (bchash == hash)
                            tip = "验证成功！";
                        this.setState({ resume1hash: hash, resume1Rhash: bchash, tip1: tip });
                        return [2 /*return*/];
                }
            });
        });
    };
    Veryify.prototype.veryify2 = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var jstr, hash, curUser, name, data, Ret, r, buf, s, bchash1, tip, bchash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jstr = JSON.stringify(this.state.resumes[1]);
                        console.log(jstr);
                        hash = md5(jstr);
                        curUser = localStorage.getItem("HCAccount");
                        name = this.state.resumes[1].name;
                        return [4 /*yield*/, Hyperchain.InvokeContract([curUser, name], "query")];
                    case 1:
                        data = _a.sent();
                        Ret = data.Ret;
                        r = Ret.substring(2);
                        buf = new Buffer(r, 'hex');
                        s = buf.toString();
                        bchash1 = Utility.trim(s);
                        tip = "验证失败！";
                        bchash = bchash1.replace(-2, "");
                        console.log("----");
                        console.log(hash.length);
                        console.log(bchash.length);
                        console.log(bchash.codePointAt(33));
                        console.log(bchash.codePointAt(39));
                        console.log(bchash.codePointAt(47));
                        if (bchash == hash) {
                            tip = "验证成功！";
                            console.log("==");
                        }
                        this.setState({ resume2hash: hash, resume2Rhash: bchash, tip2: tip });
                        return [2 /*return*/];
                }
            });
        });
    };
    Veryify.prototype.render = function () {
        var res = null;
        if (this.state.done) {
            res = React.createElement("div", { style: { display: 'flex', justifyContent: "space-around", width: "100%", marginTop: "50px" } },
                React.createElement("div", { className: "column", style: { width: "500px" } },
                    React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "\u6761\u76EE"),
                                React.createElement("th", null, "\u5185\u5BB9"))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u59D3\u540D"),
                                React.createElement("td", null, this.state.resumes[0].name)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u5E74\u9F84"),
                                React.createElement("td", null, this.state.resumes[0].age)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u5B66\u5386"),
                                React.createElement("td", null, this.state.resumes[0].education)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u8BBA\u6587\u6570\u91CF"),
                                React.createElement("td", null, this.state.resumes[0].paper)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u4E13\u5229\u6570\u91CF"),
                                React.createElement("td", null, this.state.resumes[0].patent)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u63D0\u4EA4hash"),
                                React.createElement("td", null, this.state.resume1hash)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u533A\u5757\u94FEhash"),
                                React.createElement("td", null, this.state.resume1Rhash)))),
                    React.createElement(react_bootstrap_1.Button, { bsStyle: "success", onClick: this.veryify1.bind(this) }, "\u9A8C\u8BC1"),
                    React.createElement("h3", null, this.state.tip1)),
                React.createElement("div", { className: "column", style: { width: "500px" } },
                    React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "\u6761\u76EE"),
                                React.createElement("th", null, "\u5185\u5BB9"))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u59D3\u540D"),
                                React.createElement("td", null, this.state.resumes[1].name)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u5E74\u9F84"),
                                React.createElement("td", null, this.state.resumes[1].age)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u5B66\u5386"),
                                React.createElement("td", null, this.state.resumes[1].education)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u8BBA\u6587\u6570\u91CF"),
                                React.createElement("td", null, this.state.resumes[1].paper)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u4E13\u5229\u6570\u91CF"),
                                React.createElement("td", null, this.state.resumes[1].patent)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u63D0\u4EA4hash"),
                                React.createElement("td", null, this.state.resume2hash)),
                            React.createElement("tr", null,
                                React.createElement("td", null, "\u533A\u5757\u94FEhash"),
                                React.createElement("td", null, this.state.resume2Rhash)))),
                    React.createElement(react_bootstrap_1.Button, { bsStyle: "success", onClick: this.veryify2.bind(this) }, "\u9A8C\u8BC1"),
                    React.createElement("h3", null, this.state.tip2)));
        }
        return React.createElement("div", { style: {
                display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"
            } },
            React.createElement(react_bootstrap_1.Button, { bsStyle: "info", style: { width: "400px" }, onClick: this.getResume.bind(this) }, "\u83B7\u53D6\u7B80\u5386"),
            res);
    };
    return Veryify;
}(React.Component));
exports.Veryify = Veryify;
