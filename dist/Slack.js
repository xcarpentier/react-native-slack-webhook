'use strict';

var defaultPayload = {
  channel: '#general',
  username: 'bot',
  text: '',
  'icon_emoji': ':iphone:'
};

var Slack = function Slack(webhookURL) {

  function request() {
    var payload = arguments.length <= 0 || arguments[0] === undefined ? defaultPayload : arguments[0];

    if (!webhookURL) {
      throw new Error('Need a webhookURL!');
    }
    var body = 'payload=' + encodeURI(JSON.stringify(payload));
    return fetch('' + webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });
  }
};

module.exports = Slack;