"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _fastclick = _interopRequireDefault(require("fastclick"));

var _vueAwesomeSwiper = _interopRequireDefault(require("vue-awesome-swiper"));

require("babel-polyfill");

var _store = _interopRequireDefault(require("./store"));

require("styles/reset.css");

require("styles/border.css");

require("styles/iconfont.css");

require("swiper/dist/css/swiper.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 解决白屏问题
// 解决1像素边框
_vue["default"].config.productionTip = false;

_fastclick["default"].attach(document.body); // 解决click延迟3秒


_vue["default"].use(_vueAwesomeSwiper["default"]);
/* eslint-disable no-new */


new _vue["default"]({
  el: '#app',
  router: _router["default"],
  store: _store["default"],
  components: {
    App: _App["default"]
  },
  template: '<App/>'
});