'use strict';
/**
 * react-native-slack-webhook
 * @author xcarpentier<contact@xaviercarpentier.com>
 */

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

class Slack  {

  constructor(webhookURL: string) {
    this.webhookURL = webhookURL;
  }

  request(payload: Payload = defaultPayload): Promise {
    if (!this.webhookURL) {
      throw new Error('Need a webhookURL!');
    }
    let body = `payload=${encodeURI(JSON.stringify(payload))}`;
    return fetch(`${this.webhookURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });
  }
};

module.exports = Slack;
