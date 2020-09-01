var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var waitTime = testInputs.elementTimeOut;
var EC = protractor.ExpectedConditions;
var until = protractor.ExpectedConditions;
var browserDetails = require('../com.sirius.reusables/browserDetails.js');
var utilities = require('../com.sirius.reusables/utilities.js');

let waitForElement = function (visibilityOfObject, maxWaitTime) {
  browser.wait(EC.presenceOf(visibilityOfObject), maxWaitTime).then(function () { })
};
module.exports.waitForElement = waitForElement;


let waitUtilElementPresent = function (visibilityOfObject, maxWaitTime) {
  var EC = protractor.ExpectedConditions;
  browser.manage().timeouts().implicitlyWait(2);
  browser.wait(function () {
    browser.manage().timeouts().implicitlyWait(3);
    return visibilityOfObject.isDisplayed()
      .then(
        function (isDisplayed) {
          browser.wait(EC.visibilityOf(visibilityOfObject), maxWaitTime, "Element taking more time to load");
          browser.manage().timeouts().implicitlyWait(3);
          return isDisplayed;
        },
        function (error) {
          return false;
        });
  }, 500000);
}
module.exports.waitUtilElementPresent = waitUtilElementPresent;


let scrollTo = function (webElementObj) {
  browser.executeScript("arguments[0].scrollIntoView(true)", webElementObj);
  browser.sleep(2000);
}
module.exports.scrollTo = scrollTo;

let attachScreenshot = function () {
  browser.takeScreenshot().then(function (png) {
    allure.createAttachment('Screenshot', function () {
      return new Buffer(png, 'base64')
    }, 'image/png')();
  });
}
module.exports.attachScreenshot = attachScreenshot;


let failureScreenshot = function () {
  //console.log("gggggg", "failureScreenshot")
  var spec = jasmine.getEnv().currentSpec;
  //console.log("spec", spec);
  var passed = jasmine.spec.results().passed();
  //console.log("passed", passed);
  if (!passed) {
   // console.log("passed", "Suresh");
    browser.takeScreenshot().then(function (png) {
      allure.createAttachment('Screenshot', function () {
        return new Buffer(png, 'base64')
      }, 'image/png')();
    });
  }
}
module.exports.failureScreenshot = failureScreenshot;

let pageWait = function () {
  browser.controlFlow().execute(function () {
    browser.driver.manage().timeouts().implicitlyWait(20);
  })
}
module.exports.pageWait = pageWait;

let pageWaitSec = function (timeSec) {
  // browser.manage().timeouts().implicitlyWait(timeSec);
  browser.sleep(timeSec * 1000);
}
module.exports.pageWaitSec = pageWaitSec;


let log = function (message) {
  browser.controlFlow().execute(function () {
   // console.log(message);
  });
}
module.exports.log = log;


let navigatepageback = function () {
  browser.navigate().back();
  browser.sleep(2000);
}
module.exports.navigatepageback = navigatepageback;

let click = function (element) {
  //browser.actions().mouseMove(element).click().perform();
  browser.executeScript("arguments[0].click();", element)

}
module.exports.click = click;

let mouseclick = function (element) {
  browser.manage().timeouts().implicitlyWait(3);
  browser.actions().mouseMove(element).click().perform();
}
module.exports.mouseclick = mouseclick;


let navigatepageBackDesktop = function () {
  if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') { } else {
    browser.navigate().back();
  }
}
module.exports.navigatepageBackDesktop = navigatepageBackDesktop;

let HighlightElement = function (el) {
  return browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", el.getWebElement(), "color: Red; border: 1px solid red;").
    then(function (resp) {
      browser.sleep(2000);
      return el;
    }, function (err) { });
}
module.exports.HighlightElement = HighlightElement;