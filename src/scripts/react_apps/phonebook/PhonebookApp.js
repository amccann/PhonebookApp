'use strict';

var React = require('react/addons');
var PhoneBook = require('../../react_components/phonebook/Phonebook');
var PhonebookData = require('../../model/PhonebookData');

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
