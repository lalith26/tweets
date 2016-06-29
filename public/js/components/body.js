var React = require('react');
var Banner = require('./banner');

var Body = React.createClass({
    render: function render() {
        return (
            <div className="body-container">
                <Banner />
            </div>
        );
    }
});

module.exports = Body;
