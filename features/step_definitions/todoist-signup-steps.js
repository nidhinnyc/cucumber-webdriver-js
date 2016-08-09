'use strict';

var expect = require('chai').expect;

module.exports = function() {
  this.World = require('../support/world.js').World;

  this.Given(/^User access todoist.com$/, function(){
      return this.driver.get('https://todoist.com/');
  });

  this.When(/^User clicks on Sign up link$/, function () {

    return this.driver.findElement({ linkText: 'Sign up' })
      .click();

  });

  this.Then(/^Signup page should be shown with options to signup with Google and Email$/, function () {
    this.driver.switchTo().frame(this.driver.findElement(this.By.name('GB_frame')));
    this.driver.switchTo().frame(this.driver.findElement(this.By.id('GB_frame')));
    
    return this.driver.findElements({ id: 'submit_button' })
      .then(function(elements) {
        expect(elements.length).to.not.equal(0);
      });
  });

};
