# react-native-slack-webhook

[![npm version](http://img.shields.io/npm/dm/react-native-slack-webhook.svg?style=flat-square)](https://npmjs.org/package/react-native-slack-webhook "View this project on npm")

The best Slack bot for React Native.

![](http://i.imgur.com/oSd0Odt.gif)

### Installation
```bash
$ npm i react-native-slack-webhook --save
```
### Basic Usage
- Install `react-native` first

```bash
$ npm i react-native -g
```

- Initialization of a react-native project

```bash
$ react-native init myproject
```

- Then, edit `myproject/index.ios.js`, like this:

```jsx
/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Slack from 'react-native-slack-webhook';
import {webhookURL} from './env';


class example extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to react-native-slack-webhook!
        </Text>
        <TouchableOpacity onPress={()=> new Slack(webhookURL).post('Test', '#test')}>
          <Text style={styles.instructions}>
            Press it to send message
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
```

## Setup example

### Slack

This lib need a webhook url, details here : https://api.slack.com/incoming-webhooks.
```JavaScript
let webhookURL = '<your webhook URL provided by Slack, ie. Incoming WebHooks>'
let Slack = new Slack(webhookURL)
```
### Example

Just provide a file name env.js at root of the example project, see the example/env.example.js file.

## Payload object

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| channel | string | '#general' | The channel where you will post a message |
| username | string | 'bot' | The username you will use to post the message  |
| text | string | 'text is empty' | The most important part, the message you will send |
| 'icon_emoji' | string | ':iphone:' | The icon emoji with your message |


## Contribution

- [@xcapentier](mailto:contact@xaviercarpentier.com) The main author.

  PRs are welcome !

## Questions

Feel free to [contact me](mailto:contact@xaviercarpentier.com) or [create an issue](https://github.com/xcarpentier/react-native-slack-webhook/issues/new)

> made with ♥
