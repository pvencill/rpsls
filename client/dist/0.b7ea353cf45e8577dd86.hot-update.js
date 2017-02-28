webpackHotUpdate(0,{

/***/ "app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication__ = __webpack_require__("services/authentication.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_framework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aurelia_framework__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_router__ = __webpack_require__("aurelia-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aurelia_router__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var App = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_aurelia_framework__["inject"])(__WEBPACK_IMPORTED_MODULE_0__services_authentication__["default"]), _dec(_class = function () {
  function App(auth) {
    _classCallCheck(this, App);

    this.auth = auth;
  }

  App.prototype.configureRouter = function configureRouter(config, router) {
    config.title = 'RPSLS';
    var step = new AuthenticatedStep(this.auth);
    config.addAuthorizeStep(step);
    config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' }, { route: 'teams', name: 'teams', moduleId: './components/teams/my', nav: true, title: 'Teams', settings: { auth: true } }, { route: 'teams/create', name: 'createTeam', moduleId: './components/teams/create', nav: false, title: 'Create a Team', settings: { auth: true } }, { route: 'teams/:id', name: 'teamDetail', moduleId: './components/teams/detail', nav: false, title: 'Create a Team', settings: { auth: true } }, { route: 'bots', name: 'bots', moduleId: './components/bots/list', nav: true, title: 'Bots', settings: { auth: true } }, { route: 'login', name: 'login', moduleId: './login', nav: false, title: 'Login' }, { route: 'rules', name: 'rules', moduleId: './components/rules/welcome', nav: true, title: 'Rules' }]);

    this.router = router;
  };

  return App;
}()) || _class);

var AuthenticatedStep = function () {
  function AuthenticatedStep(auth) {
    _classCallCheck(this, AuthenticatedStep);

    this.auth = auth;
  }

  AuthenticatedStep.prototype.run = function run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(function (i) {
      return i.config.settings.auth;
    })) {
      if (!this.auth.currentUser) {
        return next.cancel(new __WEBPACK_IMPORTED_MODULE_2_aurelia_router__["Redirect"]('login'));
      }
    }

    return next();
  };

  return AuthenticatedStep;
}();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iN2VhMzUzY2Y0NWU4NTc3ZGQ4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAuanM/YmQ5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aGVudGljYXRpb25TZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvYXV0aGVudGljYXRpb24nO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbkBpbmplY3QoQXV0aGVudGljYXRpb25TZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKGF1dGgpIHtcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICB9XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ1JQU0xTJztcbiAgICBjb25zdCBzdGVwID0gbmV3IEF1dGhlbnRpY2F0ZWRTdGVwKHRoaXMuYXV0aCk7XG4gICAgY29uZmlnLmFkZEF1dGhvcml6ZVN0ZXAoc3RlcCk7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsICd3ZWxjb21lJ10sIG5hbWU6ICd3ZWxjb21lJywgbW9kdWxlSWQ6ICcuL3dlbGNvbWUnLCBuYXY6IHRydWUsIHRpdGxlOiAnV2VsY29tZScgfSxcbiAgICAgIHsgcm91dGU6ICd0ZWFtcycsIG5hbWU6ICd0ZWFtcycsIG1vZHVsZUlkOiAnLi9jb21wb25lbnRzL3RlYW1zL215JywgbmF2OiB0cnVlLCB0aXRsZTogJ1RlYW1zJywgc2V0dGluZ3M6IHsgYXV0aDogdHJ1ZSB9IH0sXG4gICAgICB7IHJvdXRlOiAndGVhbXMvY3JlYXRlJywgbmFtZTogJ2NyZWF0ZVRlYW0nLCBtb2R1bGVJZDogJy4vY29tcG9uZW50cy90ZWFtcy9jcmVhdGUnLCBuYXY6IGZhbHNlLCB0aXRsZTogJ0NyZWF0ZSBhIFRlYW0nLCBzZXR0aW5nczoge2F1dGg6IHRydWUgfSB9LFxuICAgICAgeyByb3V0ZTogJ3RlYW1zLzppZCcsIG5hbWU6ICd0ZWFtRGV0YWlsJywgbW9kdWxlSWQ6ICcuL2NvbXBvbmVudHMvdGVhbXMvZGV0YWlsJywgbmF2OiBmYWxzZSwgdGl0bGU6ICdDcmVhdGUgYSBUZWFtJywgc2V0dGluZ3M6IHthdXRoOiB0cnVlIH0gfSxcbiAgICAgIHsgcm91dGU6ICdib3RzJywgbmFtZTogJ2JvdHMnLCBtb2R1bGVJZDogJy4vY29tcG9uZW50cy9ib3RzL2xpc3QnLCBuYXY6IHRydWUsIHRpdGxlOiAnQm90cycsIHNldHRpbmdzOiB7IGF1dGg6IHRydWUgfSB9LFxuICAgICAgeyByb3V0ZTogJ2xvZ2luJywgbmFtZTogJ2xvZ2luJywgbW9kdWxlSWQ6ICcuL2xvZ2luJywgbmF2OiBmYWxzZSwgdGl0bGU6ICdMb2dpbicgfSxcbiAgICAgIHsgcm91dGU6ICdydWxlcycsIG5hbWU6ICdydWxlcycsIG1vZHVsZUlkOiAnLi9jb21wb25lbnRzL3J1bGVzL3dlbGNvbWUnLCBuYXY6IHRydWUsIHRpdGxlOiAnUnVsZXMnIH0sXG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuXG5jbGFzcyBBdXRoZW50aWNhdGVkU3RlcCB7XG4gIGNvbnN0cnVjdG9yKGF1dGgpIHtcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICB9XG5cbiAgcnVuKG5hdmlnYXRpb25JbnN0cnVjdGlvbiwgbmV4dCkge1xuICAgIGlmIChuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24uZ2V0QWxsSW5zdHJ1Y3Rpb25zKCkuc29tZShpID0+IGkuY29uZmlnLnNldHRpbmdzLmF1dGgpKSB7XG4gICAgICBpZiAoIXRoaXMuYXV0aC5jdXJyZW50VXNlcikge1xuICAgICAgICByZXR1cm4gbmV4dC5jYW5jZWwobmV3IFJlZGlyZWN0KCdsb2dpbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFyQkE7QUFBQTtBQUNBO0FBc0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==