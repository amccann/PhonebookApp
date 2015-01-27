'use strict';

var React = require('react/addons');
var RouteHandler = require("react-router").RouteHandler;

var MainApp = React.createClass({
    render: function () {
        return (
            <RouteHandler/>
        );
    }
});

module.exports = MainApp;
