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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashNotice", function() { return FlashNotice; });
var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var FlashNotice = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_0_aurelia_event_aggregator__["EventAggregator"]), _dec(_class = function () {
  function FlashNotice(events) {
    var _this = this;

    _classCallCheck(this, FlashNotice);

    this.clear();

    events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["LoggedIn"], function (msg) {
      _this.flash('success', msg.user.displayName, 'is now logged in');
    });

    events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["LoggedOut"], function (msg) {
      _this.flash('info', msg.user.displayName, 'is now logged out');
    });

    events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["AuthenticationError"], function (msg) {
      _this.flash('danger', 'Login Failed', msg.response.content);
    });
  }

  FlashNotice.prototype.flash = function flash(severity, message, detail) {
    this.show = true;
    this.severity = severity;
    this.message = message;
    this.detail = detail;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMzlhOWY3OGU4ZTYzMDUzMjFiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9mbGFzaC1ub3RpY2UuanM/NDQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgTG9nZ2VkSW4sIExvZ2dlZE91dCwgQXV0aGVudGljYXRpb25FcnJvciB9IGZyb20gJy4vZXZlbnRzL2F1dGhlbnRpY2F0aW9uJztcblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXG5leHBvcnQgY2xhc3MgRmxhc2hOb3RpY2Uge1xuICBjb25zdHJ1Y3RvcihldmVudHMpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgXG4gICAgZXZlbnRzLnN1YnNjcmliZShMb2dnZWRJbiwgbXNnID0+IHtcbiAgICAgIHRoaXMuZmxhc2goJ3N1Y2Nlc3MnLCBtc2cudXNlci5kaXNwbGF5TmFtZSwgJ2lzIG5vdyBsb2dnZWQgaW4nKTtcbiAgICB9KTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoTG9nZ2VkT3V0LCBtc2cgPT4ge1xuICAgICAgdGhpcy5mbGFzaCgnaW5mbycsIG1zZy51c2VyLmRpc3BsYXlOYW1lLCAnaXMgbm93IGxvZ2dlZCBvdXQnKTtcbiAgICB9KTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoQXV0aGVudGljYXRpb25FcnJvciwgbXNnID0+IHtcbiAgICAgIHRoaXMuZmxhc2goJ2RhbmdlcicsICdMb2dpbiBGYWlsZWQnLCBtc2cucmVzcG9uc2UuY29udGVudCk7XG4gICAgfSk7XG4gIH1cblxuICBmbGFzaChzZXZlcml0eSwgbWVzc2FnZSwgZGV0YWlsKSB7XG4gICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB0aGlzLnNldmVyaXR5ID0gc2V2ZXJpdHk7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmRldGFpbCA9IGRldGFpbDtcbiAgfSBcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICB0aGlzLnNldmVyaXR5ID0gbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgIHRoaXMuZGV0YWlsID0gbnVsbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mbGFzaC1ub3RpY2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBQUE7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==