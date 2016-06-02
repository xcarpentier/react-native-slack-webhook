'use strict';
/**
 * react-native-slack-webhook
 * @author xcarpentier<contact@xaviercarpentier.com>
 */

// @flow

type Payload = {
  channel: ? string;
  username: ? string;
  text: ? string;
  'icon_emoji': ? string;
};

class Slack {

  constructor(webhookURL: string) {
    this.webhookURL = webhookURL;
  }

  /*
   * Post a message on Slack
   */
  post(
    text: string = '<text is empty>',
    channel: string = '#general',
    username: string = 'bot',
    emoji: string = ':iphone:'): Promise {

    if (!this.webhookURL) {
      throw new Error('Need a webhookURL!');
    }

    let payload: Payload = {
      text,
      channel,
      username,
      'icon_emoji' : emoji
    };

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
