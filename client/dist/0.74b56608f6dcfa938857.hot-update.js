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
var _dec, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}







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

var TeamDetail = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_1__services_team__["default"], __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__["EventAggregator"]), _dec(_class = (_class2 = function () {
  function TeamDetail(teamService, events) {
    var _this = this;

    _classCallCheck(this, TeamDetail);

    _initDefineProp(this, 'teamId', _descriptor, this);

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
    this.teamId = params.id;
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
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'teamId', [__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["bindable"]], {
  enumerable: true,
  initializer: null
})), _class2)) || _class);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NGI1NjYwOGY2ZGNmYTkzODg1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RlYW1zL2RldGFpbC5qcz83ZTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgTmV3SW5zdGFuY2UsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IFRlYW1TZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlYW0nO1xuaW1wb3J0IHsgRGFuZ2VyIH0gZnJvbSAnLi4vLi4vZXZlbnRzL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgQm90Q2xlYXJlZCwgQm90U2F2ZWQgfSBmcm9tICcuLi8uLi9ldmVudHMvYm90cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRXJyb3JSZXNwb25zZShyZXNwKSB7XG4gIGNvbnN0IGRhdGEgPSBPYmplY3QuY3JlYXRlKHJlc3AuY29udGVudCk7XG5cbiAgaWYgKHJlc3Auc3RhdHVzQ29kZSA9PT0gNDAwKSB7XG4gICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMoZGF0YS5maWVsZHMpO1xuICAgIGRhdGEuZXZlbnQgPSBuZXcgRGFuZ2VyKGAke2RhdGEubWVzc2FnZX06YCwgZmllbGRzLmpvaW4oJywnKSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YS5ldmVudCA9IG5ldyBEYW5nZXIoZGF0YS5tZXNzYWdlLCAnJyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuQGluamVjdChUZWFtU2VydmljZSwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIFRlYW1EZXRhaWwge1xuICBAYmluZGFibGUgdGVhbUlkO1xuXG4gIGNvbnN0cnVjdG9yKHRlYW1TZXJ2aWNlLCBldmVudHMpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSB0ZWFtU2VydmljZTtcbiAgICB0aGlzLnRlYW0gPSBudWxsO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoQm90Q2xlYXJlZCwgYyA9PiB0aGlzLm5ld0JvdCA9IG51bGwpO1xuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTsgLy8gdG9kbzogdGhlcmUncyBwcm9iYWJseSBhIGNsZWFuZXIgd2F5IHRvIGRvIHRoaXMgdmlhIHB1Yi9zdWJcbiAgICB0aGlzLnRlYW1JZCA9IHBhcmFtcy5pZDtcbiAgICB0aGlzLnNlcnZpY2UuZGV0YWlsKHBhcmFtcy5pZCkudGhlbih0ID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50ZWFtID0gdC5jb250ZW50O1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQm90KCkge1xuICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNlcnZpY2UuYWRkQm90KHRoaXMudGVhbS5faWQsIHRoaXMubmV3Qm90KS50aGVuKGIgPT4ge1xuICAgICAgdGhpcy5zaG93Rm9ybSA9IGZhbHNlO1xuICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudGVhbS5ib3RzLnB1c2goYi5jb250ZW50KTtcbiAgICAgIHRoaXMubmV3Qm90ID0gbnVsbDtcbiAgICB9KS5jYXRjaChyZXNwID0+IHtcbiAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2UgPSBwYXJzZUVycm9yUmVzcG9uc2UocmVzcCk7IFxuICAgICAgdGhpcy5ldmVudHMucHVibGlzaChlcnJvclJlc3BvbnNlLmV2ZW50KTtcbiAgICAgIHRoaXMudmFsaWRhdGUoZXJyb3JSZXNwb25zZS5maWVsZHMpO1xuXG4gICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xuXG4gICAgfSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5ld0JvdCA9IG51bGw7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdGVhbXMvZGV0YWlsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVZBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFvQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXBDQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==