"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Footer = /** @class */ (function (_super) {
    tslib_1.__extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return React.createElement("div", { className: "footer" },
            React.createElement("div", { className: "column" },
                React.createElement("div", { className: "footerRow" },
                    React.createElement("div", { style: { marginRight: "15px", color: "#000" } }, "\u53CB\u60C5\u94FE\u63A5"),
                    React.createElement("a", { href: "http://www.zju.edu.cn/" }, "\u6D59\u6C5F\u5927\u5B66"),
                    "|",
                    React.createElement("a", { href: "http://www.cs.zju.edu.cn/" }, "\u6D59\u6C5F\u5927\u5B66\u8BA1\u7B97\u673A\u5B66\u9662"),
                    "|",
                    React.createElement("a", { href: "http://www.zju88.org/agent/index.do" }, "\u98D8\u6E3A\u6C34\u4E91\u95F4"),
                    "|",
                    React.createElement("a", { href: "http://www.qsc.zju.edu.cn/" }, "\u6C42\u662F\u6F6E"),
                    "|",
                    React.createElement("a", { href: "http://luckweb.057101.com/bt2/index.asp" }, "\u7F18\u7F51"),
                    "|",
                    React.createElement("a", { href: "http://www.nexushd.org/login.php" }, "NexusHD"),
                    "|",
                    React.createElement("a", { href: "https://www.zdgd.zju.edu.cn/" }, "\u6D59\u6C5F\u5927\u5B66\u5E7F\u64AD\u7535\u89C6\u7F51"),
                    "|",
                    React.createElement("a", { href: "http://zy.zju.edu.cn/" }, "\u6D59\u5927\u641C\u7D22")),
                React.createElement("div", { className: "footerRow" },
                    "Copyright \u00A9 Vayne Tian --CC98 --InCAS Lab | ",
                    React.createElement("a", { href: "mailto:vaynetian@cc98.org" }, "Email: vaynetian@cc98.org"))));
    };
    return Footer;
}(React.Component));
exports.Footer = Footer;
