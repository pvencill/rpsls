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
    this.newBot = null;
    this.events.subscribe(BotCleared).then(function (c) {
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
    this.saving = false;
    this.newBot = null;
    this.errors = {};
  };

  return TeamDetail;
}()) || _class);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hYmQxYTAxMzZjYWVjMTY1MGJlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RlYW1zL2RldGFpbC5qcz83ZTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgTmV3SW5zdGFuY2UgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgVGVhbVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvdGVhbSc7XG5pbXBvcnQgeyBEYW5nZXIgfSBmcm9tICcuLi8uLi9ldmVudHMvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5cbmZ1bmN0aW9uIHBhcnNlRXJyb3JSZXNwb25zZShyZXNwKSB7XG4gIGNvbnN0IGRhdGEgPSBPYmplY3QuY3JlYXRlKHJlc3AuY29udGVudCk7XG5cbiAgaWYgKHJlc3Auc3RhdHVzQ29kZSA9PT0gNDAwKSB7XG4gICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMoZGF0YS5maWVsZHMpO1xuICAgIGRhdGEuZXZlbnQgPSBuZXcgRGFuZ2VyKGAke2RhdGEubWVzc2FnZX06YCwgZmllbGRzLmpvaW4oJywnKSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YS5ldmVudCA9IG5ldyBEYW5nZXIoZGF0YS5tZXNzYWdlLCAnJyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuQGluamVjdChUZWFtU2VydmljZSwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIFRlYW1EZXRhaWwge1xuICBjb25zdHJ1Y3Rvcih0ZWFtU2VydmljZSwgZXZlbnRzKSB7XG4gICAgdGhpcy5zZXJ2aWNlID0gdGVhbVNlcnZpY2U7XG4gICAgdGhpcy50ZWFtID0gbnVsbDtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5uZXdCb3QgPSBudWxsO1xuICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZShCb3RDbGVhcmVkKS50aGVuKGMgPT4gdGhpcy5uZXdCb3QgPSBudWxsKTtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcykge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7IC8vIHRvZG86IHRoZXJlJ3MgcHJvYmFibHkgYSBjbGVhbmVyIHdheSB0byBkbyB0aGlzIHZpYSBwdWIvc3ViXG4gICAgdGhpcy5zZXJ2aWNlLmRldGFpbChwYXJhbXMuaWQpLnRoZW4odCA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudGVhbSA9IHQuY29udGVudDtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUJvdCgpIHtcbiAgICB0aGlzLnNhdmluZyA9IHRydWU7XG4gICAgdGhpcy5zZXJ2aWNlLmFkZEJvdCh0aGlzLnRlYW0uX2lkLCB0aGlzLm5ld0JvdCkudGhlbihiID0+IHtcbiAgICAgIHRoaXMuc2hvd0Zvcm0gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRlYW0uYm90cy5wdXNoKGIuY29udGVudCk7XG4gICAgICB0aGlzLm5ld0JvdCA9IG51bGw7XG4gICAgfSkuY2F0Y2gocmVzcCA9PiB7XG4gICAgICBjb25zdCBlcnJvclJlc3BvbnNlID0gcGFyc2VFcnJvclJlc3BvbnNlKHJlc3ApOyBcbiAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goZXJyb3JSZXNwb25zZS5ldmVudCk7XG4gICAgICB0aGlzLnZhbGlkYXRlKGVycm9yUmVzcG9uc2UuZmllbGRzKTtcblxuICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcblxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5ld0JvdCA9IG51bGw7XG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy90ZWFtcy9kZXRhaWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVRBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBa0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFsQ0E7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBQUE7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=