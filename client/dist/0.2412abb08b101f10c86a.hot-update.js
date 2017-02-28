webpackHotUpdate(0,{

/***/ "nav-bar.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <require from=\"./user-status\"></require>\n  <require from=\"./flash-notice\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\n          <span class=\"sr-only\">Toggle Navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">\n          <i class=\"fa fa-home\"></i>\n          <span>${router.title}</span>\n        </a>\n      </div>\n      <flash-notice></flash-notice>\n      <user-status class='navbar-collapse collapse navbar-right'></user-status>\n      <div class=\"collapse navbar-collapse\" id=\"skeleton-navigation-navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li repeat.for=\"row of routes\" class=\"${row.isActive ? 'active' : ''}\">\n            <a data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse.in\" href.bind=\"row.href\">${row.title}</a>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"loader\" if.bind=\"router.isNavigating\">\n            <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</template>\n";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNDEyYWJiMDhiMTAxZjEwYzg2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL25hdi1iYXIuaHRtbD9mZWUwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL3VzZXItc3RhdHVzXFxcIj48L3JlcXVpcmU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL2ZsYXNoLW5vdGljZVxcXCI+PC9yZXF1aXJlPlxcblxcbiAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3BcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjc2tlbGV0b24tbmF2aWdhdGlvbi1uYXZiYXItY29sbGFwc2VcXFwiPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+VG9nZ2xlIE5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCI+PC9pPlxcbiAgICAgICAgICA8c3Bhbj4ke3JvdXRlci50aXRsZX08L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGZsYXNoLW5vdGljZT48L2ZsYXNoLW5vdGljZT5cXG4gICAgICA8dXNlci1zdGF0dXMgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBuYXZiYXItcmlnaHQnPjwvdXNlci1zdGF0dXM+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXFxcIiBpZD1cXFwic2tlbGV0b24tbmF2aWdhdGlvbi1uYXZiYXItY29sbGFwc2VcXFwiPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxuICAgICAgICAgIDxsaSByZXBlYXQuZm9yPVxcXCJyb3cgb2Ygcm91dGVzXFxcIiBjbGFzcz1cXFwiJHtyb3cuaXNBY3RpdmUgPyAnYWN0aXZlJyA6ICcnfVxcXCI+XFxuICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI3NrZWxldG9uLW5hdmlnYXRpb24tbmF2YmFyLWNvbGxhcHNlLmluXFxcIiBocmVmLmJpbmQ9XFxcInJvdy5ocmVmXFxcIj4ke3Jvdy50aXRsZX08L2E+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvYWRlclxcXCIgaWYuYmluZD1cXFwicm91dGVyLmlzTmF2aWdhdGluZ1xcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0yeFxcXCI+PC9pPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L25hdj5cXG48L3RlbXBsYXRlPlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL25hdi1iYXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gbmF2LWJhci5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=