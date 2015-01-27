'use strict';

var React = require('react/addons');
var SearchBar = require('../Searchbar');
var PhoneBookEntryList = require('./PhonebookEntryList');

var PhoneBook = React.createClass({
    // ----- API functions ----- //
    getInitialState: function() {
        return {
            entries: [],
            matcher: function() {return true;}
        };
    },
    componentWillMount: function() {
        this.getDataFromSource();
    },

    // ----- Handlers ----- //
    handleOnSearch: function(matcher) {
        this.setState({ matcher: matcher });
    },
    handleOnDataChanged: function(event) {
        var entry = event.entry;
        if(event.type === PhoneBookEntryList.Event.Remove) {
            this.props.dataSource.removeEntry(entry)
        } else if (event.type === PhoneBookEntryList.Event.Add) {
            this.props.dataSource.addEntry(entry);
        }

        this.getDataFromSource();
    },

    // ----- Helpers ----- //
    getDataFromSource: function() {
        this.props.dataSource.getData(function(entries) {
            this.setState({
                entries: entries
            });
        }.bind(this));
    },
    getMatchedEntries: function() {
        var matcher = this.state.matcher;
        var matchedEntries = [];
        this.state.entries.forEach(function(entry){
            if(matcher(entry.firstname) || matcher(entry.lastname) || matcher(entry.number)) {
                matchedEntries.push(entry);
            }
        });
        return matchedEntries;
    },

    // ----- Render ----- //
    render : function() {
        return (
            <div width="100%">
                <SearchBar onSearchChange={this.handleOnSearch} />
                <PhoneBookEntryList entries={this.getMatchedEntries()} onDataChange={this.handleOnDataChanged} />
            </div>
        );
    }
});

module.exports = PhoneBook;
