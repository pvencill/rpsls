webpackHotUpdate(0,{

/***/ "nav-bar.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <require from=\"./user-status\"></require>\n  <require from=\"./flash-notice\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\n          <span class=\"sr-only\">Toggle Navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">\n          <i class=\"fa fa-home\"></i>\n          <span>${router.title}</span>\n        </a>\n      </div>\n      <user-status class='navbar-collapse collapse navbar-right'></user-status>\n      <div class=\"collapse navbar-collapse\" id=\"skeleton-navigation-navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li repeat.for=\"row of routes\" class=\"${row.isActive ? 'active' : ''}\">\n            <a data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse.in\" href.bind=\"row.href\">${row.title}</a>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"loader\" if.bind=\"router.isNavigating\">\n            <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n          </li>\n        </ul>\n        <flash-notice class='navbar-header'></flash-notice>\n      </div>\n\n    </div>\n  </nav>\n</template>\n";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41Njg2NTdiNWYzNDA5MzAzMDg3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL25hdi1iYXIuaHRtbD9mZWUwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL3VzZXItc3RhdHVzXFxcIj48L3JlcXVpcmU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL2ZsYXNoLW5vdGljZVxcXCI+PC9yZXF1aXJlPlxcblxcbiAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3BcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjc2tlbGV0b24tbmF2aWdhdGlvbi1uYXZiYXItY29sbGFwc2VcXFwiPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+VG9nZ2xlIE5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCI+PC9pPlxcbiAgICAgICAgICA8c3Bhbj4ke3JvdXRlci50aXRsZX08L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPHVzZXItc3RhdHVzIGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UgbmF2YmFyLXJpZ2h0Jz48L3VzZXItc3RhdHVzPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVxcXCIgaWQ9XFxcInNrZWxldG9uLW5hdmlnYXRpb24tbmF2YmFyLWNvbGxhcHNlXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcbiAgICAgICAgICA8bGkgcmVwZWF0LmZvcj1cXFwicm93IG9mIHJvdXRlc1xcXCIgY2xhc3M9XFxcIiR7cm93LmlzQWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31cXFwiPlxcbiAgICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNza2VsZXRvbi1uYXZpZ2F0aW9uLW5hdmJhci1jb2xsYXBzZS5pblxcXCIgaHJlZi5iaW5kPVxcXCJyb3cuaHJlZlxcXCI+JHtyb3cudGl0bGV9PC9hPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJsb2FkZXJcXFwiIGlmLmJpbmQ9XFxcInJvdXRlci5pc05hdmlnYXRpbmdcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtMnhcXFwiPjwvaT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgICA8Zmxhc2gtbm90aWNlIGNsYXNzPSduYXZiYXItaGVhZGVyJz48L2ZsYXNoLW5vdGljZT5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuICA8L25hdj5cXG48L3RlbXBsYXRlPlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL25hdi1iYXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gbmF2LWJhci5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=