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







var TeamDetail = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_1__services_team__["default"], __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__["EventAggregator"]), _dec(_class = (_class2 = function () {
  function TeamDetail(teamService, events) {
    var _this = this;

    _classCallCheck(this, TeamDetail);

    _initDefineProp(this, 'teamId', _descriptor, this);

    this.service = teamService;
    this.team = null;
    this.clear();
    this.events = events;
    this.newBot = null;
    this.createBot = false;
    this.events.subscribe(__WEBPACK_IMPORTED_MODULE_4__events_bots__["BotCleared"], function (b) {
      return _this.createBot = false;
    });
    this.events.subscribe(__WEBPACK_IMPORTED_MODULE_4__events_bots__["BotSaved"], function (b) {
      _this.createBot = false;
      _this.team.bots.push(b.bot);
      _this.clear();
      _this.events.publish(new __WEBPACK_IMPORTED_MODULE_2__events_notification__["Success"]('Saved:', b.bot.name, 1000));
    });
  }

  TeamDetail.prototype.activate = function activate(params) {
    var _this2 = this;

    this.loading = true; // todo: there's probably a cleaner way to do this via pub/sub
    this.teamId = params.id;
    this.service.detail(params.id).then(function (t) {
      _this2.loading = false;
      _this2.team = t.content;
    }).catch(function (e) {
      _this2.events.publish(new __WEBPACK_IMPORTED_MODULE_2__events_notification__["Danger"](data.message));
      _this2.loading = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MmZkMDg2OWVlZTJjMDI2NGFlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RlYW1zL2RldGFpbC5qcz83ZTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgTmV3SW5zdGFuY2UsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IFRlYW1TZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlYW0nO1xuaW1wb3J0IHsgU3VjY2VzcywgRGFuZ2VyIH0gZnJvbSAnLi4vLi4vZXZlbnRzL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgQm90Q2xlYXJlZCwgQm90U2F2ZWQgfSBmcm9tICcuLi8uLi9ldmVudHMvYm90cyc7XG5cbkBpbmplY3QoVGVhbVNlcnZpY2UsIEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBUZWFtRGV0YWlsIHtcbiAgQGJpbmRhYmxlIHRlYW1JZDtcblxuICBjb25zdHJ1Y3Rvcih0ZWFtU2VydmljZSwgZXZlbnRzKSB7XG4gICAgdGhpcy5zZXJ2aWNlID0gdGVhbVNlcnZpY2U7XG4gICAgdGhpcy50ZWFtID0gbnVsbDtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5uZXdCb3QgPSBudWxsO1xuICAgIHRoaXMuY3JlYXRlQm90ID0gZmFsc2U7XG4gICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKEJvdENsZWFyZWQsIGIgPT4gdGhpcy5jcmVhdGVCb3QgPSBmYWxzZSk7XG4gICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKEJvdFNhdmVkLCBiID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlQm90ID0gZmFsc2U7XG4gICAgICB0aGlzLnRlYW0uYm90cy5wdXNoKGIuYm90KTtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2gobmV3IFN1Y2Nlc3MoJ1NhdmVkOicsIGIuYm90Lm5hbWUsIDEwMDApKTtcbiAgICB9KVxuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTsgLy8gdG9kbzogdGhlcmUncyBwcm9iYWJseSBhIGNsZWFuZXIgd2F5IHRvIGRvIHRoaXMgdmlhIHB1Yi9zdWJcbiAgICB0aGlzLnRlYW1JZCA9IHBhcmFtcy5pZDtcbiAgICB0aGlzLnNlcnZpY2UuZGV0YWlsKHBhcmFtcy5pZCkudGhlbih0ID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy50ZWFtID0gdC5jb250ZW50O1xuICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgdGhpcy5ldmVudHMucHVibGlzaChuZXcgRGFuZ2VyKGRhdGEubWVzc2FnZSkpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm5ld0JvdCA9IG51bGw7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdGVhbXMvZGV0YWlsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9