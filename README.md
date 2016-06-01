# react-native-slack-webhook

[![npm version](http://img.shields.io/npm/dm/react-native-slack-webhook.svg?style=flat-square)](https://npmjs.org/package/react-native-slack-webhook "View this project on npm")

The best Slack bot for React Native.

![](http://i.imgur.com/WF4sdT7.gif)

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
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  StatusBarIOS,
  PixelRatio
} from 'react-native';

import Slack from 'react-native-slack-webhook';

class Example extends Component {
  constructor(props){
    StatusBarIOS.setHidden(true);
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Country Picker !
        </Text>
        <Text style={styles.instructions}>
          Press to send test message
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('example', () => Example);
```

## Contribution

- [@xcapentier](mailto:contact@xaviercarpentier.com) The main author.

## Questions

Feel free to [contact me](mailto:contact@xaviercarpentier.com) or [create an issue](https://github.com/xcarpentier/react-native-slack-webhook/issues/new)

> made with ♥
