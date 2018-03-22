import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert
} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login Page',
        headerLeft: null
    };
    state = {
        username: '',
        password: '',
        isLoggingIn: false
    }

    UserLoginFunction() {
        const {username} = this.state;
        const {password} = this.state;

        fetch('http://www.empirecollege.net/blog/public/api/userlogin/login/info', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: username,
                password: password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.state === 'successful') {
                    // local增加
                    // 使用key保存数据
                    storage.save({  //在项目目录下运行 "npm install react-native-storage --save" 本地保存包，使用前需要初始化
                                    //初始化在loginApp文件中引用
                        key: 'storageTest',    // 注意:请不要在key中使用_下划线符号!
                        data: {
                            name: username,
                            password: password,
                            isLoggingIn: true
                        },
                        // 设为null,则不过期,这里会覆盖初始化的时效
                        // expires: 1000 * 3600
                    });
                    this.setState({
                        d_name: 'good'
                    });
                    // local增加
                    Alert.alert('successful123');
                } else {
                    Alert.alert('fail123');
                }
            }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Login
                </Text>

                <TextInput onChangeText={username => this.setState({username})} placeholder='Username'/>
                <TextInput secureTextEntry={true} onChangeText={password => this.setState({password})}
                           placeholder='Password'/>

                <View style={{margin: 7}}/>
                <Button
                    onPress={() => this.UserLoginFunction()}
                    title="Submit"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Back to Home Page"
                />
            </ScrollView>
        )
    }
}
