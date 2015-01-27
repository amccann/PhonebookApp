'use strict';

var React = require('react/addons');

var PhoneBookPropTypes = {
    entry:  React.PropTypes.shape({
        firstname: React.PropTypes.string.isRequired,
        lastname: React.PropTypes.string.isRequired,
        number: React.PropTypes.string.isRequired
    })
}

module.exports = PhoneBookPropTypes;

