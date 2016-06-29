var React = require('react');

var Header = React.createClass({
    render: function render() {
        return (
            <div className="header-container">
                <div className="feather-icon-container">
                    <div className="feather-icon">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="bell-icon-container">
                    <div className="bell-icon">
                        <i className="fa fa-bell" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="email-icon-container">
                    <div className="email-icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="hash-icon-container">
                    <div className="hash-icon">
                        <i className="fa fa-hashtag" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="twitter-icon-container">
                    <div className="twitter-icon">
                        <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="search-bar-container">
                    <input type="text" className="search-bar" placeholder="Search"/>
                </div>
                <div className="display-picture-container">
                    <div className="display-picture">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;
