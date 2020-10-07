"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var modalStyle = {
  backgroundColor: "black"
};
var formStyle = {
  texttColor: "white"
};
var buttonStyle = {
  color: "black"
};

var NewBookModal = /*#__PURE__*/function (_React$Component) {
  _inherits(NewBookModal, _React$Component);

  var _super = _createSuper(NewBookModal);

  function NewBookModal(props) {
    var _this;

    _classCallCheck(this, NewBookModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var value = event.target.value;

      _this.setState({
        title: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFormSubmit", function (event) {
      event.preventDefault();

      _this.setState({
        title: ""
      });

      _this.toggle();
    });

    _this.state = {
      modal: false,
      title: ""
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NewBookModal, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (prevState) {
        return {
          modal: !prevState.modal,
          title: ""
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
        style: buttonStyle,
        className: "btn-sm",
        onClick: this.toggle,
        color: "warning"
      }, "+ Add Book"), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
        isOpen: this.state.modal,
        toggle: this.toggle,
        style: modalStyle
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, {
        toggle: this.toggle
      }, "Add New Book \xA0", /*#__PURE__*/_react.default.createElement("span", {
        role: "img",
        "aria-label": "books"
      }, "\uD83D\uDCDA")), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Form, {
        style: formStyle
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        for: "exampleEmail"
      }, "Title:"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "text",
        name: "title",
        id: "title",
        value: this.state.title,
        placeholder: "i.e. The Catcher in the Rye",
        onChange: this.handleInputChange
      })))), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalFooter, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
        color: "warning",
        onClick: this.handleFormSubmit,
        style: buttonStyle
      }, "Add"), " ", /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
        className: "btn-outline-danger",
        onClick: this.toggle
      }, "Cancel"))));
    }
  }]);

  return NewBookModal;
}(_react.default.Component);

var _default = NewBookModal;
exports.default = _default;

//# sourceMappingURL=NewBookModal.js.map