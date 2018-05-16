"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Nebulas = require("../Nebulas");
var react_bootstrap_1 = require("react-bootstrap");
var MyResume = /** @class */ (function (_super) {
    tslib_1.__extends(MyResume, _super);
    function MyResume(Props) {
        var _this = _super.call(this, Props) || this;
        _this.state = {
            resume: { name: "", age: "", education: "", paper: "", patent: "" }
        };
        return _this;
    }
    MyResume.prototype.createResume = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var jstr, curUser, Args;
            return tslib_1.__generator(this, function (_a) {
                jstr = JSON.stringify(this.state.resume);
                localStorage.setItem("myResume", jstr);
                curUser = localStorage.getItem("HCAccount");
                Args = [curUser, this.state.resume.name, jstr];
                //await Hyperchain.InvokeContract(Hyperchain.FormData(Args), "invoke")
                //const args = await Nebulas.addResume(Nebulas.formData(Args));
                //await Nebulas.queryResume("vayne tian");
                localStorage.setItem("myResumeData", JSON.stringify(Nebulas.formData(Args)));
                localStorage.setItem("myResumeState", "wait");
                document.location.href = "/myresume";
                return [2 /*return*/];
            });
        });
    };
    MyResume.prototype.handleNameChange = function (e) {
        var t = this.state.resume;
        t.name = e.target.value;
        this.setState({ resume: t });
    };
    MyResume.prototype.handleAgeChange = function (e) {
        var t = this.state.resume;
        t.age = e.target.value;
        this.setState({ resume: t });
    };
    MyResume.prototype.handleEducationChange = function (e) {
        var t = this.state.resume;
        t.education = e.target.value;
        this.setState({ resume: t });
    };
    MyResume.prototype.handlePaperChange = function (e) {
        var t = this.state.resume;
        t.paper = e.target.value;
        this.setState({ resume: t });
    };
    MyResume.prototype.handlePatentChange = function (e) {
        var t = this.state.resume;
        t.patent = e.target.value;
        this.setState({ resume: t });
    };
    MyResume.prototype.nextResume = function () {
        localStorage.removeItem("myResume");
        localStorage.removeItem("myResumeData");
        document.location.href = "/myresume";
    };
    MyResume.prototype.render = function () {
        if (!localStorage.getItem("HCAccount")) {
            return React.createElement("h2", { style: { display: "flex", justifyContent: "center" } },
                "\u60A8\u8FD8\u672A\u767B\u5F55 \u8BF7\u5148",
                React.createElement("a", { href: "/login" }, "\u767B\u9646"),
                "\u54E6");
        }
        if (!localStorage.getItem("myResume")) {
            return React.createElement("div", { style: {
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
                } },
                React.createElement("h2", null, "\u60A8\u8FD8\u6CA1\u6709\u5C5E\u4E8E\u81EA\u5DF1\u7684\u7B80\u5386\uFF0C\u5148\u521B\u5EFA\u4E00\u4EFD\u5427^_^"),
                React.createElement("div", null,
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
                    React.createElement(react_bootstrap_1.Button, { onClick: this.createResume.bind(this) }, "\u521B\u5EFA\u7B80\u5386")));
        }
        else {
            var tip = "";
            var progress = null;
            if (localStorage.getItem("myResumeState") == "accept") {
                tip = "审核通过";
                progress = React.createElement(react_bootstrap_1.ProgressBar, { now: 100 });
            }
            else if (localStorage.getItem("myResumeState") == "refuse") {
                tip = "审核未通过";
                progress = React.createElement(react_bootstrap_1.ProgressBar, { now: 0 });
            }
            else if (localStorage.getItem("myResumeState") == "wait") {
                tip = "审核中";
                progress = React.createElement(react_bootstrap_1.ProgressBar, { now: 50 });
            }
            var Args = JSON.parse(localStorage.getItem("myResumeData"));
            console.log(Args);
            var nameHash = Args[1];
            var address = Args[0];
            var data = JSON.parse(Args[2]);
            return React.createElement("div", { style: {
                    display: "flex", flexDirection: "column"
                } },
                React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "\u6761\u76EE"),
                            React.createElement("th", null, "\u5185\u5BB9"))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u59D3\u540D"),
                            React.createElement("td", null, data.name)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u59D3\u540D\u54C8\u5E0C"),
                            React.createElement("td", null, nameHash)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u5730\u5740"),
                            React.createElement("td", null, address)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u5E74\u9F84"),
                            React.createElement("td", null, data.age)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u5B66\u5386"),
                            React.createElement("td", null, data.education)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u8BBA\u6587\u6570\u91CF"),
                            React.createElement("td", null, data.paper)),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u4E13\u5229\u6570\u91CF"),
                            React.createElement("td", null, data.patent)))),
                progress,
                React.createElement("div", { className: "row", style: { justifyContent: "center", marginTop: "15px", fontSize: "30px" } }, tip),
                React.createElement(react_bootstrap_1.Button, { bsStyle: "info", onClick: this.nextResume.bind(this) }, "\u7533\u8BF7\u4E0B\u4E00\u4EFD\u7B80\u5386"));
        }
    };
    return MyResume;
}(React.Component));
exports.MyResume = MyResume;
