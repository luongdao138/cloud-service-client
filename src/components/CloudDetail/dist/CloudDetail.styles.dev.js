"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 25%);\n  padding: 1rem;\n  border-top: 3px solid #21b1ff;\n\n  .top {\n    display: flex;\n    flex-direction: column;\n\n    .avatar {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 0.5rem;\n      img {\n        aspect-ratio: 1;\n        object-fit: contain;\n        box-shadow: inset 0 0 0 1px #dddde2;\n        width: 100px;\n        padding: 6px;\n        border: 0.5px solid rgb(0 0 0 / 5%);\n        border-radius: 4px;\n      }\n    }\n    .info {\n      color: #31313c;\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      align-items: center;\n      gap: 0.5rem;\n      .skeleton-container {\n        width: 100%;\n        span {\n          margin-bottom: 0.5rem;\n          height: 16px;\n          width: 100%;\n          max-width: 400px;\n        }\n      }\n      .name {\n        font-size: 2.1rem;\n        line-height: 40px;\n      }\n      .overview {\n        display: flex;\n        gap: 0.5rem;\n        align-items: center;\n        .average {\n          font-weight: 700;\n          font-size: 1.2rem;\n        }\n        .number {\n          color: #21b1ff;\n          font-weight: 500;\n        }\n        .stars {\n          display: flex;\n          gap: 0.1rem;\n          align-items: center;\n          svg {\n            color: rgb(242, 199, 26);\n          }\n        }\n      }\n\n      .new {\n        display: flex;\n        align-items: center;\n        gap: 1.5rem;\n        svg.heart {\n          font-size: 1.5rem;\n          color: #26b79a;\n          cursor: pointer;\n        }\n      }\n\n      .write-review {\n        display: flex;\n        align-items: center;\n        font-size: 1rem;\n        font-weight: 600;\n        color: #116bf2;\n        svg {\n          margin-right: 0.5rem;\n          font-size: 1.5rem;\n        }\n      }\n      .vendor {\n        margin-top: 0.75rem;\n        width: 100%;\n        padding: 0.75rem;\n        background-color: #e8ebf7;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        gap: 0.2rem;\n        border-radius: 4px;\n        a {\n          color: #116bf2;\n          :hover {\n            text-decoration: underline;\n          }\n        }\n      }\n    }\n  }\n\n  .bottom {\n    margin-top: 1.5rem;\n    & > div {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n\n  @media (max-width: 475px) {\n    .top {\n      .avatar {\n        margin-bottom: 1rem;\n      }\n      .info {\n        .name {\n          font-size: 1.5rem;\n          line-height: 28px;\n        }\n        .vendor {\n          font-size: 14px;\n        }\n      }\n    }\n  }\n\n  @media (min-width: 780px) {\n    .top {\n      flex-direction: row;\n      align-items: flex-start;\n      gap: 1rem;\n      .avatar {\n        img {\n          padding: 10px;\n          width: 120px;\n        }\n      }\n      .info {\n        display: block;\n        .name,\n        .overview {\n          margin-bottom: 0.25rem;\n        }\n        .vendor {\n          display: block;\n          padding: 0;\n          background-color: transparent;\n          a {\n            margin-left: 0.25rem;\n          }\n        }\n      }\n    }\n    .bottom {\n      & > div {\n        align-items: flex-start;\n      }\n    }\n  }\n\n  @media (min-width: 1024px) {\n    padding: 2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;