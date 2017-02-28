webpackHotUpdate(0,{

/***/ "components/rules/welcome.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <section class=\"au-animate container\">\n    <h2 class='row'>${heading}</h2>\n    <div class='row'><p>Rock-Paper-Scissors-Lizard-Spock is a modification of the ages old game of <a href='https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors' rel='external' title=\"Wiki Article about rock paper scissors\">rochambeau</a>.  It adds two additional moves to the regular rock-paper-scissors, and each hand can defeat and is defeated by two other hands.</p>\n    <p><a href=\"http://info.mitre.org/orgs/J85D\" title=\"J85D Org Page\" rel=\"external\">J85D</a> is hosting this site as a friendly competition site.  Players can either create a web service that will play the game based on analyzing the opponent's attack pattern, or they can choose to play as a human against those bots to see which bot is best at predicting the human's next move.</p></div>\n\n    <div class=\"row well well-sm\">\n      <h4>Summary of the Rules</h4>\n      <ul class='list-inline'>\n        <li class=\"${ $last ? '' : 'point-next' }\" repeat.for='rule of rules'>${rule}</li>\n      </ul>\n    </div>\n    \n    <h4 class='row'>How to Participate?</h4>\n    <h5 class=\"row\">As a Human Player</h5>\n    <div class=\"row\">\n      <p>Participating as a human player is pretty simple.  Just go to the <a href='#' route-href=\"route: bots\">Bots</a> page and select a bot to battle.  Each match is 'best 3 of 5' hands, so we would appreciate it if you can stay in the game for 3 hands per match, though they will go quickly in most cases.</p>\n    </div>\n    <h5 class=\"row\">As a Bot Commander (Team)</h5>\n    <div class=\"row\">\n      <p>Bots are managed by teams, so to get started <a href=\"\" route-href=\"route: teams\">create or join a team</a>.  Once on a team, you can see a list of bots owned by the team and create a new one.</p>\n      <h6>What's a bot?</h6>\n      <p>An RPSLS Bot is a RESTful service, hosted by the team owning it somewhere.  It must expose at least one URL that will accept a POST request with a JSON body about a match and respond in a timely fashion with the next move it wants to make.  To configure a Bot, you need at least a name and a URL to it, and optionally a secret key, a description and a URL to an image that will be used as an icon.</p>\n      <p>If a secret key is provided, the data will be sent to the bot as a <a href=\"https://jwt.io/introduction/\" rel=\"external\" title=\"JSON Web Token RFC website\">JWT</a> encrypted with the secret key.</p>\n      <h6>What's a Match?</h6>\n      <p>When two players (bot and human) engage in a Match, each will get information about what moves have been made so far, and will need to respond with their next move.  This will continue until one player wins at least 3 hands.  The schema for a Match is as follows:</p>\n      <pre>\n        <code>{\n  opponent: String /* UUID */,\n  history: [Hand],\n  started: Date,\n  lastMove: Date /* Will be null when the match starts */\n}</code>\n      </pre>\n      <p>And the schema for a Hand is as follows:</p>\n      <pre>\n        <code>\n          {\n            player1: {\n              id: String /* UUID */\n              move: String /* Enum of { rock, paper, scissors, lizard, spock, invalid } */\n            },\n            player2: {\n              id: String /* UUID */\n              move: String /* Enum of { rock, paper, scissors, lizard, spock, invalid } */\n            },\n            result: {\n              win: String, /* equivalent to the move that was made that won, e.g. \"rock\" */\n              text: String, /* display text such as \"Lizard poisons Spock\" */\n              winner: String /* player1 or player2 */\n            }\n          }\n        </code>\n      </pre>\n      <h6></h6>\n    </div>\n  </section>\n</template>\n";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MjU0NjI0YjAxN2NjODNmMjY5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcnVsZXMvd2VsY29tZS5odG1sPzFiZWYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXG4gIDxzZWN0aW9uIGNsYXNzPVxcXCJhdS1hbmltYXRlIGNvbnRhaW5lclxcXCI+XFxuICAgIDxoMiBjbGFzcz0ncm93Jz4ke2hlYWRpbmd9PC9oMj5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz48cD5Sb2NrLVBhcGVyLVNjaXNzb3JzLUxpemFyZC1TcG9jayBpcyBhIG1vZGlmaWNhdGlvbiBvZiB0aGUgYWdlcyBvbGQgZ2FtZSBvZiA8YSBocmVmPSdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Sb2NrJUUyJTgwJTkzcGFwZXIlRTIlODAlOTNzY2lzc29ycycgcmVsPSdleHRlcm5hbCcgdGl0bGU9XFxcIldpa2kgQXJ0aWNsZSBhYm91dCByb2NrIHBhcGVyIHNjaXNzb3JzXFxcIj5yb2NoYW1iZWF1PC9hPi4gIEl0IGFkZHMgdHdvIGFkZGl0aW9uYWwgbW92ZXMgdG8gdGhlIHJlZ3VsYXIgcm9jay1wYXBlci1zY2lzc29ycywgYW5kIGVhY2ggaGFuZCBjYW4gZGVmZWF0IGFuZCBpcyBkZWZlYXRlZCBieSB0d28gb3RoZXIgaGFuZHMuPC9wPlxcbiAgICA8cD48YSBocmVmPVxcXCJodHRwOi8vaW5mby5taXRyZS5vcmcvb3Jncy9KODVEXFxcIiB0aXRsZT1cXFwiSjg1RCBPcmcgUGFnZVxcXCIgcmVsPVxcXCJleHRlcm5hbFxcXCI+Sjg1RDwvYT4gaXMgaG9zdGluZyB0aGlzIHNpdGUgYXMgYSBmcmllbmRseSBjb21wZXRpdGlvbiBzaXRlLiAgUGxheWVycyBjYW4gZWl0aGVyIGNyZWF0ZSBhIHdlYiBzZXJ2aWNlIHRoYXQgd2lsbCBwbGF5IHRoZSBnYW1lIGJhc2VkIG9uIGFuYWx5emluZyB0aGUgb3Bwb25lbnQncyBhdHRhY2sgcGF0dGVybiwgb3IgdGhleSBjYW4gY2hvb3NlIHRvIHBsYXkgYXMgYSBodW1hbiBhZ2FpbnN0IHRob3NlIGJvdHMgdG8gc2VlIHdoaWNoIGJvdCBpcyBiZXN0IGF0IHByZWRpY3RpbmcgdGhlIGh1bWFuJ3MgbmV4dCBtb3ZlLjwvcD48L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IHdlbGwgd2VsbC1zbVxcXCI+XFxuICAgICAgPGg0PlN1bW1hcnkgb2YgdGhlIFJ1bGVzPC9oND5cXG4gICAgICA8dWwgY2xhc3M9J2xpc3QtaW5saW5lJz5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiJHsgJGxhc3QgPyAnJyA6ICdwb2ludC1uZXh0JyB9XFxcIiByZXBlYXQuZm9yPSdydWxlIG9mIHJ1bGVzJz4ke3J1bGV9PC9saT5cXG4gICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG4gICAgXFxuICAgIDxoNCBjbGFzcz0ncm93Jz5Ib3cgdG8gUGFydGljaXBhdGU/PC9oND5cXG4gICAgPGg1IGNsYXNzPVxcXCJyb3dcXFwiPkFzIGEgSHVtYW4gUGxheWVyPC9oNT5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8cD5QYXJ0aWNpcGF0aW5nIGFzIGEgaHVtYW4gcGxheWVyIGlzIHByZXR0eSBzaW1wbGUuICBKdXN0IGdvIHRvIHRoZSA8YSBocmVmPScjJyByb3V0ZS1ocmVmPVxcXCJyb3V0ZTogYm90c1xcXCI+Qm90czwvYT4gcGFnZSBhbmQgc2VsZWN0IGEgYm90IHRvIGJhdHRsZS4gIEVhY2ggbWF0Y2ggaXMgJ2Jlc3QgMyBvZiA1JyBoYW5kcywgc28gd2Ugd291bGQgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY2FuIHN0YXkgaW4gdGhlIGdhbWUgZm9yIDMgaGFuZHMgcGVyIG1hdGNoLCB0aG91Z2ggdGhleSB3aWxsIGdvIHF1aWNrbHkgaW4gbW9zdCBjYXNlcy48L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8aDUgY2xhc3M9XFxcInJvd1xcXCI+QXMgYSBCb3QgQ29tbWFuZGVyIChUZWFtKTwvaDU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPHA+Qm90cyBhcmUgbWFuYWdlZCBieSB0ZWFtcywgc28gdG8gZ2V0IHN0YXJ0ZWQgPGEgaHJlZj1cXFwiXFxcIiByb3V0ZS1ocmVmPVxcXCJyb3V0ZTogdGVhbXNcXFwiPmNyZWF0ZSBvciBqb2luIGEgdGVhbTwvYT4uICBPbmNlIG9uIGEgdGVhbSwgeW91IGNhbiBzZWUgYSBsaXN0IG9mIGJvdHMgb3duZWQgYnkgdGhlIHRlYW0gYW5kIGNyZWF0ZSBhIG5ldyBvbmUuPC9wPlxcbiAgICAgIDxoNj5XaGF0J3MgYSBib3Q/PC9oNj5cXG4gICAgICA8cD5BbiBSUFNMUyBCb3QgaXMgYSBSRVNUZnVsIHNlcnZpY2UsIGhvc3RlZCBieSB0aGUgdGVhbSBvd25pbmcgaXQgc29tZXdoZXJlLiAgSXQgbXVzdCBleHBvc2UgYXQgbGVhc3Qgb25lIFVSTCB0aGF0IHdpbGwgYWNjZXB0IGEgUE9TVCByZXF1ZXN0IHdpdGggYSBKU09OIGJvZHkgYWJvdXQgYSBtYXRjaCBhbmQgcmVzcG9uZCBpbiBhIHRpbWVseSBmYXNoaW9uIHdpdGggdGhlIG5leHQgbW92ZSBpdCB3YW50cyB0byBtYWtlLiAgVG8gY29uZmlndXJlIGEgQm90LCB5b3UgbmVlZCBhdCBsZWFzdCBhIG5hbWUgYW5kIGEgVVJMIHRvIGl0LCBhbmQgb3B0aW9uYWxseSBhIHNlY3JldCBrZXksIGEgZGVzY3JpcHRpb24gYW5kIGEgVVJMIHRvIGFuIGltYWdlIHRoYXQgd2lsbCBiZSB1c2VkIGFzIGFuIGljb24uPC9wPlxcbiAgICAgIDxwPklmIGEgc2VjcmV0IGtleSBpcyBwcm92aWRlZCwgdGhlIGRhdGEgd2lsbCBiZSBzZW50IHRvIHRoZSBib3QgYXMgYSA8YSBocmVmPVxcXCJodHRwczovL2p3dC5pby9pbnRyb2R1Y3Rpb24vXFxcIiByZWw9XFxcImV4dGVybmFsXFxcIiB0aXRsZT1cXFwiSlNPTiBXZWIgVG9rZW4gUkZDIHdlYnNpdGVcXFwiPkpXVDwvYT4gZW5jcnlwdGVkIHdpdGggdGhlIHNlY3JldCBrZXkuPC9wPlxcbiAgICAgIDxoNj5XaGF0J3MgYSBNYXRjaD88L2g2PlxcbiAgICAgIDxwPldoZW4gdHdvIHBsYXllcnMgKGJvdCBhbmQgaHVtYW4pIGVuZ2FnZSBpbiBhIE1hdGNoLCBlYWNoIHdpbGwgZ2V0IGluZm9ybWF0aW9uIGFib3V0IHdoYXQgbW92ZXMgaGF2ZSBiZWVuIG1hZGUgc28gZmFyLCBhbmQgd2lsbCBuZWVkIHRvIHJlc3BvbmQgd2l0aCB0aGVpciBuZXh0IG1vdmUuICBUaGlzIHdpbGwgY29udGludWUgdW50aWwgb25lIHBsYXllciB3aW5zIGF0IGxlYXN0IDMgaGFuZHMuICBUaGUgc2NoZW1hIGZvciBhIE1hdGNoIGlzIGFzIGZvbGxvd3M6PC9wPlxcbiAgICAgIDxwcmU+XFxuICAgICAgICA8Y29kZT57XFxuICBvcHBvbmVudDogU3RyaW5nIC8qIFVVSUQgKi8sXFxuICBoaXN0b3J5OiBbSGFuZF0sXFxuICBzdGFydGVkOiBEYXRlLFxcbiAgbGFzdE1vdmU6IERhdGUgLyogV2lsbCBiZSBudWxsIHdoZW4gdGhlIG1hdGNoIHN0YXJ0cyAqL1xcbn08L2NvZGU+XFxuICAgICAgPC9wcmU+XFxuICAgICAgPHA+QW5kIHRoZSBzY2hlbWEgZm9yIGEgSGFuZCBpcyBhcyBmb2xsb3dzOjwvcD5cXG4gICAgICA8cHJlPlxcbiAgICAgICAgPGNvZGU+XFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICBwbGF5ZXIxOiB7XFxuICAgICAgICAgICAgICBpZDogU3RyaW5nIC8qIFVVSUQgKi9cXG4gICAgICAgICAgICAgIG1vdmU6IFN0cmluZyAvKiBFbnVtIG9mIHsgcm9jaywgcGFwZXIsIHNjaXNzb3JzLCBsaXphcmQsIHNwb2NrLCBpbnZhbGlkIH0gKi9cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHBsYXllcjI6IHtcXG4gICAgICAgICAgICAgIGlkOiBTdHJpbmcgLyogVVVJRCAqL1xcbiAgICAgICAgICAgICAgbW92ZTogU3RyaW5nIC8qIEVudW0gb2YgeyByb2NrLCBwYXBlciwgc2Npc3NvcnMsIGxpemFyZCwgc3BvY2ssIGludmFsaWQgfSAqL1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgcmVzdWx0OiB7XFxuICAgICAgICAgICAgICB3aW46IFN0cmluZywgLyogZXF1aXZhbGVudCB0byB0aGUgbW92ZSB0aGF0IHdhcyBtYWRlIHRoYXQgd29uLCBlLmcuIFxcXCJyb2NrXFxcIiAqL1xcbiAgICAgICAgICAgICAgdGV4dDogU3RyaW5nLCAvKiBkaXNwbGF5IHRleHQgc3VjaCBhcyBcXFwiTGl6YXJkIHBvaXNvbnMgU3BvY2tcXFwiICovXFxuICAgICAgICAgICAgICB3aW5uZXI6IFN0cmluZyAvKiBwbGF5ZXIxIG9yIHBsYXllcjIgKi9cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIDwvY29kZT5cXG4gICAgICA8L3ByZT5cXG4gICAgICA8aDY+PC9oNj5cXG4gICAgPC9kaXY+XFxuICA8L3NlY3Rpb24+XFxuPC90ZW1wbGF0ZT5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3J1bGVzL3dlbGNvbWUuaHRtbFxuLy8gbW9kdWxlIGlkID0gY29tcG9uZW50cy9ydWxlcy93ZWxjb21lLmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==