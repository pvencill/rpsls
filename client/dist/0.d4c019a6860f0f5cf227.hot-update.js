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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_validation__ = __webpack_require__("aurelia-validation");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aurelia_validation__);
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

var TeamDetail = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_1__services_team__["default"], __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__["EventAggregator"], __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["NewInstance"].of(__WEBPACK_IMPORTED_MODULE_4_aurelia_validation__["ValidationController"])), _dec(_class = function () {
  function TeamDetail(teamService, events, controller) {
    _classCallCheck(this, TeamDetail);

    this.service = teamService;
    this.team = null;
    this.clear();
    this.events = events;
    this.controller = controller;
    this.newBot = {};
    __WEBPACK_IMPORTED_MODULE_4_aurelia_validation__["ValidationRules"].ensure(function (m) {
      return m.name;
    }).displayName('Name').required().ensure(function (m) {
      return m.url;
    }).displayName('Url').required().on(this.newBot);
  }

  TeamDetail.prototype.activate = function activate(params) {
    var _this = this;

    this.loading = true; // todo: there's probably a cleaner way to do this via pub/sub
    this.service.detail(params.id).then(function (t) {
      _this.loading = false;
      _this.team = t.content;
    });
  };

  TeamDetail.prototype.createBot = function createBot() {
    var _this2 = this;

    this.saving = true;
    this.service.addBot(this.team._id, this.newBot).then(function (b) {
      _this2.showForm = false;
      _this2.saving = false;
      _this2.team.bots.push(b.content);
      _this2.newBot = null;
    }).catch(function (resp) {
      var errorResponse = parseErrorResponse(resp);
      _this2.events.publish(errorResponse.event);
      _this2.validate(errorResponse.fields);

      _this2.saving = false;
    });
  };

  TeamDetail.prototype.clear = function clear() {
    this.loading = false;
    this.saving = false;
    this.newBot = null;
    this.errors = {};
  };

  TeamDetail.prototype.validate = function validate() {
    var _this3 = this;

    console.log('clicked Validate');
    return this.controller.validate().then(function (v) {
      console.log(v);
      if (v.length > 0) _this3.events.publish(new __WEBPACK_IMPORTED_MODULE_2__events_notification__["Danger"]('Oh noes'));
    });
  };

  return TeamDetail;
}()) || _class);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNGMwMTlhNjg2MGYwZjVjZjIyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RlYW1zL2RldGFpbC5qcz83ZTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgTmV3SW5zdGFuY2UgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgVGVhbVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvdGVhbSc7XG5pbXBvcnQgeyBEYW5nZXIgfSBmcm9tICcuLi8uLi9ldmVudHMvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlciwgVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcblxuZnVuY3Rpb24gcGFyc2VFcnJvclJlc3BvbnNlKHJlc3ApIHtcbiAgY29uc3QgZGF0YSA9IE9iamVjdC5jcmVhdGUocmVzcC5jb250ZW50KTtcblxuICBpZiAocmVzcC5zdGF0dXNDb2RlID09PSA0MDApIHtcbiAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhkYXRhLmZpZWxkcyk7XG4gICAgZGF0YS5ldmVudCA9IG5ldyBEYW5nZXIoYCR7ZGF0YS5tZXNzYWdlfTpgLCBmaWVsZHMuam9pbignLCcpKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhLmV2ZW50ID0gbmV3IERhbmdlcihkYXRhLm1lc3NhZ2UsICcnKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5AaW5qZWN0KFRlYW1TZXJ2aWNlLCBFdmVudEFnZ3JlZ2F0b3IsIE5ld0luc3RhbmNlLm9mKFZhbGlkYXRpb25Db250cm9sbGVyKSlcbmV4cG9ydCBjbGFzcyBUZWFtRGV0YWlsIHtcbiAgY29uc3RydWN0b3IodGVhbVNlcnZpY2UsIGV2ZW50cywgY29udHJvbGxlcikge1xuICAgIHRoaXMuc2VydmljZSA9IHRlYW1TZXJ2aWNlO1xuICAgIHRoaXMudGVhbSA9IG51bGw7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5uZXdCb3QgPSB7fTtcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmUobSA9PiBtLm5hbWUpLmRpc3BsYXlOYW1lKCdOYW1lJykucmVxdWlyZWQoKVxuICAgICAgLmVuc3VyZShtPT4gbS51cmwpLmRpc3BsYXlOYW1lKCdVcmwnKS5yZXF1aXJlZCgpXG4gICAgICAub24odGhpcy5uZXdCb3QpO1xuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTsgLy8gdG9kbzogdGhlcmUncyBwcm9iYWJseSBhIGNsZWFuZXIgd2F5IHRvIGRvIHRoaXMgdmlhIHB1Yi9zdWJcbiAgICB0aGlzLnNlcnZpY2UuZGV0YWlsKHBhcmFtcy5pZCkudGhlbih0ID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50ZWFtID0gdC5jb250ZW50O1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQm90KCkge1xuICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNlcnZpY2UuYWRkQm90KHRoaXMudGVhbS5faWQsIHRoaXMubmV3Qm90KS50aGVuKGIgPT4ge1xuICAgICAgdGhpcy5zaG93Rm9ybSA9IGZhbHNlO1xuICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudGVhbS5ib3RzLnB1c2goYi5jb250ZW50KTtcbiAgICAgIHRoaXMubmV3Qm90ID0gbnVsbDtcbiAgICB9KS5jYXRjaChyZXNwID0+IHtcbiAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2UgPSBwYXJzZUVycm9yUmVzcG9uc2UocmVzcCk7IFxuICAgICAgdGhpcy5ldmVudHMucHVibGlzaChlcnJvclJlc3BvbnNlLmV2ZW50KTtcbiAgICAgIHRoaXMudmFsaWRhdGUoZXJyb3JSZXNwb25zZS5maWVsZHMpO1xuXG4gICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xuXG4gICAgfSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xuICAgIHRoaXMubmV3Qm90ID0gbnVsbDtcbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQgVmFsaWRhdGUnKTtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKCkudGhlbih2ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHYpO1xuICAgICAgaWYgKHYubGVuZ3RoID4gMCkgdGhpcy5ldmVudHMucHVibGlzaChuZXcgRGFuZ2VyKCdPaCBub2VzJykpO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3RlYW1zL2RldGFpbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQWJBO0FBY0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBc0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF0Q0E7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0NBO0FBOENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQUFBOzs7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=