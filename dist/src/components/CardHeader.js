"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _NewBookModal = _interopRequireDefault(require("./NewBookModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardHeader = function CardHeader(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, null, props.props === "Want To Read" ? /*#__PURE__*/_react.default.createElement("h4", {
    className: "text-warning"
  }, "Want To Read") : null, props.props === "Currently Reading" ? /*#__PURE__*/_react.default.createElement("h4", {
    className: "text-success"
  }, "Currently Reading") : null, props.props === "Read" ? /*#__PURE__*/_react.default.createElement("h4", {
    className: "text-info"
  }, "Read") : null))), props.props === "Want To Read" ? /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, null, /*#__PURE__*/_react.default.createElement(_NewBookModal.default, null))) : null));
};

var _default = CardHeader;
exports.default = _default;

//# sourceMappingURL=CardHeader.js.map