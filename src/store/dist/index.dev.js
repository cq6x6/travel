"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _state = _interopRequireDefault(require("./state"));

var _mutations = _interopRequireDefault(require("./mutations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: _state["default"],
  mutations: _mutations["default"],
  getters: {
    doubleCity: function doubleCity(state) {
      return state.city + ' ' + state.city;
    }
  }
});

exports["default"] = _default;