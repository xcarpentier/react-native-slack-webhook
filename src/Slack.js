'use strict';
// @flow

type Payload = {
  channel: ?string;
  username: ?string;
  text: ?string;
  'icon_emoji': ?string;
};

let defaultPayload = {
  channel: '#general',
  username: 'bot',
  text: '',
  'icon_emoji': ':iphone:'
}

const Slack = (webhookURL: string) => {

  function request(payload: Payload = defaultPayload): Promise {
    if (!webhookURL) {
      throw new Error('Need a webhookURL!');
    }
    let body = `payload=${encodeURI(JSON.stringify(payload))}`;
    return fetch(`${webhookURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });
  }
};


module.exports = Slack;
