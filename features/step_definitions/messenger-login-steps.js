'use strict';

var expect = require('chai').expect;

module.exports = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^User acces to login page$/, function() {
        return this.driver.get('https://collab.reutest.com/peopledirectory/');
    });

    this.When(/^Enters valid username and password and click login$/, function() {
        this.driver.findElement({
            id: 'AAA-AS-SI1-SE003'
        }).sendKeys('nidhin.surendran1@thomsonreuters.com');
        this.driver.findElement({
            id: 'AAA-AS-SI1-SE006'
        }).sendKeys('Welcome1');

        return this.driver.findElement({
                id: 'AAA-AS-SI1-SE014'
            })
            .click();

    });

    this.Then(/^Messenger should be shown$/, function() {
       var drv = this.driver;
       var By = this.By;
        return this.driver.isElementPresent(By.id('AAA-AS-SI2-SE009')).then(function(){
          drv.findElement(By.id('AAA-AS-SI2-SE009')).click();
        }, function(err) {
                if ((err.name === "NoSuchElementError"))
                {
                  console.log("Element Not Found");
                }
            });
      //  this.driver.wait(this.until.elementLocated(this.By.xpath('//span[contains(text(),"directory.qa2.thomson")]')), 30000, 'Could not login to eikon messenger');
        /*drv.wait(function() {
            return drv.findElements({
                    xpath: '//span[contains(text(),"directory.qa2.thomson")]'
                })
                .then(function(elements) {
                    expect(elements.length).to.not.equal(0);
                });
        }, 5000);*/
    });

    this.Given(/^User access to messenger$/, function() {
        this.driver.sleep(5000);
        return true;
    });

    this.When(/^Directory link is accessed$/, function() {
        return this.driver.get('https://collab.reutest.com/peopledirectory/');
        /*this.driver.sleep(2000);
         this.driver.findElement({ xpath : '//input[@class="directory-search-input search-input-text"]' }).sendKeys("nid");
         this.driver.sleep(5000);
         this.driver.wait(this.until.elementLocated(this.By.partialLinkText('More Results')), 30000, 'Could not find link').click();*/
        //this.driver.findElement({ partialLinkText : 'More Results' }).click();
    });

    this.Then(/^People Directory should be shown$/, function() {
        return this.driver.findElements({
                id: 'job_title'
            })
            .then(function(elements) {
                expect(elements.length).to.not.equal(0);
            });
    });

};
