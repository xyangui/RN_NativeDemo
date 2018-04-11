/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
const common_url = 'http://empirecollege.net/Education/public/api';  //服务器地址
let token = '';

function fetchRequest(url, method, params = ''){

  let header = {
    "Content-Type": "application/json;charset=UTF-8"
    //,
    //"accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
  };

  if(params == ''){

    return new Promise(function (resolve, reject) {
      fetch(common_url + url, {

        method: method,
        headers: header

      }).then((response) => response.json())
        .then((responseData) => {

          resolve(responseData);
        })
        .catch( (error) => {

          reject(error);
        });
    });

  }else{

    return new Promise(function (resolve, reject) {
      fetch(common_url + url, {

        method: method,
        headers: header,
        body: JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析

      }).then((response) => response.json())
        .then((responseData) => {

          resolve(responseData);
        })
        .catch( (error) => {

          reject(error);
        });
    });

  }
}
export default fetchRequest;
