/**
 * Created by Administrator on 2017-12-13.
 */

var HelloMessage = React.createClass({
    render: function() {
        return (<h1>Hello, example_component！</h1>);
    }
});

var ComponentPara = React.createClass({
    render: function() {
        return (<h1>Hello, {this.props.nam}</h1>);
    }
});

/**
 * 注意，原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头，
 * 比如 HelloMessage 不能写成 helloMessage。
 *
 * 除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。
 */
