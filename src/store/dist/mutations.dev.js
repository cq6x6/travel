"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  changeCity: function changeCity(state, city) {
    state.city = city;

    try {
      localStorage.city = city;
    } catch (e) {}
  }
};
exports["default"] = _default;