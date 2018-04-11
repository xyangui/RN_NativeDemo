
import React from 'react';

function httprequest(value1, value2) {

  fetch('http://empirecollege.net/Education/public/api/login', {
	method: 'POST',
	headers: {
	  'Accept': 'application/json',
	  'Content-Type': 'application/json',
	},
	body: JSON.stringify({
	  user: 'ivan@empire.edu.au',
	  password: 'qazwsxedc'
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

  var dd = 3+4;

  return value1 + value2;
}

module.exports = httprequest;
