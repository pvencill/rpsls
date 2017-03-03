webpackHotUpdate(0,{

/***/ "components/teams/detail.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <require from='../bots/bot-form'></require>\n  <div class=\"container container-fluid\">\n      <h3 class='row'>${team.name}</h3>\n      <dl class=\"row\" if.bind='team.bots.length'>\n        <template repeat.for='bot of team.bots'>\n          <dt>${bot.name}</dt>\n          <dd>${bot.url}</dd>\n        </template>\n      </dl>\n      <div class=\"row\" if.bind=\"!team.bots.length\">\n        No bots registered yet!\n      </div>\n      <a if.bind='!show' click.delegate='show=true' class=\"btn btn-primary row\">Add a Bot</a>\n      <bot-form showForm.bind='show'></bot-form>\n  </div>\n</template>";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kM2UyNzE4NDk5ZWY3ZTE2NWQ2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVhbXMvZGV0YWlsLmh0bWw/NTJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgPHJlcXVpcmUgZnJvbT0nLi4vYm90cy9ib3QtZm9ybSc+PC9yZXF1aXJlPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgPGgzIGNsYXNzPSdyb3cnPiR7dGVhbS5uYW1lfTwvaDM+XFxuICAgICAgPGRsIGNsYXNzPVxcXCJyb3dcXFwiIGlmLmJpbmQ9J3RlYW0uYm90cy5sZW5ndGgnPlxcbiAgICAgICAgPHRlbXBsYXRlIHJlcGVhdC5mb3I9J2JvdCBvZiB0ZWFtLmJvdHMnPlxcbiAgICAgICAgICA8ZHQ+JHtib3QubmFtZX08L2R0PlxcbiAgICAgICAgICA8ZGQ+JHtib3QudXJsfTwvZGQ+XFxuICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgIDwvZGw+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBpZi5iaW5kPVxcXCIhdGVhbS5ib3RzLmxlbmd0aFxcXCI+XFxuICAgICAgICBObyBib3RzIHJlZ2lzdGVyZWQgeWV0IVxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxhIGlmLmJpbmQ9JyFzaG93JyBjbGljay5kZWxlZ2F0ZT0nc2hvdz10cnVlJyBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHJvd1xcXCI+QWRkIGEgQm90PC9hPlxcbiAgICAgIDxib3QtZm9ybSBzaG93Rm9ybS5iaW5kPSdzaG93Jz48L2JvdC1mb3JtPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlYW1zL2RldGFpbC5odG1sXG4vLyBtb2R1bGUgaWQgPSBjb21wb25lbnRzL3RlYW1zL2RldGFpbC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=