"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var defaultCity = '上海';

try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {}

var _default = {
  city: defaultCity
};
exports["default"] = _default;