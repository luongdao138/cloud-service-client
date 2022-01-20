"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallMenu = exports.MenuButton = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      transform: scaleY(1);\n      opacity: 1;\n      visibility: visible;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background-color: #002269;\n  position: fixed;\n  inset: 65px 0 0 0;\n  z-index: 10;\n  transition: all 0.3s ease-in-out;\n  /* transform-origin: 65px; */\n  transform: scaleY(0.9);\n  opacity: 0;\n  visibility: hidden;\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n          top: 0px;\n          transform: rotate(-45deg);\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          top: 0px;\n          transform: rotate(45deg);\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  span,\n  span::after,\n  span::before {\n    height: 2.5px;\n    width: 32px;\n    border-radius: 65px;\n    background-color: #fff;\n    transition: all 0.1s ease-out;\n  }\n  span {\n    display: block;\n    position: relative;\n    border-radius: 65px;\n    background-color: ", ";\n\n    ::before,\n    ::after {\n      content: '';\n      position: absolute;\n    }\n\n    ::before {\n      top: -7px;\n      ", "\n    }\n    ::after {\n      bottom: -7px;\n      ", "\n    }\n  }\n\n  @media (min-width: 780px) {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          transform: scaleY(1);\n          opacity: 1;\n          visibility: visible;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n  background-color: #002269;\n  color: #fff;\n  top: 0;\n\n  .content {\n    width: 92%;\n    max-width: 1150px;\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    height: 65px;\n  }\n\n  .logo {\n    display: flex;\n    align-items: center;\n    /* flex-grow: 1; */\n    img {\n      width: 50px;\n      margin-right: 0.25rem;\n    }\n    span {\n      letter-spacing: -0.5px;\n      font-size: 1.75rem;\n      color: #fff;\n      font-weight: 600;\n    }\n\n    @media (max-width: 475px) {\n      img {\n        width: 40px;\n      }\n      span {\n        font-size: 1.5rem;\n      }\n    }\n  }\n\n  .header-left,\n  .heart,\n  .saved-products {\n    display: flex;\n    align-items: center;\n  }\n\n  .saved-products {\n    margin-left: 1rem;\n    @media (max-width: 780px) {\n      margin-left: 0;\n    }\n  }\n\n  .heart {\n    margin-left: 0.5rem;\n    padding: 0.35rem 0.5rem;\n    border-radius: 3px;\n    border: 1px solid hsla(0, 0%, 100%, 0.2);\n    svg {\n      margin-right: 0.25rem;\n      font-size: 20px;\n    }\n  }\n\n  .nav {\n    margin-left: 1rem;\n    display: flex;\n    align-items: center;\n    > a {\n      color: #fff;\n      display: inline-block;\n      font-weight: 700;\n      padding: 0.75rem;\n    }\n  }\n\n  .header-left {\n    .search {\n      position: relative;\n      input {\n        width: 200px;\n        padding: 0.25rem 0.65rem;\n        padding-right: calc(0.73rem + 33px);\n        border-radius: 4px;\n        background-color: #fff;\n        border: 1px solid #ccc;\n        font-size: 1.2rem;\n        transition: all 0.25s ease-in-out;\n\n        &:focus {\n          box-shadow: 0 0 2px #2ab0fc;\n          border-color: #2ab0fc;\n        }\n\n        &:focus {\n          width: 400px;\n        }\n      }\n      & > svg {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        /* right: 10px; */\n        z-index: 100;\n        right: 10px;\n        font-size: 19px;\n        color: #000;\n      }\n\n      @media (max-width: 780px) {\n        display: none;\n      }\n    }\n\n    @media (max-width: 780px) {\n      background-color: #002269;\n      position: fixed;\n      inset: 65px 0 0 0;\n      z-index: 10;\n      transition: all 0.3s ease-in-out;\n      transform-origin: 0 0;\n      transform: scaleY(0.9);\n      opacity: 0;\n      visibility: hidden;\n      display: block;\n      padding: 1rem;\n      .saved-products {\n        margin-bottom: 0.5rem;\n        flex-direction: row-reverse;\n        width: max-content;\n\n        .heart {\n          margin: 0;\n        }\n        .label {\n          margin-left: 0.5rem;\n        }\n      }\n\n      .nav {\n        margin-left: 0;\n        display: flex;\n        flex-direction: column;\n        align-items: unset;\n\n        > a {\n          padding: 0.9rem 0;\n          opacity: 0.6;\n          transition: all 0.2s ease-in-out;\n          :hover {\n            opacity: 1;\n          }\n\n          & + a {\n            border-top: 1px solid hsla(0, 0%, 100%, 0.2);\n          }\n        }\n      }\n\n      ", "\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject2());
});

exports.Container = Container;

var MenuButton = _styledComponents["default"].div(_templateObject3(), function (props) {
  return !props.open ? '#fff' : 'transparent';
}, function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject4());
}, function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject5());
});

exports.MenuButton = MenuButton;

var SmallMenu = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject7());
});

exports.SmallMenu = SmallMenu;