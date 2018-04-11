/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import myFetch from './MyFetch';

export default class App extends Component<Props> {
  render() {

    let params = {
      user: 'ivan@empire.edu.au',
      password: 'qazwsxedc'
    };

    myFetch('/login','POST', params)
      .then( responseJson => {

        if (responseJson.state === 'successful') {

          // local增加
          Alert.alert('successful3334');
        } else {
          Alert.alert('fail66777');
        }

      }).catch( err => {
      	//请求失败
    });


	// fetch('http://empirecollege.net/Education/public/api/login', {
	//   method: 'POST',
	//   headers: {
	// 	'Content-Type': 'application/json',
	//   },
	//   body: JSON.stringify({
	// 	user: 'ivan@empire.edu.au',
	// 	password: 'qazwsxedc'
	//   })
	// }).then((response) => response.json())
	// .then((responseJson) => {
	//   if (responseJson.state === 'successful') {
    //
	// 	// local增加
	// 	Alert.alert('successful123');
	//   } else {
	// 	Alert.alert('fail123');
	//   }
	// }).catch((error) => {
	//   console.error(error);
	// });



    return (
      <View style={styles.container}>
        <Text>
          Welcome to Re5act Na8899ve!
        </Text>
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
  }
});
