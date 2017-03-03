webpackHotUpdate(0,{

/***/ "flash-notice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_framework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aurelia_framework__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_authentication__ = __webpack_require__("events/authentication.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_notification__ = __webpack_require__("events/notification.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashNotice", function() { return FlashNotice; });
var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var FlashNotice = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_0_aurelia_event_aggregator__["EventAggregator"]), _dec(_class = function () {
  function FlashNotice(events) {
    var _this = this;

    _classCallCheck(this, FlashNotice);

    this.clear();

    events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["LoggedIn"], function (msg) {
      _this.flash('success', msg.user.displayName, 'is now logged in', 3000);
    });

    events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["LoggedOut"], function (msg) {
      _this.flash('info', msg.user.displayName, 'is now logged out');
    });

    events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["AuthenticationError"], function (msg) {
      _this.flash('danger', 'Login Failed', msg.response.content);
    });

    events.subscribe(__WEBPACK_IMPORTED_MODULE_3__events_notification__["Message"], function (msg) {
      var severity = msg.constructor.name.toLowerCase();
      _this.flash(severity, msg.message, msg.detail, msg.duration);
    });
  }

  FlashNotice.prototype.flash = function flash(severity, message, detail, duration) {
    this.show = true;
    this.severity = severity;
    this.message = message;
    this.detail = detail;
    if (duration) {
      setTimeout(this.clear.bind(this), duration);
    }
  };

  FlashNotice.prototype.clear = function clear() {
    this.show = false;
    this.severity = null;
    this.message = null;
    this.detail = null;
  };

  return FlashNotice;
}()) || _class);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40N2NkNzNhOWM2OTM3ZDkwY2FiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9mbGFzaC1ub3RpY2UuanM/NDQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgTG9nZ2VkSW4sIExvZ2dlZE91dCwgQXV0aGVudGljYXRpb25FcnJvciB9IGZyb20gJy4vZXZlbnRzL2F1dGhlbnRpY2F0aW9uJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL2V2ZW50cy9ub3RpZmljYXRpb24nO1xuXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBGbGFzaE5vdGljZSB7XG4gIGNvbnN0cnVjdG9yKGV2ZW50cykge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICBcbiAgICBldmVudHMuc3Vic2NyaWJlKExvZ2dlZEluLCBtc2cgPT4ge1xuICAgICAgdGhpcy5mbGFzaCgnc3VjY2VzcycsIG1zZy51c2VyLmRpc3BsYXlOYW1lLCAnaXMgbm93IGxvZ2dlZCBpbicsIDMwMDApO1xuICAgIH0pO1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZShMb2dnZWRPdXQsIG1zZyA9PiB7XG4gICAgICB0aGlzLmZsYXNoKCdpbmZvJywgbXNnLnVzZXIuZGlzcGxheU5hbWUsICdpcyBub3cgbG9nZ2VkIG91dCcpO1xuICAgIH0pO1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZShBdXRoZW50aWNhdGlvbkVycm9yLCBtc2cgPT4ge1xuICAgICAgdGhpcy5mbGFzaCgnZGFuZ2VyJywgJ0xvZ2luIEZhaWxlZCcsIG1zZy5yZXNwb25zZS5jb250ZW50KTtcbiAgICB9KTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoTWVzc2FnZSwgbXNnID0+IHtcbiAgICAgIGNvbnN0IHNldmVyaXR5ID0gbXNnLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuZmxhc2goc2V2ZXJpdHksIG1zZy5tZXNzYWdlLCBtc2cuZGV0YWlsLCBtc2cuZHVyYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZmxhc2goc2V2ZXJpdHksIG1lc3NhZ2UsIGRldGFpbCwgZHVyYXRpb24pIHtcbiAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIHRoaXMuc2V2ZXJpdHkgPSBzZXZlcml0eTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsO1xuICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgc2V0VGltZW91dCh0aGlzLmNsZWFyLmJpbmQodGhpcyksIGR1cmF0aW9uKTtcbiAgICB9XG4gIH0gXG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgdGhpcy5zZXZlcml0eSA9IG51bGw7XG4gICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICB0aGlzLmRldGFpbCA9IG51bGw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmxhc2gtbm90aWNlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRDQTtBQUFBOzs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9