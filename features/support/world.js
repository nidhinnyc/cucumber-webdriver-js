'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver;
require('chromedriver');

var buildChromeDriver = function() {
  return new webdriver.Builder().
    //withCapabilities(webdriver.Capabilities.chrome()).
    forBrowser('chrome').
    build();
};

var getDriver = function() {
   driver = buildChromeDriver();
   driver.manage().window().maximize();
  return driver;
};

var World = function World() {

  var defaultTimeout = 20000;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.driver = driver;
  this.By = By;
  this.until = until;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

  this.waitFor = function(locator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: locator });
    }, waitTimeout);
  };
};

module.exports.World = World;
module.exports.getDriver = getDriver;
