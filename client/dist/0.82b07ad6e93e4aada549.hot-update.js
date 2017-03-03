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
    this.newBot = null;
    // ValidationRules
    //   .ensure(m => m.name).displayName('Name').required()
    //   .ensure(m=> m.url).displayName('Url').required()
    //   .on(this.newBot);
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

    return this.controller.validate().then(function (v) {
      if (v.length > 0) _this3.events.publish(new __WEBPACK_IMPORTED_MODULE_2__events_notification__["Danger"]('Oh noes'));
    });
  };

  return TeamDetail;
}()) || _class);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MmIwN2FkNmU5M2U0YWFkYTU0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RlYW1zL2RldGFpbC5qcz83ZTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgTmV3SW5zdGFuY2UgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgVGVhbVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvdGVhbSc7XG5pbXBvcnQgeyBEYW5nZXIgfSBmcm9tICcuLi8uLi9ldmVudHMvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlciwgVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcblxuZnVuY3Rpb24gcGFyc2VFcnJvclJlc3BvbnNlKHJlc3ApIHtcbiAgY29uc3QgZGF0YSA9IE9iamVjdC5jcmVhdGUocmVzcC5jb250ZW50KTtcblxuICBpZiAocmVzcC5zdGF0dXNDb2RlID09PSA0MDApIHtcbiAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhkYXRhLmZpZWxkcyk7XG4gICAgZGF0YS5ldmVudCA9IG5ldyBEYW5nZXIoYCR7ZGF0YS5tZXNzYWdlfTpgLCBmaWVsZHMuam9pbignLCcpKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhLmV2ZW50ID0gbmV3IERhbmdlcihkYXRhLm1lc3NhZ2UsICcnKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5AaW5qZWN0KFRlYW1TZXJ2aWNlLCBFdmVudEFnZ3JlZ2F0b3IsIE5ld0luc3RhbmNlLm9mKFZhbGlkYXRpb25Db250cm9sbGVyKSlcbmV4cG9ydCBjbGFzcyBUZWFtRGV0YWlsIHtcbiAgY29uc3RydWN0b3IodGVhbVNlcnZpY2UsIGV2ZW50cywgY29udHJvbGxlcikge1xuICAgIHRoaXMuc2VydmljZSA9IHRlYW1TZXJ2aWNlO1xuICAgIHRoaXMudGVhbSA9IG51bGw7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5uZXdCb3QgPSBudWxsO1xuICAgIC8vIFZhbGlkYXRpb25SdWxlc1xuICAgIC8vICAgLmVuc3VyZShtID0+IG0ubmFtZSkuZGlzcGxheU5hbWUoJ05hbWUnKS5yZXF1aXJlZCgpXG4gICAgLy8gICAuZW5zdXJlKG09PiBtLnVybCkuZGlzcGxheU5hbWUoJ1VybCcpLnJlcXVpcmVkKClcbiAgICAvLyAgIC5vbih0aGlzLm5ld0JvdCk7XG4gIH1cblxuICBhY3RpdmF0ZShwYXJhbXMpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlOyAvLyB0b2RvOiB0aGVyZSdzIHByb2JhYmx5IGEgY2xlYW5lciB3YXkgdG8gZG8gdGhpcyB2aWEgcHViL3N1YlxuICAgIHRoaXMuc2VydmljZS5kZXRhaWwocGFyYW1zLmlkKS50aGVuKHQgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRlYW0gPSB0LmNvbnRlbnQ7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVCb3QoKSB7XG4gICAgdGhpcy5zYXZpbmcgPSB0cnVlO1xuICAgIHRoaXMuc2VydmljZS5hZGRCb3QodGhpcy50ZWFtLl9pZCwgdGhpcy5uZXdCb3QpLnRoZW4oYiA9PiB7XG4gICAgICB0aGlzLnNob3dGb3JtID0gZmFsc2U7XG4gICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50ZWFtLmJvdHMucHVzaChiLmNvbnRlbnQpO1xuICAgICAgdGhpcy5uZXdCb3QgPSBudWxsO1xuICAgIH0pLmNhdGNoKHJlc3AgPT4ge1xuICAgICAgY29uc3QgZXJyb3JSZXNwb25zZSA9IHBhcnNlRXJyb3JSZXNwb25zZShyZXNwKTsgXG4gICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKGVycm9yUmVzcG9uc2UuZXZlbnQpO1xuICAgICAgdGhpcy52YWxpZGF0ZShlcnJvclJlc3BvbnNlLmZpZWxkcyk7XG5cbiAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XG5cbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XG4gICAgdGhpcy5uZXdCb3QgPSBudWxsO1xuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKCkudGhlbih2ID0+IHtcbiAgICAgIGlmICh2Lmxlbmd0aCA+IDApIHRoaXMuZXZlbnRzLnB1Ymxpc2gobmV3IERhbmdlcignT2ggbm9lcycpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy90ZWFtcy9kZXRhaWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFzQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXRDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7QUE4Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9