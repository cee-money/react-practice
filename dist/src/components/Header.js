"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Navbar, {
    color: "secondary"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.NavbarBrand, null, /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement("span", {
    role: "img",
    "aria-label": "books"
  }, "\uD83D\uDCDA"), "\xA0 Book Tracker"))));
};

var _default = Header;
exports.default = _default;

//# sourceMappingURL=Header.js.map