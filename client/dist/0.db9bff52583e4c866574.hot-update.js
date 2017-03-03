webpackHotUpdate(0,{

/***/ "components/bots/bot-form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_validation__ = __webpack_require__("aurelia-validation");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aurelia_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_team__ = __webpack_require__("services/team.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_bots__ = __webpack_require__("events/bots.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_notification__ = __webpack_require__("events/notification.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotFormCustomElement", function() { return BotFormCustomElement; });
var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

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
    data.event = new __WEBPACK_IMPORTED_MODULE_5__events_notification__["Danger"](data.message + ':', fields.join(','));
  } else {
    data.event = new __WEBPACK_IMPORTED_MODULE_5__events_notification__["Danger"](data.message, '');
  }

  return data;
}

var BotFormCustomElement = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_3__services_team__["default"], __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["EventAggregator"], __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["NewInstance"].of(__WEBPACK_IMPORTED_MODULE_2_aurelia_validation__["ValidationController"])), _dec(_class = (_class2 = function () {
  function BotFormCustomElement(teams, events, validator) {
    _classCallCheck(this, BotFormCustomElement);

    _initDefineProp(this, 'bot', _descriptor, this);

    _initDefineProp(this, 'teamId', _descriptor2, this);

    _initDefineProp(this, 'showForm', _descriptor3, this);

    this.teams = teams;
    this.events = events;
    this.validator = validator;
    this.saving = false;
  }

  BotFormCustomElement.prototype.clear = function clear() {
    this.showForm = false;
    this.saving = false;
    this.events.publish(new __WEBPACK_IMPORTED_MODULE_4__events_bots__["BotCleared"]());
    this.reset();
  };

  BotFormCustomElement.prototype.submit = function submit() {
    var _this = this;

    this.validator.validate().then(function (v) {
      if (v.valid) return _this.createBot();
      return _this.events.publish(new __WEBPACK_IMPORTED_MODULE_5__events_notification__["Danger"]('Check errors in the Create Bot form', '', 3000));
    });
  };

  BotFormCustomElement.prototype.createBot = function createBot() {
    var _this2 = this;

    this.saving = true;
    this.teams.addBot(this.team._id, this.newBot).then(function (b) {
      _this2.showForm = false;
      _this2.saving = false;
      _this2.events.publish(new __WEBPACK_IMPORTED_MODULE_4__events_bots__["BotSaved"](_this2.bot));
      _this2.reset();
    }).catch(function (resp) {
      var errorResponse = parseErrorResponse(resp);
      _this2.events.publish(errorResponse.event);
      _this2.validate(errorResponse.fields);

      _this2.saving = false;
    });
  };

  BotFormCustomElement.prototype.bind = function bind() {
    this.reset();
  };

  BotFormCustomElement.prototype.reset = function reset() {
    this.bot = Object.create({});
    __WEBPACK_IMPORTED_MODULE_2_aurelia_validation__["ValidationRules"].ensure(function (b) {
      return b.name;
    }).required().ensure(function (b) {
      return b.url;
    }).displayName('URL').required().matches(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i).on(this.bot);
  };

  // validate() {
  //   this.validator.validate().then(e => {
  //     console.log(e);
  //   });
  // }


  return BotFormCustomElement;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'bot', [__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["bindable"]], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'teamId', [__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["bindable"]], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showForm', [__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["bindable"]], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYjliZmY1MjU4M2U0Yzg2NjU3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JvdHMvYm90LWZvcm0uanM/YjFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGluamVjdCwgTmV3SW5zdGFuY2UgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXIsIFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XG5pbXBvcnQgVGVhbVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvdGVhbSc7XG5pbXBvcnQgeyBCb3RTYXZlZCwgQm90Q2xlYXJlZCB9IGZyb20gJy4uLy4uL2V2ZW50cy9ib3RzJztcbmltcG9ydCB7IERhbmdlciB9IGZyb20gJy4uLy4uL2V2ZW50cy9ub3RpZmljYXRpb24nO1xuXG5mdW5jdGlvbiBwYXJzZUVycm9yUmVzcG9uc2UocmVzcCkge1xuICBjb25zdCBkYXRhID0gT2JqZWN0LmNyZWF0ZShyZXNwLmNvbnRlbnQpO1xuXG4gIGlmIChyZXNwLnN0YXR1c0NvZGUgPT09IDQwMCkge1xuICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKGRhdGEuZmllbGRzKTtcbiAgICBkYXRhLmV2ZW50ID0gbmV3IERhbmdlcihgJHtkYXRhLm1lc3NhZ2V9OmAsIGZpZWxkcy5qb2luKCcsJykpO1xuICB9IGVsc2Uge1xuICAgIGRhdGEuZXZlbnQgPSBuZXcgRGFuZ2VyKGRhdGEubWVzc2FnZSwgJycpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbkBpbmplY3QoVGVhbVNlcnZpY2UsIEV2ZW50QWdncmVnYXRvciwgTmV3SW5zdGFuY2Uub2YoVmFsaWRhdGlvbkNvbnRyb2xsZXIpKVxuZXhwb3J0IGNsYXNzIEJvdEZvcm1DdXN0b21FbGVtZW50IHtcbiAgQGJpbmRhYmxlIGJvdDtcbiAgQGJpbmRhYmxlIHRlYW1JZDtcbiAgQGJpbmRhYmxlIHNob3dGb3JtID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IodGVhbXMsIGV2ZW50cywgdmFsaWRhdG9yKSB7XG4gICAgdGhpcy50ZWFtcyA9IHRlYW1zO1xuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnNob3dGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKG5ldyBCb3RDbGVhcmVkKCkpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4odiA9PiB7XG4gICAgICBpZiAodi52YWxpZCkgcmV0dXJuIHRoaXMuY3JlYXRlQm90KCk7XG4gICAgICByZXR1cm4gdGhpcy5ldmVudHMucHVibGlzaChuZXcgRGFuZ2VyKCdDaGVjayBlcnJvcnMgaW4gdGhlIENyZWF0ZSBCb3QgZm9ybScsICcnLCAzMDAwKSk7XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUJvdCgpIHtcbiAgICB0aGlzLnNhdmluZyA9IHRydWU7XG4gICAgdGhpcy50ZWFtcy5hZGRCb3QodGhpcy50ZWFtLl9pZCwgdGhpcy5uZXdCb3QpLnRoZW4oYiA9PiB7XG4gICAgICB0aGlzLnNob3dGb3JtID0gZmFsc2U7XG4gICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5ldmVudHMucHVibGlzaChuZXcgQm90U2F2ZWQodGhpcy5ib3QpKTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9KS5jYXRjaChyZXNwID0+IHtcbiAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2UgPSBwYXJzZUVycm9yUmVzcG9uc2UocmVzcCk7IFxuICAgICAgdGhpcy5ldmVudHMucHVibGlzaChlcnJvclJlc3BvbnNlLmV2ZW50KTtcbiAgICAgIHRoaXMudmFsaWRhdGUoZXJyb3JSZXNwb25zZS5maWVsZHMpO1xuXG4gICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xuXG4gICAgfSk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuYm90ID0gT2JqZWN0LmNyZWF0ZSh7fSk7XG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlKGIgPT4gYi5uYW1lKS5yZXF1aXJlZCgpXG4gICAgICAuZW5zdXJlKGIgPT4gYi51cmwpLmRpc3BsYXlOYW1lKCdVUkwnKS5yZXF1aXJlZCgpLm1hdGNoZXMoL14oPzooPzpodHRwcz98ZnRwKTpcXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykoPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKig/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkpXFwuPykoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pKVxuICAgICAgLm9uKHRoaXMuYm90KTtcbiAgfVxuXG4gIC8vIHZhbGlkYXRlKCkge1xuICAvLyAgIHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihlID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xuICAvLyAgIH0pO1xuICAvLyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYm90cy9ib3QtZm9ybS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW1CQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBMEJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUExQ0E7QUE0Q0E7QUFDQTtBQUNBO0FBOUNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==