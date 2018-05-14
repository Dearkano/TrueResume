"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Nebulas = require("../Nebulas");
var React = require("react");
var md5 = require("md5");
var NebulasTest = /** @class */ (function (_super) {
    tslib_1.__extends(NebulasTest, _super);
    function NebulasTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NebulasTest.prototype.test = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var nameHash, resume;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nameHash = md5("田子珺");
                        return [4 /*yield*/, Nebulas.queryResume(nameHash)];
                    case 1:
                        resume = _a.sent();
                        console.log(resume);
                        return [2 /*return*/];
                }
            });
        });
    };
    NebulasTest.prototype.test1 = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var nameHash, resume;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nameHash = "vayne tian";
                        return [4 /*yield*/, Nebulas.queryResume(nameHash)];
                    case 1:
                        resume = _a.sent();
                        console.log(resume);
                        return [2 /*return*/];
                }
            });
        });
    };
    NebulasTest.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("button", { onClick: this.test }, "test"),
            React.createElement("button", { onClick: this.test1 }, "test1"));
    };
    return NebulasTest;
}(React.Component));
exports.NebulasTest = NebulasTest;
