var React = require('react');
var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute;

var PhoneBookApp = require('../react_apps/phonebook/PhonebookApp.jsx');
var ContactsApp = require('../react_apps/contacts/ContactsApp.jsx');
var MainApp = require('../react_apps/MainApp.jsx');


var content = document.getElementById('content');

var Routes = (
    <Route name="/app" handler={MainApp}>
        <Route name="contacts" path="/contacts" handler={ContactsApp}/>
        <DefaultRoute handler={PhoneBookApp}/>
    </Route>

);

Router.run(Routes, function (Handler) {
    React.render(<Handler/>, content);
});
