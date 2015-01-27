'use strict';

var React = require('react/addons');
var PhoneBookEntry = require('./PhonebookEntry.jsx');
var PhoneBookPropTypes = require('./misc/PhonebookProptypes.jsx');
var PhoneBookAppender = require('./PhonebookAppender.jsx');

var PhoneBookEntryList = React.createClass({
    statics: {
        /*Enum*/ Event: {
            Remove: {toString: "Remove"},
            Add:    {toString: "Add"}
        }
    },
    propTypes: {
        /**
         * Optional handler that is called when data changes. This handler sends an object with the following format:
         * {
         *  type: <PhoneBookEntryList.Event.Remove or PhoneBookEntryList.Event.Add>,
         *  entry: An entry in the format of <PhoneBookPropTypes.entry>
         * }
         */
        onDataChange: React.PropTypes.func,

        /**
         * An array of <PhoneBookPropTypes.entry>
         */
        entries: React.PropTypes.arrayOf(
           PhoneBookPropTypes.entry
        ).isRequired
    },

    // ----- Handlers ----- //
    handleOnRemove: function(index) {
        this.props.onDataChange({type: PhoneBookEntryList.Event.Remove, entry: this.props.entries[index]})
    },
    handleOnSubmit: function(entry) {
        this.props.onDataChange({type: PhoneBookEntryList.Event.Add, entry: entry});
    },

    // ----- Render ----- //
    render : function() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr><th>First Name</th><th>Last Name</th><th>Number</th></tr>
                </thead>
                <tbody>
                    {this.props.entries.map(function(entry, index){
                        return <PhoneBookEntry firstname={entry.firstname} lastname={entry.lastname} number={entry.number} id={index} key={index} onRemove={this.handleOnRemove}/>
                    }.bind(this))}
                    <PhoneBookAppender onSubmit={this.handleOnSubmit}/>
                </tbody>
            </table>
        );
    }
});

module.exports = PhoneBookEntryList;
