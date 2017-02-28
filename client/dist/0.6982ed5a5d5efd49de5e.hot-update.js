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

  this.message = 'Holy Guacamole!';
  this.detail = 'You should really check this out!';
  this.severity = 'success';

  events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["LoggedIn"], function (msg) {
    _this.severity = 'success';
    _this.message = msg.user.displayName;
    _this.detail = 'is now logged in';
  });

  events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["LoggedOut"], function (msg) {
    _this.severity = 'info';
    _this.message = msg.user.displayName;
    _this.detail = 'is now logged out';
  });

  events.subscribe(__WEBPACK_IMPORTED_MODULE_2__events_authentication__["AuthenticationError"], function (msg) {
    _this.severity = 'danger';
    _this.message = msg.response.message;
  });
}) || _class);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42OTgyZWQ1YTVkNWVmZDQ5ZGU1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9mbGFzaC1ub3RpY2UuanM/NDQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgTG9nZ2VkSW4sIExvZ2dlZE91dCwgQXV0aGVudGljYXRpb25FcnJvciB9IGZyb20gJy4vZXZlbnRzL2F1dGhlbnRpY2F0aW9uJztcblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXG5leHBvcnQgY2xhc3MgRmxhc2hOb3RpY2Uge1xuICBjb25zdHJ1Y3RvcihldmVudHMpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnSG9seSBHdWFjYW1vbGUhJztcbiAgICB0aGlzLmRldGFpbCA9ICdZb3Ugc2hvdWxkIHJlYWxseSBjaGVjayB0aGlzIG91dCEnO1xuICAgIHRoaXMuc2V2ZXJpdHkgPSAnc3VjY2Vzcyc7XG4gICAgXG4gICAgZXZlbnRzLnN1YnNjcmliZShMb2dnZWRJbiwgbXNnID0+IHtcbiAgICAgIHRoaXMuc2V2ZXJpdHkgPSAnc3VjY2Vzcyc7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtc2cudXNlci5kaXNwbGF5TmFtZTtcbiAgICAgIHRoaXMuZGV0YWlsID0gJ2lzIG5vdyBsb2dnZWQgaW4nO1xuICAgIH0pO1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZShMb2dnZWRPdXQsIG1zZyA9PiB7XG4gICAgICB0aGlzLnNldmVyaXR5ID0gJ2luZm8nO1xuICAgICAgdGhpcy5tZXNzYWdlID0gbXNnLnVzZXIuZGlzcGxheU5hbWU7XG4gICAgICB0aGlzLmRldGFpbCA9ICdpcyBub3cgbG9nZ2VkIG91dCc7XG4gICAgfSk7XG5cbiAgICBldmVudHMuc3Vic2NyaWJlKEF1dGhlbnRpY2F0aW9uRXJyb3IsIG1zZyA9PiB7XG4gICAgICB0aGlzLnNldmVyaXR5ID0gJ2Rhbmdlcic7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtc2cucmVzcG9uc2UubWVzc2FnZTtcbiAgICB9KTtcbiAgfSBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmxhc2gtbm90aWNlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==