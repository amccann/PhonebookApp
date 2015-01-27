'use strict';

var React = require('react/addons');
var PhoneBook = require('../../react_components/phonebook/Phonebook.jsx');
var PhonebookData = require('../../model/PhonebookData');

require("bootstrap-webpack");
require("../../../css/phonebook-app.css");

var PhoneBookApp = React.createClass({
    render: function() {
        return (
            <div className="phonebook-area">
                <PhoneBook dataSource={PhonebookData}/>
            </div>
        );
    }

});

module.exports = PhoneBookApp;
