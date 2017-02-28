webpackHotUpdate(0,{

/***/ "services/authentication.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_http_client__ = __webpack_require__("aurelia-http-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_http_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aurelia_http_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_framework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aurelia_framework__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_router__ = __webpack_require__("aurelia-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aurelia_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage__ = __webpack_require__("services/storage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_authentication__ = __webpack_require__("events/authentication.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthenticationService; });
var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








function extractUser(token) {
  var rawData = token.split('.')[1];
  var base64 = rawData.replace('-', '+').replace('_', '/');
  var user = JSON.parse(window.atob(base64));
  user.token = token;
  return user;
}

var AuthenticationService = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_0_aurelia_http_client__["HttpClient"], __WEBPACK_IMPORTED_MODULE_2_aurelia_router__["Router"], __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__["EventAggregator"]), _dec(_class = function () {
  function AuthenticationService(httpClient, router, events) {
    _classCallCheck(this, AuthenticationService);

    httpClient.configure(function (x) {
      x.withHeader('Content-Type', 'application/json');
      x.withHeader('Accepts', 'application/json');
    });

    this.client = httpClient;
    this.router = router;
    this.storage = new __WEBPACK_IMPORTED_MODULE_3__storage__["default"]('localStorage');
    this.currentUser = this.storage.get('user');
    this.events = events;
  }

  AuthenticationService.prototype.login = function login(username, password) {
    var _this = this;

    this.client.post('/api/login', JSON.stringify({ username, password })).then(function (message) {
      _this.currentUser = extractUser(message.response);
      var expiresInMinutes = (_this.currentUser.exp - _this.currentUser.iat) / 60;
      _this.storage.set('user', _this.currentUser, expiresInMinutes);
      _this.events.publish(new __WEBPACK_IMPORTED_MODULE_5__events_authentication__["LoggedIn"](_this.currentUser));
      _this.router.navigate('');
    }).catch(function (message) {
      return _this.events.publish(new AuthenticationError(username, message));
    });
  };

  return AuthenticationService;
}()) || _class);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZDk5ODVkMDY0NWU1NDUyMzAwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5qcz9hYjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InXG5pbXBvcnQgeyBMb2dnZWRJbiwgTG9nZ2VkT3V0IH0gZnJvbSAnLi4vZXZlbnRzL2F1dGhlbnRpY2F0aW9uJztcblxuZnVuY3Rpb24gZXh0cmFjdFVzZXIodG9rZW4pIHtcbiAgY29uc3QgcmF3RGF0YSA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gIGNvbnN0IGJhc2U2NCA9IHJhd0RhdGEucmVwbGFjZSgnLScsJysnKS5yZXBsYWNlKCdfJywnLycpO1xuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcbiAgdXNlci50b2tlbiA9IHRva2VuO1xuICByZXR1cm4gdXNlcjtcbn1cblxuQGluamVjdChIdHRwQ2xpZW50LCBSb3V0ZXIsIEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQsIHJvdXRlciwgZXZlbnRzKSB7XG4gICAgaHR0cENsaWVudC5jb25maWd1cmUoeCA9PiB7XG4gICAgICB4LndpdGhIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICB4LndpdGhIZWFkZXIoJ0FjY2VwdHMnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jbGllbnQgPSBodHRwQ2xpZW50O1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCdsb2NhbFN0b3JhZ2UnKTtcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5zdG9yYWdlLmdldCgndXNlcicpO1xuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICB9XG5cbiAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgdGhpcy5jbGllbnQucG9zdCgnL2FwaS9sb2dpbicsIEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pKS50aGVuKG1lc3NhZ2UgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50VXNlciA9IGV4dHJhY3RVc2VyKG1lc3NhZ2UucmVzcG9uc2UpO1xuICAgICAgY29uc3QgZXhwaXJlc0luTWludXRlcyA9ICh0aGlzLmN1cnJlbnRVc2VyLmV4cCAtIHRoaXMuY3VycmVudFVzZXIuaWF0KSAvIDYwO1xuICAgICAgdGhpcy5zdG9yYWdlLnNldCgndXNlcicsIHRoaXMuY3VycmVudFVzZXIsIGV4cGlyZXNJbk1pbnV0ZXMpO1xuICAgICAgdGhpcy5ldmVudHMucHVibGlzaChuZXcgTG9nZ2VkSW4odGhpcy5jdXJyZW50VXNlcikpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJycpO1xuICAgIH0pLmNhdGNoKG1lc3NhZ2UgPT4gdGhpcy5ldmVudHMucHVibGlzaChuZXcgQXV0aGVudGljYXRpb25FcnJvcih1c2VybmFtZSwgbWVzc2FnZSkpKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBdkJBOzs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==