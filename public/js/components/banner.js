var React = require('react');

var Banner = React.createClass({
    getInitialState: function getInitialState() {
        return {
            selectedTab : 0
        };
    },

    handleBannerClick: function handleBannerClick(event) {
        var target = event.target;
        this.setState({selectedTab: Number(target.dataset.bannerval)});
    },

    getBannerItemClassNames: function getBannerItemClassNames(value) {
        if (this.state.selectedTab === Number(value)) {
            return 'col-3 banner-item banner-selected-item';
        }
        return 'col-3 banner-item';
    },

    render: function render() {
        return (
            <div className="banner-container">
                <div className={this.getBannerItemClassNames(0)} data-bannerval="0" onClick={this.handleBannerClick}>
                    <span className="banner-item-heading" data-bannerval="0">TWEETS</span>
                    <span className="banner-item-value" data-bannerval="0">200</span>
                </div>
                <div className={this.getBannerItemClassNames(1)} data-bannerval="1" onClick={this.handleBannerClick}>
                    <span className="banner-item-heading" data-bannerval="1">PHOTOS/VIDEOS</span>
                    <span className="banner-item-value" data-bannerval="1">200</span>
                </div>
                <div className={this.getBannerItemClassNames(2)} data-bannerval="2" onClick={this.handleBannerClick}>
                    <span className="banner-item-heading" data-bannerval="2">FOLLOWING</span>
                    <span className="banner-item-value" data-bannerval="2">200</span>
                </div>
                <div className={this.getBannerItemClassNames(3)} data-bannerval="3" onClick={this.handleBannerClick}>
                    <span className="banner-item-heading" data-bannerval="3">FOLLOWERS</span>
                    <span className="banner-item-value" data-bannerval="3">1M</span>
                </div>
            </div>
        );
    }
});

module.exports = Banner;
