var PhoneBookApp = require('../react_apps/phonebook/PhonebookApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
    <Route handler={PhoneBookApp}>
        <Route name="/" handler={PhoneBookApp}/>
    </Route>
);

Router.run(Routes, function (Handler) {
    React.render(<Handler/>, content);
});
