'use strict';

describe('PhoneBookApp', function () {
  var React = require('react/addons');
  var PhoneBookApp, component;

  beforeEach(function () {
    PhoneBookApp = require('../../../src/scripts/react_components/PhoneBookApp.js');
    component = React.createElement(PhoneBookApp);
  });

  it('should create a new instance of PhoneBookApp', function () {
    expect(component).toBeDefined();
  });
});
