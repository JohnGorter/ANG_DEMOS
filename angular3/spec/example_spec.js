'use strict';
var fs = require('fs');

var Utils = {

    /**
     * @name screenShotDirectory
     * @description The directory where screenshots will be created
     * @type {String}
     */
    screenShotDirectory: 'test/results/',

    /**
     * @name writeScreenShot
     * @description Write a screenshot string to file.
     * @param {String} data The base64-encoded string to write to file
     * @param {String} filename The name of the file to create (do not specify directory)
     */
    writeScreenShot: function (data, filename) {
        var stream = fs.createWriteStream(this.screenShotDirectory + filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

};

describe('angularjs homepage', function() {
  /**
 * Automatically store a screenshot for each test.
 */
afterEach(function () {
    var currentSpec = jasmine.getEnv().currentSpec,
        passed = currentSpec.results().passed();

    browser.takeScreenshot().then(function (png) {
        browser.getCapabilities().then(function (capabilities) {
            var browserName = capabilities.caps_.browserName,
                passFail = (passed) ? 'pass' : 'FAIL',
                filename = browserName + ' ' + passFail + ' - ' + currentSpec.description + '.png';

            Utils.writeScreenShot(png, filename);
        });
    });
});


  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');
 
   browser.debugger();
    console.log("logging element");
    console.log(element.all(by.repeater('todo in todos')));
   browser.debugger();
   
      todoList = element.all(by.repeater('todo in todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an angular app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
    
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });
});
