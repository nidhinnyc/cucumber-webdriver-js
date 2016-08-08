module.exports = function(){
    this.World = require('../support/world.js').World;
    
     this.Given(/^I have navigated to the Google Search page$/, function (callback) {

         // Write code here that turns the phrase above into concrete actions
         var bwr = this.browser.get('https://www.yahoo.com');
         bwr.manage().window().maximize();
       });
};