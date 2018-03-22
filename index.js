
import { AppRegistry } from 'react-native';

// import App from './App';
// AppRegistry.registerComponent('ReactNativeDemo', () => App);

// import apiApp from './getapi/apiApp';
// AppRegistry.registerComponent('LoginAPI', () => apiApp);

import loginApp from './persistentlogin/loginApp';
AppRegistry.registerComponent('LoginAPI', () => loginApp);

import Pagejump from './pagejump/App';
AppRegistry.registerComponent('ReactNativeDemo', () => Pagejump);


