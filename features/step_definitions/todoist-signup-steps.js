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

  this.When(/^User enters details and click signup$/, function(){
    this.driver.findElement({ id: 'full_name' }).sendKeys('Nidhins');
    this.driver.findElement({ id: 'email' }).sendKeys('Nidhins' + Math.floor((Math.random() * 1000) + 1) + '@ypmail.com');
    this.driver.findElement({ id: 'password' }).sendKeys('Welcome1');
    return this.driver.findElement({ id: 'submit_button' })
      .click();
  });

  this.Then(/^Signup success message should be shown$/, function(){
    return this.driver.findElements({ xpath: '//h1[contains(text(),"Hi, Nidhin")]' })
      .then(function(elements) {
        expect(elements.length).to.not.equal(0);
      });
  });

};
