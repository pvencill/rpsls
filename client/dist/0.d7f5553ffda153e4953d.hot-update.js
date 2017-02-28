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





var FlashNotice = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_0_aurelia_event_aggregator__["EventAggregator"]), _dec(_class = function FlashNotice(events) {
  var _this = this;

  _classCallCheck(this, FlashNotice);

  this.message = null;
  this.detail = null;
  this.severity = null;
  this.show = false;

  events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["LoggedIn"], function (msg) {
    console.log('message recieved');
    _this.show = true;
    _this.severity = 'success';
    _this.message = msg.user.displayName;
    _this.detail = 'is now logged in';
  });

  events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["LoggedOut"], function (msg) {
    _this.show = true;
    _this.severity = 'info';
    _this.message = msg.user.displayName;
    _this.detail = 'is now logged out';
  });

  events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["AuthenticationError"], function (msg) {
    _this.show = true;
    _this.severity = 'danger';
    _this.message = 'Login Failed';
    _this.detail = msg.response.message;
  });
}) || _class);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kN2Y1NTUzZmZkYTE1M2U0OTUzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9mbGFzaC1ub3RpY2UuanM/NDQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgTG9nZ2VkSW4sIExvZ2dlZE91dCwgQXV0aGVudGljYXRpb25FcnJvciB9IGZyb20gJy4vZXZlbnRzL2F1dGhlbnRpY2F0aW9uJztcblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXG5leHBvcnQgY2xhc3MgRmxhc2hOb3RpY2Uge1xuICBjb25zdHJ1Y3RvcihldmVudHMpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgIHRoaXMuZGV0YWlsID0gbnVsbDtcbiAgICB0aGlzLnNldmVyaXR5ID0gbnVsbDtcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICBcbiAgICBldmVudHMuc3Vic2NyaWJlKExvZ2dlZEluLCBtc2cgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UgcmVjaWV2ZWQnKTtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB0aGlzLnNldmVyaXR5ID0gJ3N1Y2Nlc3MnO1xuICAgICAgdGhpcy5tZXNzYWdlID0gbXNnLnVzZXIuZGlzcGxheU5hbWU7XG4gICAgICB0aGlzLmRldGFpbCA9ICdpcyBub3cgbG9nZ2VkIGluJztcbiAgICB9KTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoTG9nZ2VkT3V0LCBtc2cgPT4ge1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V2ZXJpdHkgPSAnaW5mbyc7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtc2cudXNlci5kaXNwbGF5TmFtZTtcbiAgICAgIHRoaXMuZGV0YWlsID0gJ2lzIG5vdyBsb2dnZWQgb3V0JztcbiAgICB9KTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoQXV0aGVudGljYXRpb25FcnJvciwgbXNnID0+IHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB0aGlzLnNldmVyaXR5ID0gJ2Rhbmdlcic7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSAnTG9naW4gRmFpbGVkJztcbiAgICAgIHRoaXMuZGV0YWlsID0gbXNnLnJlc3BvbnNlLm1lc3NhZ2VcbiAgICB9KTtcbiAgfSBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmxhc2gtbm90aWNlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==