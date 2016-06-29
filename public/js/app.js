var ReactDOM = require('react-dom');
var React = require('react');
var Header = require('./components/header');
var Body = require('./components/body');

var Site = React.createClass({
    render: function render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
});

ReactDOM.render(<Site />, document.getElementById('container'));
