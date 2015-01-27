'use strict';

//Mocked framework for communicating with "server".
var PhonebookData = {
    data: [
        {firstname: "Jenny",    lastname: "??",         number: "17078675309"},
        {firstname: "Mr.",      lastname: "Plow",       number: "7805553226"},
        {firstname: "Gene",     lastname: "Parmesan",   number: "780-555-0113"},
        {firstname: "The",      lastname: "Doctor",     number: "07700900461"},
    ],
    addEntry: function(entry) {
        this.data.push(entry);
    },
    removeEntry: function(entry) {
        this.data = this.data.filter(function(element){
            return element.firstname !== this.firstname ||
                    element.lastname !== this.lastname ||
                    element.number !== this.number;
        }, entry);
    },
    getData: function(callback) {
        callback(this.data);
    }

}

module.exports = PhonebookData;
