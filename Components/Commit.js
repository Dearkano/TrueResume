"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
function FieldGroup(_a) {
    var id = _a.id, label = _a.label, props = tslib_1.__rest(_a, ["id", "label"]);
    return (React.createElement(react_bootstrap_1.FormGroup, { controlId: id },
        React.createElement(react_bootstrap_1.ControlLabel, null, label),
        React.createElement(react_bootstrap_1.FormControl, tslib_1.__assign({}, props))));
}
var Commit = /** @class */ (function (_super) {
    tslib_1.__extends(Commit, _super);
    function Commit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commit.prototype.render = function () {
        return React.createElement("form", null,
            React.createElement(FieldGroup, { id: "name", type: "text", label: "Text", placeholder: "Enter text" }),
            React.createElement(FieldGroup, { id: "formControlsText", type: "text", label: "Text", placeholder: "Enter text" }),
            React.createElement(FieldGroup, { id: "formControlsText", type: "text", label: "Text", placeholder: "Enter text" }),
            React.createElement(FieldGroup, { id: "formControlsText", type: "text", label: "Text", placeholder: "Enter text" }),
            React.createElement(FieldGroup, { id: "formControlsText", type: "text", label: "Text", placeholder: "Enter text" }));
    };
    return Commit;
}(React.Component));
exports.Commit = Commit;
