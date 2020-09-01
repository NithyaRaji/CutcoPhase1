var launcher = require('../com.sirius.reusables/launcher.js');
var loginApp = require('../com.sirius.reusables/login.js');
var homePage = require('../com.sirius.reusables/homePage.js');
var productDetails = require('../com.sirius.reusables/productDetail.js');
var shoppingCartPage = require('../com.sirius.reusables/shoppingCartPage.js');
var testInputs = require('../com.sirius.testData/data.json');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var searchPage = require('../com.sirius.reusables/search.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var addressPage = require('../com.sirius.reusables/addressPage.js');
var shippingPage = require('../com.sirius.reusables/shippingPage.js');
var paymentpage = require('../com.sirius.reusables/paymentPage.js');
const browserDetails = require('../com.sirius.reusables/browserDetails.js');



describe('RA-2930 - In Vector US, Verify the pricing setups are Credit Card (default) and Commission', function () {


    beforeEach(function () {
        launcher.launchApplication();
    })

    it('RA-2930 - Context Switcher - Vector US', function () {
        loginApp.AdminloginAppDefault();
        homePage.verfiyHomePage();
        homePage.switchToVectorUS();
        homePage.selectLITFromLeftNavigation();

        shoppingCartPage.configSelect();
        expect(element(by.css("#btn_pricing_CC_config")).isSelected());
        expect(element(by.xpath("//p[contains(text(),'Note: Credit Card pricing is shown (5% discount)')]")).isDisplayed());
        shoppingCartPage.configUpdate();

        browser.refresh();

        
       expect(element(by.css('.product-carousel-slide')).isPresent()).toBeFalsy();
        
        
        reportInfo.log('Script completed');
    }, testInputs.scriptTimeOut)
   

});