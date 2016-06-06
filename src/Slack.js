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

  /**
   * Represents a Slack bot.
   * @constructor
   * @param {string} webhookURL - see https://api.slack.com/incoming-webhooks.
   */
  constructor(webhookURL: string) {
    this.webhookURL = webhookURL;
  }

  /*
   * Post a message on Slack
   * @param {string} text - The most important part, the message you will send
   * @param {string} channel - The channel where you will post a message
   * @param {string} username - The username you will use to post the message
   * @param {string} emoji -  The icon emoji with your message
   */
  post(
    text: string = '<text is empty>',
    channel: string = '#general',
    username: string = 'bot',
    emoji: string = ':iphone:'
  ): Promise {

    if (!this.webhookURL) {
      throw new Error('Need a webhookURL!');
    }

    const payload: Payload = {
      text,
      channel,
      username,
      'icon_emoji' : emoji
    };

    const body = `payload=${encodeURI(JSON.stringify(payload))}`;
    return fetch(this.webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });
  }
};

module.exports = Slack;
