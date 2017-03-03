webpackHotUpdate(0,{

/***/ "events/notification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Danger", function() { return Danger; });
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function Message(message, detail, duration) {
  _classCallCheck(this, Message);

  this.message = message;
  this.detail = detail;
  this.duration = duration;
};

var Info = function (_Message) {
  _inherits(Info, _Message);

  function Info() {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, _Message.apply(this, arguments));
  }

  return Info;
}(Message);

var Warning = function (_Message2) {
  _inherits(Warning, _Message2);

  function Warning() {
    _classCallCheck(this, Warning);

    return _possibleConstructorReturn(this, _Message2.apply(this, arguments));
  }

  return Warning;
}(Message);

var Danger = function (_Message3) {
  _inherits(Danger, _Message3);

  function Danger() {
    _classCallCheck(this, Danger);

    return _possibleConstructorReturn(this, _Message3.apply(this, arguments));
  }

  return Danger;
}(Message);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNDY4Y2RmNzBjZDNiOGI5YWFjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9ldmVudHMvbm90aWZpY2F0aW9uLmpzPzNhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBkZXRhaWwsIGR1cmF0aW9uKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmRldGFpbCA9IGRldGFpbDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEluZm8gZXh0ZW5kcyBNZXNzYWdlIHtcbn1cblxuZXhwb3J0IGNsYXNzIFdhcm5pbmcgZXh0ZW5kcyBNZXNzYWdlIHtcbn1cblxuZXhwb3J0IGNsYXNzIERhbmdlciBleHRlbmRzIE1lc3NhZ2Uge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ldmVudHMvbm90aWZpY2F0aW9uLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==