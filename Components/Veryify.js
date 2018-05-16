"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Nebulas = require("../Nebulas");
var md5 = require("md5");
var Veryify = /** @class */ (function (_super) {
    tslib_1.__extends(Veryify, _super);
    function Veryify(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { resume: { name: "", age: "", education: "", paper: "", patent: "" }, resumes: null, done: false, resume1hash: "", resume1Rhash: "", resume2hash: "", resume2Rhash: "", tip1: "", tip2: "", verificationResult: "", name: "", v1hash: "", v2hash: "", tip3: "" };
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
            var jstr, hash, curUser, nameHash, resume, tip, result, resumeHash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jstr = JSON.stringify(this.state.resumes[0]);
                        console.log("jstr=" + jstr);
                        hash = md5(jstr);
                        curUser = localStorage.getItem("HCAccount");
                        nameHash = md5(this.state.resumes[0].name);
                        return [4 /*yield*/, Nebulas.queryResume(nameHash)];
                    case 1:
                        resume = _a.sent();
                        console.log(resume);
                        tip = "验证失败！";
                        result = JSON.parse(resume.result.result);
                        resumeHash = result.resumeHash;
                        if (resumeHash == hash)
                            tip = "验证成功！";
                        this.setState({ resume1hash: hash, resume1Rhash: resumeHash, tip1: tip });
                        return [2 /*return*/];
                }
            });
        });
    };
    Veryify.prototype.veryify2 = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var jstr, hash, curUser, nameHash, resume, tip, result, resumeHash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jstr = JSON.stringify(this.state.resumes[1]);
                        hash = md5(jstr);
                        curUser = localStorage.getItem("HCAccount");
                        nameHash = md5(this.state.resumes[1].name);
                        console.log("jstr = " + jstr);
                        console.log("verify hash= " + hash);
                        return [4 /*yield*/, Nebulas.queryResume(nameHash)];
                    case 1:
                        resume = _a.sent();
                        tip = "验证失败！";
                        result = JSON.parse(resume.result.result);
                        resumeHash = result.resumeHash;
                        if (resumeHash == hash) {
                            tip = "验证成功！";
                            console.log("==");
                        }
                        this.setState({ resume2hash: hash, resume2Rhash: resumeHash, tip2: tip });
                        return [2 /*return*/];
                }
            });
        });
    };
    Veryify.prototype.verify = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resume, result, resumeHash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Nebulas.queryResume(md5(this.state.name))];
                    case 1:
                        resume = _a.sent();
                        result = JSON.parse(resume.result.result);
                        resumeHash = result.resumeHash;
                        this.setState({ verificationResult: resumeHash });
                        return [2 /*return*/];
                }
            });
        });
    };
    Veryify.prototype.handleENameChange = function (e) {
        this.setState({ name: e.target.value });
    };
    Veryify.prototype.handleNameChange = function (e) {
        var t = this.state.resume;
        t.name = e.target.value;
        this.setState({ resume: t });
    };
    Veryify.prototype.handleAgeChange = function (e) {
        var t = this.state.resume;
        t.age = e.target.value;
        this.setState({ resume: t });
    };
    Veryify.prototype.handleEducationChange = function (e) {
        var t = this.state.resume;
        t.education = e.target.value;
        this.setState({ resume: t });
    };
    Veryify.prototype.handlePaperChange = function (e) {
        var t = this.state.resume;
        t.paper = e.target.value;
        this.setState({ resume: t });
    };
    Veryify.prototype.handlePatentChange = function (e) {
        var t = this.state.resume;
        t.patent = e.target.value;
        this.setState({ resume: t });
    };
    Veryify.prototype.verifyResume = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var jstr, hash, curUser, nameHash, resume, tip, result, resumeHash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jstr = JSON.stringify(this.state.resume);
                        hash = md5(jstr);
                        curUser = localStorage.getItem("HCAccount");
                        nameHash = md5(this.state.resume.name);
                        return [4 /*yield*/, Nebulas.queryResume(nameHash)];
                    case 1:
                        resume = _a.sent();
                        tip = "验证失败！";
                        result = JSON.parse(resume.result.result);
                        resumeHash = result.resumeHash;
                        if (resumeHash == hash) {
                            tip = "验证成功！";
                            console.log("==");
                        }
                        this.setState({ v1hash: hash, v2hash: resumeHash, tip3: tip });
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
            React.createElement("h1", null, "Step 1"),
            React.createElement("div", { style: { display: "flex" } },
                React.createElement("div", { className: "login-form" },
                    React.createElement("p", null, "\u59D3\u540D"),
                    React.createElement("input", { name: "username", type: "text", id: "loginName", onChange: this.handleENameChange.bind(this), value: this.state.name, autoComplete: "username" }),
                    React.createElement(react_bootstrap_1.Button, { bsStyle: "info", style: { marginLeft: "1rem" }, onClick: this.verify.bind(this) }, "\u67E5\u8BE2"))),
            React.createElement("h1", null, "Step 2"),
            React.createElement("div", { className: "column" },
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "username" }, "\u59D3\u540D\uFF1A"),
                    React.createElement("input", { type: "text", value: this.state.resume.name, onChange: this.handleNameChange.bind(this) })),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "age" }, "\u5E74\u9F84\uFF1A"),
                    React.createElement("input", { type: "text", value: this.state.resume.age, onChange: this.handleAgeChange.bind(this) })),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "education" }, "\u6559\u80B2\uFF1A"),
                    React.createElement("input", { type: "text", value: this.state.resume.education, onChange: this.handleEducationChange.bind(this) })),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "paper" }, "\u8BBA\u6587\uFF1A"),
                    React.createElement("input", { type: "text", value: this.state.resume.paper, onChange: this.handlePaperChange.bind(this) })),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "patent" }, "\u4E13\u5229\uFF1A"),
                    React.createElement("input", { type: "text", value: this.state.resume.patent, onChange: this.handlePatentChange.bind(this) })),
                React.createElement(react_bootstrap_1.Button, { onClick: this.verifyResume.bind(this) }, "\u9A8C\u8BC1\u7B80\u5386"),
                React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u63D0\u4EA4hash"),
                            React.createElement("td", null, this.state.v1hash)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u533A\u5757\u94FEhash"),
                            React.createElement("td", null, this.state.v2hash)))),
                React.createElement("h3", null, this.state.tip3)),
            React.createElement("div", { className: "row" }, this.state.verificationResult),
            React.createElement("h1", null, "Step 3"),
            React.createElement(react_bootstrap_1.Button, { bsStyle: "info", style: { width: "400px" }, onClick: this.getResume.bind(this) }, "\u83B7\u53D6\u7B80\u5386"),
            res);
    };
    return Veryify;
}(React.Component));
exports.Veryify = Veryify;
