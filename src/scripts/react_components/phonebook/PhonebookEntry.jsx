'use strict';

var React = require('react/addons');
var FilterMixin = require('../mixins/FilterMixin.jsx');

var PhoneBookEntry = React.createClass({
    mixins: [ FilterMixin ],
    propTypes: {
        /**
         * A unique identifier for this entry.
         */
        id:         React.PropTypes.number,
        firstname:  React.PropTypes.string,
        lastname:   React.PropTypes.string,
        number:     React.PropTypes.string
    },

    // ----- Handlers ----- //
    handleRemoveButton: function() {
        //Fire onRemove event, with the key that indicates the object that was removed.
        this.props.onRemove(this.props.id);
    },

    // ----- Render ----- //
    render : function() {
        return (
            <tr>
                <td>{this.props.firstname}</td>
                <td>{this.props.lastname}</td>
                <td>{this.phoneNumberFilter(this.props.number)}</td>
                <td><i className="glyphicon glyphicon-remove" onClick={this.handleRemoveButton}/></td>
            </tr>
            );
    }
});

module.exports = PhoneBookEntry;
