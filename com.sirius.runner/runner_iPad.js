let date = new Date() + "";
date = date.substr(0, date.indexOf(" GMT"));
let browserStartGlobal;
var testSuitConfig = {};
var testSuite = require('../com.sirius.testData/testSuite.json');

for (var prop in testSuite) {
  if (Object.prototype.hasOwnProperty.call(testSuite, prop) && prop !== 'basePath') {
    let testScript = [];
    for (let i = 0; i < testSuite[prop].length; i++) {
      let scriptPath = testSuite.basePath + testSuite[prop][i];
      testScript.push(scriptPath);
    }
    testSuitConfig[prop] = testScript;
  }
  testSuitConfig;
}

exports.config = {
  multiCapabilities:
    [
      {
        seleniumAddress: "http://127.0.0.1:4730/wd/hub",
        browserName: '',
        platformName: "iOS",
        platformVersion: "12.2",
        deviceName: "Mason Adams’s iPad",
        udid: "00008027-001471892EE3002E",
        app: process.cwd() +"/e2e/com.sirius.library/Apps/Cutco.ipa",
        bundleId: "com.cutco.rep",
        autoWebviewTimeout: 100000,
        autoWebview: true,
        automationName: "XCUITest",
        nativeWebTap: true,
        usePrebuiltWDA: true,
        nativeWebScreenshot: true,
        startIWDP: true,
        name: 'ipad',
        clearSystemFiles: true
      }
    ],

  framework: 'jasmine2',
  
 suites: {
    regression: testSuitConfig.regression,
    adjustTotal: testSuitConfig.adjustTotal,
    bonus: testSuitConfig.bonus,
    checkout: testSuitConfig.checkout,
    engrave: testSuitConfig.engrave,
    giftCard: testSuitConfig.giftCard,
    login: testSuitConfig.login,
    masquerade: testSuitConfig.masquerade,
    orderConfig: testSuitConfig.orderConfig,
    pendingOrder: testSuitConfig.pendingOrder,
    orderConfirmation: testSuitConfig.orderConfirmation,
    productLandingPage: testSuitConfig.productLandingPage,
    saveOrder: testSuitConfig.saveOrder,
    search: testSuitConfig.search,
    shoppingCart: testSuitConfig.shoppingCart,
    smoke: testSuitConfig.smoke,
    switchContext: testSuitConfig.switchContext,
    customerSearch: testSuitConfig.customerSearch,
    test: testSuitConfig.test,
    bvt: testSuitConfig.bvt
  },


  restartBrowserBetweenTests: true,
  allScriptsTimeout: 40000,
  getPageTimeout: 50000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },

  onPrepare: function () {

    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultDir: '../../Cutco_Framework/allure-results/',
    }));
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

  }

};