'use strict';
/**
 * react-native-slack-webhook
 * @author xcarpentier<contact@xaviercarpentier.com>
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultPayload = {
  channel: '#general',
  username: 'bot',
  text: '',
  'icon_emoji': ':iphone:'
};

var Slack = function () {
  function Slack(webhookURL) {
    _classCallCheck(this, Slack);

    this.webhookURL = webhookURL;
  }

  _createClass(Slack, [{
    key: 'request',
    value: function request() {
      var payload = arguments.length <= 0 || arguments[0] === undefined ? defaultPayload : arguments[0];

      if (!this.webhookURL) {
        throw new Error('Need a webhookURL!');
      }
      var body = 'payload=' + encodeURI(JSON.stringify(payload));
      return fetch('' + this.webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
      });
    }
  }]);

  return Slack;
}();

;

module.exports = Slack;