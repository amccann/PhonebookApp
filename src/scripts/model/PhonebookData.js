'use strict';

var jquery = require("jquery");

var restEndpoint = "http://localhost:3000/phonebook/";

var PhonebookData = {
    addEntry: function(entry, callback) {
        jquery.ajax({url: restEndpoint, type:"POST", data: entry, complete: callback});
    },
    removeEntry: function(entry, callback) {
        jquery.ajax({url: restEndpoint + entry._id, type:"DELETE", complete: callback});
    },
    getData: function(callback) {
        jquery.get(restEndpoint, callback)
    }
};

module.exports = PhonebookData;
