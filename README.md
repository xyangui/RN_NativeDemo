# ReactNativeDemo
This is a code repository about ReactNative app on ios and android

使用说明：
1. 使用 webstorm 检出本仓库代码，检出时，选择 GitHub (需要github账户) ，地址 https://github.com/xyangui/ReactNativeDemo.git
2. cd ReactNativeDemo
3. mac下，在工程根目录下 npm install
4. 执行  react-native link  链接依赖的库，有的库执行此命令时会在android的gradle文件添加一些代码
5. 然后 react-native run-android 或 react-native run-ios

代码库目录：
001_pagejump      页面跳转
002_BottomTab     底部导航__第三方提供，很久不更新，有消息数字，但是上下不居中
003_TabNavigator  底部导航__官方
004_getapi        API接口get请求
005_persistentlogin  API接口post请求 和 本地保存
