'use strict';

var React = require('react/addons');

var SearchBar = React.createClass({

    // ----- Handlers ----- //
    handleTextChange: function() {
        var textInputValue = this.refs.textInput.getDOMNode().value;

        var matcher = function(textInputValue, other) {
            if(textInputValue.trim() == "") {
                return true;
            } else {
                if(other.indexOf(textInputValue) != -1) {
                    return true;
                }
            }
        }.bind(this, textInputValue)

        this.props.onSearchChange(matcher);
    },

    // ----- Render ----- //
    render : function() {
        return <input type="text" placeholder="Search Parameters..." ref="textInput" onChange={this.handleTextChange}/>;
    }
});

module.exports = SearchBar;
