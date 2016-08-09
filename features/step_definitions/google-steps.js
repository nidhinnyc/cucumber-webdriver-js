'use strict';

var expect = require('chai').expect;

module.exports = function() {
  this.World = require('../support/world.js').World;

  this.Given(/^User access Google$/, function(){
      return this.driver.get('http://www.google.com');
  });

  this.When(/^I search Google for "([^"]*)"$/, function (searchQuery) {

    this.driver.findElement({ name: 'q' })
      .sendKeys(searchQuery);
    return this.driver.findElement({ name: 'q' })
      .sendKeys(this.webdriver.Key.ENTER);
  });

  this.Then(/^I should see some results$/, function () {
    this.waitFor('div.g');
    return this.driver.findElements({ css: 'div.g' })
      .then(function(elements) {
        expect(elements.length).to.not.equal(0);
      });
  });

};
