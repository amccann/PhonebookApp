'use strict';

var FilterMixin = {
    phoneNumberFilter : function(number) {
        var filteredNumber = number.replace(/\D+/g, '').substr(0, 11);

        if(filteredNumber.length == 11) {
            return filteredNumber.substr(0, 1) + " " + this.phoneNumberFilter(filteredNumber.substr(1));
        } else if(filteredNumber.length == 10) {
            return "(" + filteredNumber.substr(0, 3) + ") " + filteredNumber.substr(3, 3) + "-" + filteredNumber.substr(6);
        } else {
            return filteredNumber;
        }
    }
};

module.exports = FilterMixin;
