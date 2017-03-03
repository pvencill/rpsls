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
    this.newBot = null;
    this.subscribe(__WEBPACK_IMPORTED_MODULE_4__events_bots__["BotCleared"], function (b) {
      return _this.showForm = false;
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

  // createBot() {
  //   this.saving = true;
  //   this.service.addBot(this.team._id, this.newBot).then(b => {
  //     this.showForm = false;
  //     this.saving = false;
  //     this.team.bots.push(b.content);
  //     this.newBot = null;
  //   }).catch(resp => {
  //     const errorResponse = parseErrorResponse(resp); 
  //     this.events.publish(errorResponse.event);
  //     this.validate(errorResponse.fields);

  //     this.saving = false;

  //   });
  // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMWNhOTE4MzgwMTNiZDc2MzhjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3RlYW1zL2RldGFpbC5qcz83ZTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgTmV3SW5zdGFuY2UsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IFRlYW1TZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlYW0nO1xuaW1wb3J0IHsgRGFuZ2VyIH0gZnJvbSAnLi4vLi4vZXZlbnRzL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgQm90Q2xlYXJlZCwgQm90U2F2ZWQgfSBmcm9tICcuLi8uLi9ldmVudHMvYm90cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRXJyb3JSZXNwb25zZShyZXNwKSB7XG4gIGNvbnN0IGRhdGEgPSBPYmplY3QuY3JlYXRlKHJlc3AuY29udGVudCk7XG5cbiAgaWYgKHJlc3Auc3RhdHVzQ29kZSA9PT0gNDAwKSB7XG4gICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMoZGF0YS5maWVsZHMpO1xuICAgIGRhdGEuZXZlbnQgPSBuZXcgRGFuZ2VyKGAke2RhdGEubWVzc2FnZX06YCwgZmllbGRzLmpvaW4oJywnKSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YS5ldmVudCA9IG5ldyBEYW5nZXIoZGF0YS5tZXNzYWdlLCAnJyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuQGluamVjdChUZWFtU2VydmljZSwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIFRlYW1EZXRhaWwge1xuICBAYmluZGFibGUgdGVhbUlkO1xuXG4gIGNvbnN0cnVjdG9yKHRlYW1TZXJ2aWNlLCBldmVudHMpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSB0ZWFtU2VydmljZTtcbiAgICB0aGlzLnRlYW0gPSBudWxsO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLm5ld0JvdCA9IG51bGw7XG4gICAgdGhpcy5zdWJzY3JpYmUoQm90Q2xlYXJlZCwgYiA9PiB0aGlzLnNob3dGb3JtID0gZmFsc2UpXG4gIH1cblxuICBhY3RpdmF0ZShwYXJhbXMpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlOyAvLyB0b2RvOiB0aGVyZSdzIHByb2JhYmx5IGEgY2xlYW5lciB3YXkgdG8gZG8gdGhpcyB2aWEgcHViL3N1YlxuICAgIHRoaXMudGVhbUlkID0gcGFyYW1zLmlkO1xuICAgIHRoaXMuc2VydmljZS5kZXRhaWwocGFyYW1zLmlkKS50aGVuKHQgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRlYW0gPSB0LmNvbnRlbnQ7XG4gICAgfSk7XG4gIH1cblxuICAvLyBjcmVhdGVCb3QoKSB7XG4gIC8vICAgdGhpcy5zYXZpbmcgPSB0cnVlO1xuICAvLyAgIHRoaXMuc2VydmljZS5hZGRCb3QodGhpcy50ZWFtLl9pZCwgdGhpcy5uZXdCb3QpLnRoZW4oYiA9PiB7XG4gIC8vICAgICB0aGlzLnNob3dGb3JtID0gZmFsc2U7XG4gIC8vICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xuICAvLyAgICAgdGhpcy50ZWFtLmJvdHMucHVzaChiLmNvbnRlbnQpO1xuICAvLyAgICAgdGhpcy5uZXdCb3QgPSBudWxsO1xuICAvLyAgIH0pLmNhdGNoKHJlc3AgPT4ge1xuICAvLyAgICAgY29uc3QgZXJyb3JSZXNwb25zZSA9IHBhcnNlRXJyb3JSZXNwb25zZShyZXNwKTsgXG4gIC8vICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKGVycm9yUmVzcG9uc2UuZXZlbnQpO1xuICAvLyAgICAgdGhpcy52YWxpZGF0ZShlcnJvclJlc3BvbnNlLmZpZWxkcyk7XG5cbiAgLy8gICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XG5cbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubmV3Qm90ID0gbnVsbDtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy90ZWFtcy9kZXRhaWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFYQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJDQTtBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQTFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==