'use strict';

var React = require('react/addons');
var PhoneBook = require('../../react_components/phonebook/Phonebook.jsx');
var PhonebookData = require('../../model/PhonebookData');

require("bootstrap-webpack");

var PhoneBookApp = React.createClass({
    render: function() {
        return (
            <div style={{margin: "auto", width: "500px"}}>
                <PhoneBook dataSource={PhonebookData}/>
            </div>
        );
    }

});

module.exports = PhoneBookApp;
