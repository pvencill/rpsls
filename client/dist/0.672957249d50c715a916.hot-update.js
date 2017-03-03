webpackHotUpdate(0,{

/***/ "events/notification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return Success; });
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

var Success = function (_Message) {
  _inherits(Success, _Message);

  function Success() {
    _classCallCheck(this, Success);

    return _possibleConstructorReturn(this, _Message.apply(this, arguments));
  }

  return Success;
}(Message);

var Info = function (_Message2) {
  _inherits(Info, _Message2);

  function Info() {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, _Message2.apply(this, arguments));
  }

  return Info;
}(Message);

var Warning = function (_Message3) {
  _inherits(Warning, _Message3);

  function Warning() {
    _classCallCheck(this, Warning);

    return _possibleConstructorReturn(this, _Message3.apply(this, arguments));
  }

  return Warning;
}(Message);

var Danger = function (_Message4) {
  _inherits(Danger, _Message4);

  function Danger() {
    _classCallCheck(this, Danger);

    return _possibleConstructorReturn(this, _Message4.apply(this, arguments));
  }

  return Danger;
}(Message);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NzI5NTcyNDlkNTBjNzE1YTkxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9ldmVudHMvbm90aWZpY2F0aW9uLmpzPzNhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBkZXRhaWwsIGR1cmF0aW9uKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmRldGFpbCA9IGRldGFpbDtcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1Y2Nlc3MgZXh0ZW5kcyBNZXNzYWdlIHt9XG5cbmV4cG9ydCBjbGFzcyBJbmZvIGV4dGVuZHMgTWVzc2FnZSB7XG59XG5cbmV4cG9ydCBjbGFzcyBXYXJuaW5nIGV4dGVuZHMgTWVzc2FnZSB7XG59XG5cbmV4cG9ydCBjbGFzcyBEYW5nZXIgZXh0ZW5kcyBNZXNzYWdlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZXZlbnRzL25vdGlmaWNhdGlvbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9