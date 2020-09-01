var browseObj = require('../com.sirius.pageObjects/browseByCategory_po');
var productDetailsObj = require('../com.sirius.pageObjects/productDetailsPage_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var browserDetails = require('../com.sirius.reusables/browserDetails.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');

var EC = protractor.ExpectedConditions;
var waitTimeout = 1000000;
// const {
//     expect
// } = require("chai");

let browseByCategory = function () {

    this.selectCategoryFromShopPage = function () {
        var browsePO = new browseObj();

        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.log('wait time out value');
            let EC = protractor.ExpectedConditions;
            utilities.pageWait();
            browser.wait(EC.not(EC.visibilityOf(element(by.xpath(".//ion-spinner"))), 1000000));
            element(by.xpath(".//ion-label[contains(.,'Catalog update failed')]")).isPresent().then(function (isVisible) {
                utilities.log("is visible value", isVisible);
                var value = (isVisible === true);
               // console.log("isvisible condition value", value);
                if (isVisible) {
                    utilities.log("Retry btn is displaying");
                    utilities.HighlightElement(element(by.xpath(".//ion-label[contains(.,' Catalog update failed')]")));
                    utilities.waitUtilElementPresent(browsePO.retryBtn, waitTimeout);
                    utilities.HighlightElement(browsePO.retryBtn);
                    browser.executeScript("document.getElementsByClassName('retry-btn button button-solid ion-activatable ion-focusable hydrated')[0].click();");
                    utilities.pageWait();
                    utilities.waitUtilElementPresent(browsePO.productName, waitTimeout);
                }
            });
        }
        utilities.waitForElement(browsePO.productName, waitTimeout);
        utilities.scrollTo(browsePO.productName);
        utilities.HighlightElement(browsePO.productName);
        reportInfo.log('Wait for the shop page to load completely');

        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'android' || browserDetails.executionName == 'ipad') {
            browsePO.productName.click();
            // browser.executeScript("document.getElementsByClassName('.card-native>div')[0].click();");
        } else {
            utilities.click(browsePO.productName);
        }
        reportInfo.log('Product name is clicked in Shop Category Page');
    }

    this.selectCategoryFromShopPage1 = function () {
        var browsePO = new browseObj();

        utilities.log("outside the conditions");
        utilities.waitUtilElementPresent(browsePO.productName, waitTimeout);
        utilities.HighlightElement(browsePO.productName, waitTimeout);
        utilities.scrollTo(browsePO.productName);
        utilities.HighlightElement(browsePO.productName);
        reportInfo.log('Wait for the shop page to load completely');
        browsePO.productName.click();
        reportInfo.log('Product name is clicked in Shop Category Page');
        browser.sleep(3000);
    }

    this.selectCategoryFromSetPage = function () {
        var productDetailsPO = new productDetailsObj();

        utilities.waitUtilElementPresent(productDetailsPO.productGrid, waitTimeout);
        reportInfo.log('Wait for the product set page to load completely');
        utilities.waitForElement(productDetailsPO.productGrid, waitTimeout);
        utilities.HighlightElement(productDetailsPO.productGrid);
        productDetailsPO.productGrid.click();

        // Adding a product to the cart from product details page
        utilities.waitForElement(productDetailsPO.carousalImageVerify, waitTimeout);
    }

    this.oneAvailableAttributePage = function () {
        var browsePO = new browseObj();

        // Navigate to 1 available attribute product page through search
        utilities.waitForElement(browsePO.productName, waitTimeout);
        browser.wait(EC.elementToBeClickable(browsePO.productName), waitTimeout);

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.wait(EC.elementToBeClickable(browsePO.searchOptionMobile), waitTimeout);
            utilities.HighlightElement(browsePO.searchOptionMobile);
            // browsePO.searchOptionMobile.click();
            browser.executeScript("document.getElementsByName('search')[1].click()");
            reportInfo.log('Click on the search option in the shop page');
            utilities.waitForElement(browsePO.searchInputMobile, waitTimeout);
            browser.wait(EC.elementToBeClickable(browsePO.searchInputMobile), waitTimeout);
            browsePO.searchInputMobile.click();
            browsePO.searchInputMobile.sendKeys('7918CD');
            reportInfo.log('Search term is entered in the search text field');
            utilities.attachScreenshot();
        }
        if (browserDetails.browserName == 'chrome' || browserDetails.browserName == 'Safari') {
            utilities.waitForElement(browsePO.searchInput, waitTimeout);
            browser.wait(EC.elementToBeClickable(browsePO.searchInput), waitTimeout);
            browsePO.searchInput.click();
            browsePO.searchInput.sendKeys('7918CD');
            reportInfo.log('Search term is entered in the search text field');
            utilities.attachScreenshot();
        }
    }

    this.searchResultDisplay = function () {
        var browsePO = new browseObj();

        //Wait for the serach result to be display
        browser.wait(EC.visibilityOf(browsePO.searchResult), waitTimeout);
        utilities.waitForElement(browsePO.searchResult, waitTimeout);
        utilities.attachScreenshot();
        reportInfo.log('Wait for the search result to load completely');
        // expect(browsePO.searchResult).to.exist;
        browsePO.searchResult.click();
    }


    this.handlePopupCutcoHome = function () {
        var browsePO = new browseObj();
        var shoppingCartPage_po = new shoppingCartObj();
        var mobiledevice = browserDetails.executionName;
        // console.log(mobiledevice);
        // if ( browserDetails.executionName !== 'iphone') {
        // if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
        //     console.log("tour navigation disabled for mobile devices");
        // }
        // else {   
        utilities.waitUtilElementPresent(browsePO.popupNextButton);
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        // utilities.HighlightElement(browsePO.popupNextButton);
        // browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupDoneButton);
        browsePO.popupDoneButton.click();
        browser.sleep(5000);
        utilities.waitUtilElementPresent(browsePO.popupNextButton, waitTimeout);
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupDoneButton);
        browsePO.popupDoneButton.click();
        utilities.HighlightElement(shoppingCartPage_po.cancelConfig);
        shoppingCartPage_po.cancelConfig.click();
        // if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
        //     utilities.waitUtilElementPresent(shoppingCartPage_po.cancelConfig, waitTimeout);
        //     utilities.HighlightElement(shoppingCartPage_po.cancelConfig);
        //     shoppingCartPage_po.cancelConfig.click();
        //  }
        //   }
    }

    this.handlePopupCutcoVector = function () {
        var browsePO = new browseObj();
        var shoppingCartPage_po = new shoppingCartObj();
        var mobiledevice = browserDetails.executionName;
        //console.log(mobiledevice);
        // if ( browserDetails.executionName !== 'iphone') {
        // if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
        //     console.log("tour navigation disabled for mobile devices");
        // }
        // else {
        utilities.waitUtilElementPresent(browsePO.popupNextButton);
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        // utilities.HighlightElement(browsePO.popupNextButton);
        // browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupDoneButton);
        browsePO.popupDoneButton.click();
        browser.sleep(3000);
        utilities.waitUtilElementPresent(browsePO.popupNextButton, waitTimeout);
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupDoneButton);
        browsePO.popupDoneButton.click();
        utilities.HighlightElement(shoppingCartPage_po.cancelConfig);
        shoppingCartPage_po.cancelConfig.click();
        // if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
        //     utilities.waitUtilElementPresent(shoppingCartPage_po.cancelConfig, waitTimeout);
        //     utilities.HighlightElement(shoppingCartPage_po.cancelConfig);
        //     shoppingCartPage_po.cancelConfig.click();
        // }
        // }
    }

    this.handlePopup = function () {
        var browsePO = new browseObj();
        var mobiledevice = browserDetails.executionName;
        // console.log(mobiledevice);
        // if ( browserDetails.executionName !== 'iphone') {
        // if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
        //     console.log("tour navigation disabled for mobile devices");
        // }
        // else {  
        utilities.pageWaitSec(5);  
        utilities.waitUtilElementPresent(browsePO.popupNextButton); 
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupNextButton);
        browsePO.popupNextButton.click();
        utilities.HighlightElement(browsePO.popupDoneButton);
        browsePO.popupDoneButton.click();
         //  }
        // }
    }

    this.categoryCarouselImageAddProduct = function () {
        var browsePO = new browseObj();
        var productDetailsPO = new productDetailsObj();

        //Wait for the carousel image in category landing page
        utilities.HighlightElement(browsePO.searchResultImage);
        utilities.waitUtilElementPresent(browsePO.searchResultImage, waitTimeout);
        reportInfo.log('Wait for the carousel image to load completely');
        browsePO.searchResultImage.click();

        //Check for the carousel image and check for displayed
        utilities.waitUtilElementPresent(productDetailsPO.carousalImageVerify, waitTimeout);
        utilities.waitForElement(productDetailsPO.productDetailInfo, waitTimeout);
        // expect(productDetailsPO.productDetailInfo).to.exist;
        utilities.attachScreenshot();

        //productDetailsPO.productAttributeContainers.isPresent();
        // expect(productDetailsPO.productAttributeContainers).to.exist;
        reportInfo.log('Product Attribute containers are verified in the product details page');
        utilities.waitForElement(productDetailsPO.productAttributeContainers, waitTimeout);
    }

    async function retryButton() {
        const retryBtn = document.getElementsByClassName('retry-btn button button-solid ion-activatable ion-focusable hydrated')[0];
        retryBtn.shadowRoot.querySelector('button').click();
    }
}
module.exports = new browseByCategory();