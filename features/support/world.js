var driver = require('selenium-webdriver');

var World = function World(callback) {
  this.browser = new driver.Builder().withCapabilities(driver.Capabilities.chrome()).build(); // this.browser will be available in step definitions

};

exports.World = World;