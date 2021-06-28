import React, {Component} from 'react';
import {StatusBar, LogBox} from 'react-native';
import icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Routes from './routes';

icon.loadFont();
LogBox.ignoreAllLogs();
export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </>
    );
  }
}