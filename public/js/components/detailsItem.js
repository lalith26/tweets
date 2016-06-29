var React = require('react');

var DetailsItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    render: function render() {
        var photo,
            tweetDetails;
        if (!this.props.item.photo_url) {
            photo = (
                <div className="photo-container">
                    <div className="photo">
                        <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            );
        }
        tweetDetails = (
            <div className="tweet-details-container">
                <div className="name-time-container">
                    <span className="name mr1">{this.props.item.name}</span>
                    <span className="nick-name">{this.props.item.nick_name}</span>
                    <span className="time">{this.props.item.time_posted}</span>
                </div>
                <div className="tweet-content-container">
                    <span className="tweet-content">{this.props.item.content}</span>
                </div>
                <div className="icon-container">
                    <i className="fa fa-reply action-icons action-reply" aria-hidden="true"></i>
                    <i className="fa fa-star action-icons action-star" aria-hidden="true"></i>
                    <i className="fa fa-refresh action-icons action-refresh" aria-hidden="true"></i>
                    <i className="fa fa-ellipsis-h action-icons action-dots" aria-hidden="true"></i>
                    <i className="fa fa-expand action-icons action-expand" aria-hidden="true"></i>
                </div>
            </div>
        );
        return (
            <div className="details-item-container">
                {photo}
                {tweetDetails}
            </div>
        )
    }
});

module.exports = DetailsItem;
