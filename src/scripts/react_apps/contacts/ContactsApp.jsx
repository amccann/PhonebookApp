'use strict';

var React = require('react/addons');
var Contacts = require("../../react_components/contacts/Contacts.jsx");
var Link = require("react-router").Link;

require("bootstrap-webpack");
require("../../../css/contacts-app.css");

var ContactsApp = React.createClass({
    render: function() {
        return (
            <div className="contacts-area">
                <Contacts/>
                <div>Contact page is not implemented yet; get off my <Link to="/app">back</Link>!</div>
            </div>
        );
    }

});

module.exports = ContactsApp;
