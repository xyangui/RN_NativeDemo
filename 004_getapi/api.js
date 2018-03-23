import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {StackNavigator} from 'react-native'

class HttpExample extends Component {
    state = {
        data: ''
    }
    componentDidMount = () => {
        //to access http request need to add following code
        // "<key>NSAllowsArbitraryLoads</key>
        //  <true/>"
        //to ios/project/info.plist
        //"<key>NSAppTransportSecurity</key>"
        fetch('http://empirecollege.net/blog/public/api/articles/1', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);

                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style = {style.center}>
                <View style = {style.text}>
                    <Text>
                        {this.state.data.id}
                        {this.state.data.title}
                    </Text>
                </View>
            </View>
        )
    }
}
export default HttpExample

const style = StyleSheet.create({
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        height: 80,
        width: 80,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    }
})