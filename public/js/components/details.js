var React = require('react');

var Details = React.createClass({
    propTypes: {
        detailsType: React.PropTypes.string.isRequired
    },

    render: function render() {
        if (this.props.detailsType === 'tweets') {
            return (
                <div className="details-container">
                </div>
            );
        }
        return (
            <div className="details-container">
            </div>
        );
    }
});

module.exports = Details;
