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
    data.event = new Danger(data.message + ':', fields.join(','));
  } else {
    data.event = new Danger(data.message, '');
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

  BotFormCustomElement.prototype.createBot = function createBot() {
    var _this = this;

    this.saving = true;
    this.service.addBot(this.team._id, this.newBot).then(function (b) {
      _this.showForm = false;
      _this.saving = false;
      _this.events.publish(new __WEBPACK_IMPORTED_MODULE_4__events_bots__["BotSaved"](_this.bot));
      _this.reset();
    }).catch(function (resp) {
      var errorResponse = parseErrorResponse(resp);
      _this.events.publish(errorResponse.event);
      _this.validate(errorResponse.fields);

      _this.saving = false;
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

  BotFormCustomElement.prototype.validate = function validate() {
    this.validator.validate().then(function (e) {
      console.log(e);
    });
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZGI0YjQ0NjE5YjQ0ZDAyYmYxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JvdHMvYm90LWZvcm0uanM/YjFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgYmluZGluZ01vZGUsIGluamVjdCwgTmV3SW5zdGFuY2UgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXIsIFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XG5pbXBvcnQgVGVhbVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvdGVhbSc7XG5pbXBvcnQgeyBCb3RTYXZlZCwgQm90Q2xlYXJlZCB9IGZyb20gJy4uLy4uL2V2ZW50cy9ib3RzJztcblxuZnVuY3Rpb24gcGFyc2VFcnJvclJlc3BvbnNlKHJlc3ApIHtcbiAgY29uc3QgZGF0YSA9IE9iamVjdC5jcmVhdGUocmVzcC5jb250ZW50KTtcblxuICBpZiAocmVzcC5zdGF0dXNDb2RlID09PSA0MDApIHtcbiAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhkYXRhLmZpZWxkcyk7XG4gICAgZGF0YS5ldmVudCA9IG5ldyBEYW5nZXIoYCR7ZGF0YS5tZXNzYWdlfTpgLCBmaWVsZHMuam9pbignLCcpKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhLmV2ZW50ID0gbmV3IERhbmdlcihkYXRhLm1lc3NhZ2UsICcnKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5AaW5qZWN0KFRlYW1TZXJ2aWNlLCBFdmVudEFnZ3JlZ2F0b3IsIE5ld0luc3RhbmNlLm9mKFZhbGlkYXRpb25Db250cm9sbGVyKSlcbmV4cG9ydCBjbGFzcyBCb3RGb3JtQ3VzdG9tRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBib3Q7XG4gIEBiaW5kYWJsZSB0ZWFtSWQ7XG4gIEBiaW5kYWJsZSBzaG93Rm9ybSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHRlYW1zLCBldmVudHMsIHZhbGlkYXRvcikge1xuICAgIHRoaXMudGVhbXMgPSB0ZWFtcztcbiAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5zaG93Rm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XG4gICAgdGhpcy5ldmVudHMucHVibGlzaChuZXcgQm90Q2xlYXJlZCgpKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAgIGNyZWF0ZUJvdCgpIHtcbiAgICB0aGlzLnNhdmluZyA9IHRydWU7XG4gICAgdGhpcy5zZXJ2aWNlLmFkZEJvdCh0aGlzLnRlYW0uX2lkLCB0aGlzLm5ld0JvdCkudGhlbihiID0+IHtcbiAgICAgIHRoaXMuc2hvd0Zvcm0gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKG5ldyBCb3RTYXZlZCh0aGlzLmJvdCkpO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH0pLmNhdGNoKHJlc3AgPT4ge1xuICAgICAgY29uc3QgZXJyb3JSZXNwb25zZSA9IHBhcnNlRXJyb3JSZXNwb25zZShyZXNwKTsgXG4gICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKGVycm9yUmVzcG9uc2UuZXZlbnQpO1xuICAgICAgdGhpcy52YWxpZGF0ZShlcnJvclJlc3BvbnNlLmZpZWxkcyk7XG5cbiAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XG5cbiAgICB9KTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ib3QgPSBPYmplY3QuY3JlYXRlKHt9KTtcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmUoYiA9PiBiLm5hbWUpLnJlcXVpcmVkKClcbiAgICAgIC5lbnN1cmUoYiA9PiBiLnVybCkuZGlzcGxheU5hbWUoJ1VSTCcpLnJlcXVpcmVkKCkubWF0Y2hlcygvXig/Oig/Omh0dHBzP3xmdHApOlxcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSlcXC4/KSg/OjpcXGR7Miw1fSk/KD86Wy8/I11cXFMqKT8kL2kpXG4gICAgICAub24odGhpcy5ib3QpO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9ib3RzL2JvdC1mb3JtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW1CQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBbkNBO0FBcUNBO0FBQ0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBL0NBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==