webpackHotUpdate(0,{

/***/ "components/teams/detail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team__ = __webpack_require__("services/team.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_notification__ = __webpack_require__("events/notification.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_bots__ = __webpack_require__("events/bots.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetail", function() { return TeamDetail; });
var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







function parseErrorResponse(resp) {
  var data = Object.create(resp.content);

  if (resp.statusCode === 400) {
    var fields = Object.keys(data.fields);
    data.event = new __WEBPACK_IMPORTED_MODULE_2__events_notification__["Danger"](data.message + ':', fields.join(','));
  } else {
    data.event = new __WEBPACK_IMPORTED_MODULE_2__events_notification__["Danger"](data.message, '');
  }

  return data;
}

var TeamDetail = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_1__services_team__["default"], __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__["EventAggregator"]), _dec(_class = function () {
  function TeamDetail(teamService, events) {
    var _this = this;

    _classCallCheck(this, TeamDetail);

    this.service = teamService;
    this.team = null;
    this.clear();
    this.events = events;
    this.events.subscribe(__WEBPACK_IMPORTED_MODULE_4__events_bots__["BotCleared"], function (c) {
      return _this.newBot = null;
    });
  }

  TeamDetail.prototype.activate = function activate(params) {
    var _this2 = this;

    this.loading = true; // todo: there's probably a cleaner way to do this via pub/sub
    this.service.detail(params.id).then(function (t) {
      _this2.loading = false;
      _this2.team = t.content;
    });
  };

  TeamDetail.prototype.createBot = function createBot() {
    var _this3 = this;

    this.saving = true;
    this.service.addBot(this.team._id, this.newBot).then(function (b) {
      _this3.showForm = false;
      _this3.saving = false;
      _this3.team.bots.push(b.content);
      _this3.newBot = null;
    }).catch(function (resp) {
      var errorResponse = parseErrorResponse(resp);
      _this3.events.publish(errorResponse.event);
      _this3.validate(errorResponse.fields);

      _this3.saving = false;
    });
  };

  TeamDetail.prototype.clear = function clear() {
    this.loading = false;
    this.newBot = null;
  };

  return TeamDetail;
}()) || _class);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMDIyODQ2ZmY5NzVhNjhjNGIyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RlYW1zL2RldGFpbC5qcz83ZTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgTmV3SW5zdGFuY2UgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgVGVhbVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvdGVhbSc7XG5pbXBvcnQgeyBEYW5nZXIgfSBmcm9tICcuLi8uLi9ldmVudHMvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBCb3RDbGVhcmVkLCBCb3RTYXZlZCB9IGZyb20gJy4uLy4uL2V2ZW50cy9ib3RzJztcblxuZnVuY3Rpb24gcGFyc2VFcnJvclJlc3BvbnNlKHJlc3ApIHtcbiAgY29uc3QgZGF0YSA9IE9iamVjdC5jcmVhdGUocmVzcC5jb250ZW50KTtcblxuICBpZiAocmVzcC5zdGF0dXNDb2RlID09PSA0MDApIHtcbiAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhkYXRhLmZpZWxkcyk7XG4gICAgZGF0YS5ldmVudCA9IG5ldyBEYW5nZXIoYCR7ZGF0YS5tZXNzYWdlfTpgLCBmaWVsZHMuam9pbignLCcpKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhLmV2ZW50ID0gbmV3IERhbmdlcihkYXRhLm1lc3NhZ2UsICcnKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5AaW5qZWN0KFRlYW1TZXJ2aWNlLCBFdmVudEFnZ3JlZ2F0b3IpXG5leHBvcnQgY2xhc3MgVGVhbURldGFpbCB7XG4gIGNvbnN0cnVjdG9yKHRlYW1TZXJ2aWNlLCBldmVudHMpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSB0ZWFtU2VydmljZTtcbiAgICB0aGlzLnRlYW0gPSBudWxsO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoQm90Q2xlYXJlZCwgYyA9PiB0aGlzLm5ld0JvdCA9IG51bGwpO1xuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTsgLy8gdG9kbzogdGhlcmUncyBwcm9iYWJseSBhIGNsZWFuZXIgd2F5IHRvIGRvIHRoaXMgdmlhIHB1Yi9zdWJcbiAgICB0aGlzLnNlcnZpY2UuZGV0YWlsKHBhcmFtcy5pZCkudGhlbih0ID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50ZWFtID0gdC5jb250ZW50O1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQm90KCkge1xuICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNlcnZpY2UuYWRkQm90KHRoaXMudGVhbS5faWQsIHRoaXMubmV3Qm90KS50aGVuKGIgPT4ge1xuICAgICAgdGhpcy5zaG93Rm9ybSA9IGZhbHNlO1xuICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudGVhbS5ib3RzLnB1c2goYi5jb250ZW50KTtcbiAgICAgIHRoaXMubmV3Qm90ID0gbnVsbDtcbiAgICB9KS5jYXRjaChyZXNwID0+IHtcbiAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2UgPSBwYXJzZUVycm9yUmVzcG9uc2UocmVzcCk7IFxuICAgICAgdGhpcy5ldmVudHMucHVibGlzaChlcnJvclJlc3BvbnNlLmV2ZW50KTtcbiAgICAgIHRoaXMudmFsaWRhdGUoZXJyb3JSZXNwb25zZS5maWVsZHMpO1xuXG4gICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xuXG4gICAgfSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5ld0JvdCA9IG51bGw7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdGVhbXMvZGV0YWlsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBakNBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9