/**
 * Sample Calendars
 * https://github.com/wix/react-native-calendars
 *
 * npm install --save react-native-calendars
 * 安装完运行，红屏，找不到 metro，运行
 * yarn install
 * 重新运行
 * react-native run-android
 * 后ok
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CalendarsScreen from './src/calendars';
import CalendarsList from './src/calendarsList';
import AgendaScreen from './src/agenda';

export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    let ff = 33;
    let gg = 44;
  }

  render() {
    return (

      <CalendarsScreen />
      //<CalendarsList />
      //<AgendaScreen />

    );
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};

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
