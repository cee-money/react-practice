"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyle = {
  color: "black"
};

var AddButton = function AddButton(props) {
  return /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    style: buttonStyle,
    className: "btn-sm",
    color: "warning"
  }, "+ Add Book");
};

var _default = AddButton;
exports.default = _default;

//# sourceMappingURL=AddButton.js.map