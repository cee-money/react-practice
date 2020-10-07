"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardStyle = {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left",
  margin: "2px 0",
  fontSize: "12px"
};

var CardList = function CardList(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardBody, null, /*#__PURE__*/_react.default.createElement(_reactstrap.CardTitle, {
    style: cardStyle
  }, props.title), "\xA0\xA0", props.status === "Want To Read" ? /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    style: cardStyle,
    color: "info",
    className: "btn-sm"
  }, "Reading") : null, props.status === "Currently Reading" ? /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    style: cardStyle,
    color: "primary",
    className: "btn-sm"
  }, "Read") : null, props.status === "Read" ? /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    style: cardStyle,
    color: "secondary",
    className: "btn-sm"
  }, "Archive") : null))));
};

var _default = CardList;
exports.default = _default;

//# sourceMappingURL=CardList.js.map