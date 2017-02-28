webpackHotUpdate(0,{

/***/ "nav-bar.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <require from=\"./user-status\"></require>\n  <require from=\"./flash-notice\"></require>\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\n          <span class=\"sr-only\">Toggle Navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">\n          <i class=\"fa fa-home\"></i>\n          <span>${router.title}</span>\n        </a>\n      </div>\n      <user-status class='navbar-collapse collapse navbar-right'></user-status>\n      <div class=\"collapse navbar-collapse\" id=\"skeleton-navigation-navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li repeat.for=\"row of routes\" class=\"${row.isActive ? 'active' : ''}\">\n            <a data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse.in\" href.bind=\"row.href\">${row.title}</a>\n          </li>\n        </ul>\n        <flash-notice></flash-notice>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"loader\" if.bind=\"router.isNavigating\">\n            <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</template>\n";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NmFhNDdmMGJjMjlhYjk5Zjk0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL25hdi1iYXIuaHRtbD9mZWUwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL3VzZXItc3RhdHVzXFxcIj48L3JlcXVpcmU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL2ZsYXNoLW5vdGljZVxcXCI+PC9yZXF1aXJlPlxcbiAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3BcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjc2tlbGV0b24tbmF2aWdhdGlvbi1uYXZiYXItY29sbGFwc2VcXFwiPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+VG9nZ2xlIE5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCI+PC9pPlxcbiAgICAgICAgICA8c3Bhbj4ke3JvdXRlci50aXRsZX08L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPHVzZXItc3RhdHVzIGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UgbmF2YmFyLXJpZ2h0Jz48L3VzZXItc3RhdHVzPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVxcXCIgaWQ9XFxcInNrZWxldG9uLW5hdmlnYXRpb24tbmF2YmFyLWNvbGxhcHNlXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcbiAgICAgICAgICA8bGkgcmVwZWF0LmZvcj1cXFwicm93IG9mIHJvdXRlc1xcXCIgY2xhc3M9XFxcIiR7cm93LmlzQWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31cXFwiPlxcbiAgICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNza2VsZXRvbi1uYXZpZ2F0aW9uLW5hdmJhci1jb2xsYXBzZS5pblxcXCIgaHJlZi5iaW5kPVxcXCJyb3cuaHJlZlxcXCI+JHtyb3cudGl0bGV9PC9hPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDxmbGFzaC1ub3RpY2U+PC9mbGFzaC1ub3RpY2U+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFxcXCI+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9hZGVyXFxcIiBpZi5iaW5kPVxcXCJyb3V0ZXIuaXNOYXZpZ2F0aW5nXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTJ4XFxcIj48L2k+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvbmF2PlxcbjwvdGVtcGxhdGU+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbmF2LWJhci5odG1sXG4vLyBtb2R1bGUgaWQgPSBuYXYtYmFyLmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==