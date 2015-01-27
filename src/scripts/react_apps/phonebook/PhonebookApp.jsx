'use strict';

var React = require('react/addons');
var PhoneBook = require('../../react_components/phonebook/Phonebook.jsx');
var PhonebookData = require('../../model/PhonebookData');
var Link = require("react-router").Link;

require("bootstrap-webpack");
require("../../../css/phonebook-app.css");

var PhoneBookApp = React.createClass({
    render: function() {
        return (
            <div className="phonebook-area">
                <Link to="contacts">To Contacts</Link>
                <hr/>
                <PhoneBook dataSource={PhonebookData}/>
            </div>
        );
    }

});

module.exports = PhoneBookApp;
