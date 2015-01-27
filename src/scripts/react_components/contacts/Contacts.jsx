'use strict';

var React = require('react/addons');

var frog = require("../../../images/cartoon_frog_head_green.png")

var Contacts = React.createClass({
    // ----- Render ----- //
    render : function() {
        return (
            <div>
                <div><img src={frog}/></div>
            </div>
        );
    }
});

module.exports = Contacts;
