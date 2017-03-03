webpackHotUpdate(0,{

/***/ "components/bots/bot-form.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <form if.bind='bot' class='form-horizontal'>\n    <fieldset>\n      <legend>Create a New Bot</legend>\n      <div class=\"form-group\">\n        <label class=\"col-sm-1 control-label\" for=\"name\">Name:</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class='form-control' name='name' value.bind='newBot.name' placeholder=\"name\">\n        </div>\n        <label class=\"col-sm-1 control-label\" for=\"url\">Url:</label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class='form-control' name=\"url\" value.bind=\"newBot.url\" placeholder=\"http://my-bot.mitre.org/\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"secret\" class=\"control-label col-sm-1\">Secret:</label>\n        <div class=\"col-sm-11\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Optional Secret\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\" class=\"control-label col-sm-1\">Description</label>\n        <div class=\"col-sm-12\">\n          <textarea name=\"description\" placeholder='Optional' cols=\"30\" rows=\"4\" class=\"form-control\"></textarea>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button click.delegate='createBot()' disabled.bind='saving' class=\"btn btn-primary\">${saving ? 'Saving ' : 'Save'}<i if.bind='saving' class=\"fa fa-spinner fa-spin\"></i></button>\n        <button class=\"btn\" click.delegate=\"clear()\">Cancel</button>\n        <button class=\"btn btn-warning\" click.delegate=\"validate()\">Validate</button>\n      </div>\n    </fieldset>\n  </form>\n</template>";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MDFmZjNkYmNkMjIxNjQ4NmNhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm90cy9ib3QtZm9ybS5odG1sPzk5MDAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXG4gIDxmb3JtIGlmLmJpbmQ9J2JvdCcgY2xhc3M9J2Zvcm0taG9yaXpvbnRhbCc+XFxuICAgIDxmaWVsZHNldD5cXG4gICAgICA8bGVnZW5kPkNyZWF0ZSBhIE5ldyBCb3Q8L2xlZ2VuZD5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTEgY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJuYW1lXFxcIj5OYW1lOjwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz0nZm9ybS1jb250cm9sJyBuYW1lPSduYW1lJyB2YWx1ZS5iaW5kPSduZXdCb3QubmFtZScgcGxhY2Vob2xkZXI9XFxcIm5hbWVcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0xIGNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwidXJsXFxcIj5Vcmw6PC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPSdmb3JtLWNvbnRyb2wnIG5hbWU9XFxcInVybFxcXCIgdmFsdWUuYmluZD1cXFwibmV3Qm90LnVybFxcXCIgcGxhY2Vob2xkZXI9XFxcImh0dHA6Ly9teS1ib3QubWl0cmUub3JnL1xcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInNlY3JldFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTFcXFwiPlNlY3JldDo8L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTExXFxcIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJPcHRpb25hbCBTZWNyZXRcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJkZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTFcXFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCIgcGxhY2Vob2xkZXI9J09wdGlvbmFsJyBjb2xzPVxcXCIzMFxcXCIgcm93cz1cXFwiNFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGljay5kZWxlZ2F0ZT0nY3JlYXRlQm90KCknIGRpc2FibGVkLmJpbmQ9J3NhdmluZycgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+JHtzYXZpbmcgPyAnU2F2aW5nICcgOiAnU2F2ZSd9PGkgaWYuYmluZD0nc2F2aW5nJyBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXFxcIj48L2k+PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGNsaWNrLmRlbGVnYXRlPVxcXCJjbGVhcigpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgY2xpY2suZGVsZWdhdGU9XFxcInZhbGlkYXRlKClcXFwiPlZhbGlkYXRlPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZmllbGRzZXQ+XFxuICA8L2Zvcm0+XFxuPC90ZW1wbGF0ZT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2JvdHMvYm90LWZvcm0uaHRtbFxuLy8gbW9kdWxlIGlkID0gY29tcG9uZW50cy9ib3RzL2JvdC1mb3JtLmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==