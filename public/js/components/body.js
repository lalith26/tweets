var React = require('react');
var Banner = require('./banner');
var Details = require('./details');

var Body = React.createClass({
    getInitialState: function getInitialState() {
        return {
            detailsType: 'tweets'
        }
    },

    setDetailsType: function setDetailsType(value) {
        this.setState({detailsType: value});
    },

    render: function render() {
        return (
            <div className="body-container">
                <Banner setDetailsType={this.setDetailsType}/>
                <Details detailsType={this.state.detailsType}/>
            </div>
        );
    }
});

module.exports = Body;
