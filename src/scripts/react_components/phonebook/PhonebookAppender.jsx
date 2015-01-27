'use strict';

var React = require('react/addons');
var FilterMixin = require('../mixins/FilterMixin.jsx');

var PhoneBookAppender = React.createClass({
    mixins: [ FilterMixin ],
    propTypes: {
        /**
         * Optional handler that is called when a phone book entry is submitted. The handler sends an object with the
         * type <PhoneBookPropTypes.entry>
         */
        onSubmit: React.PropTypes.func
    },

    getInitialState: function() {
        return {firstname: "" , lastname: "", number: ""};
    },

    // ----- Handlers ----- //
    handleSaveButton: function() {
        var firstName = this.refs.firstNameInput.getDOMNode().value;
        var lastName = this.refs.lastNameInput.getDOMNode().value;
        var number = this.refs.numberInput.getDOMNode().value;

        this.reset();
        this.props.onSubmit({firstname: firstName,lastname: lastName, number: number});
    },
    handleInputChange: function(stateVar, e) {
        var nextState = {};
        nextState[stateVar] = stateVar == "number" ? this.phoneNumberFilter(e.target.value) : e.target.value;
        this.setState(nextState);
    },

    // ----- Helpers ----- //
    reset: function() {
        this.replaceState(this.getInitialState());
    },

    // ----- Render ----- //
    render : function() {
        return (
            <tr>
                <td><input value={this.state.firstname} type="text" placeholder="First Name" ref="firstNameInput" onChange={this.handleInputChange.bind(this, "firstname")}/></td>
                <td><input value={this.state.lastname} type="text" placeholder="Last Name" ref="lastNameInput" onChange={this.handleInputChange.bind(this, "lastname")}/></td>
                <td><input value={this.state.number} type="text" placeholder="Number" ref="numberInput" onChange={this.handleInputChange.bind(this, "number")}/></td>
                <td><i className="glyphicon glyphicon-plus" onClick={this.handleSaveButton}/></td>
            </tr>
        );
    }
});

module.exports=PhoneBookAppender;
