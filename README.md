# react-native-slack-webhook

[![npm version](http://img.shields.io/npm/dm/react-native-slack-webhook.svg?style=flat-square)](https://npmjs.org/package/react-native-slack-webhook "View this project on npm")

The best Slack bot for React Native.

![](http://i.imgur.com/vE4LubH.gif?1)

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
        <TouchableOpacity onPress={()=> new Slack(webhookURL).request({text: 'test'})}>
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

## Contribution

- [@xcapentier](mailto:contact@xaviercarpentier.com) The main author.

## Questions

Feel free to [contact me](mailto:contact@xaviercarpentier.com) or [create an issue](https://github.com/xcarpentier/react-native-slack-webhook/issues/new)

> made with ♥
