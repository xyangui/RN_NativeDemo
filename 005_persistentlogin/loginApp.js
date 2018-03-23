/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Login from './PersistentAuth';
import './storageinit';

export default class presistentlogin extends Component {
    render() {
        return (
            <Login/>
        );
    }
}