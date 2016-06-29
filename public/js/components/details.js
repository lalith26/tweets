var React = require('react');
var DetailsItem = require('./detailsItem');

var Details = React.createClass({
    items: [
        {
            id: 1,
            name: 'Axel Herrmann',
            nick_name: '@axel_herrmann',
            time_posted: '2m',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            photo_url: ''
        },
        {
            id: 2,
            name: 'Alex Goldmann',
            nick_name: '@alexgold',
            time_posted: '10m',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
            photo_url: ''
        },
        {
            id: 3,
            name: 'PJ Vote',
            nick_name: '@pjvote',
            time_posted: '20m',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
            photo_url: ''
        },
        {
            id: 4,
            name: 'Julia Sanders',
            nick_name: '@juliasanders',
            time_posted: 'Yesterday',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            photo_url: ''
        }
    ],


    propTypes: {
        detailsType: React.PropTypes.string.isRequired
    },

    render: function render() {
        var detailsItems = this.items.map(function(item) {
            return (
                <DetailsItem item={item} key={item.id}/>
            );
        });
        if (this.props.detailsType === 'tweets') {
            return (
                <div className="details-container">
                    {detailsItems}
                </div>
            );
        }
        return (
            <div className="details-smiley-container">
                <i className="fa fa-smile-o fa-5x custom-smiley-size" aria-hidden="true"></i>
            </div>
        );
    }
});

module.exports = Details;
