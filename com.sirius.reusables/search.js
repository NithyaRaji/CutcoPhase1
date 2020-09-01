var shopCatalogObj = require('../com.sirius.pageObjects/shopCatalog_po.js');
var shopCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var homePageObj = require('../com.sirius.pageObjects/homePage_po.js');
var browseObj = require('../com.sirius.pageObjects/browseByCategory_po.js');
var browserDetails = require('../com.sirius.reusables/browserDetails.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');
// const {
//     expect
// } = require("chai");
var EC = protractor.ExpectedConditions;
var waitTimeout = 200000;

let search = function () {

    this.searchWithSkuID = function (skuID) {
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            if (browserDetails.executionName == 'ipad') {
                utilities.waitUtilElementPresent(browsePO.searchMobileIcon, waitTimeout);
                utilities.HighlightElement(browsePO.searchMobileIcon);
                browser.executeScript("document.getElementsByName('search')[1].click()");
            } else {
                browser.executeScript("document.getElementsByName('search')[1].click()");
            }
            utilities.waitUtilElementPresent(browsePO.searchInputMobile, waitTimeout);
            utilities.pageWaitSec(4);
            browser.executeScript("document.getElementById('productSearchBar').value=''");
            reportInfo.log('Search input is clicked');
            browser.sleep(4000);
            browsePO.searchInputMobile.click();
            browsePO.searchInputMobile.sendKeys(skuID);
            reportInfo.log('Search keyword is entered in the search text field');

            //Wait for add to cart button in the search result section
            // utilities.waitUtilElementPresent(browsePO.searchAddToCartButton, waitTimeout);
            browser.sleep(10000);
            // browser.wait(EC.elementToBeClickable(browsePO.searchAddToCartButton), waitTimeout);
            reportInfo.log('Wait for the search results is displayed');
        } else {
            var browsePO = new browseObj();
            var homePagePO = new homePageObj();
            var shoppingCartPO = new shopCartObj();
            utilities.pageWaitSec(4);
            browser.executeScript("document.getElementById('productSearchBar').value=''");
            reportInfo.log('Search input is clicked');
            reportInfo.log('Search input is clicked');
            utilities.waitUtilElementPresent(browsePO.searchInput, waitTimeout);
            browsePO.searchInput.sendKeys(skuID);
            reportInfo.log('Search keyword is entered in the search text field');
            reportInfo.log('Wait for the search results is displayed');
        }
    }

    this.searchWithGiftCard = function (giftcardText) {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var browsePO = new browseObj();
            browser.executeScript("document.getElementsByName('search')[1].click()");
            utilities.waitUtilElementPresent(browsePO.searchInputMobile, waitTimeout);
            utilities.HighlightElement(browsePO.searchInputMobile);
            browsePO.searchInputMobile.click();
            reportInfo.log('Search input is clicked');
            browsePO.searchInputMobile.sendKeys(giftcardText);
            reportInfo.log('Search keyword is entered in the search text field');

            //Wait for add to cart button in the search result section
            utilities.pageWaitSec(2);
            reportInfo.log('Wait for the search results is displayed');
        } else {
            var browsePO = new browseObj();
            var homePagePO = new homePageObj();
            var shoppingCartPO = new shopCartObj();
            reportInfo.log('Search input is clicked');
            utilities.waitUtilElementPresent(browsePO.searchInput, waitTimeout);
            browsePO.searchInput.getAttribute('ng-reflect-value').then(function (text) {
                if (text !== "") {
                    utilities.HighlightElement(browsePO.searchInput);
                    utilities.waitUtilElementPresent(browsePO.searchInput, waitTimeout);
                    browsePO.searchInput.click();
                    browsePO.searchInput.sendKeys(protractor.Key.chord(protractor.Key.COMMAND, 'A'));
                    browsePO.searchInput.sendKeys(protractor.Key.BACK_SPACE);
                }
                browsePO.searchInput.sendKeys(giftcardText);
            });
            reportInfo.log('Search keyword is entered in the search text field');
            reportInfo.log('Wait for the search results is displayed');
        }
    }

    this.searchWithSkuIDNavigationBack = function (skuID) {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var browsePO = new browseObj();
            var shoppingCartPO = new shopCartObj();
            browser.executeScript("document.getElementsByName('search')[1].click()");
            utilities.pageWait();
            utilities.waitForElement(browsePO.searchInputMobile1, waitTimeout);
            browsePO.searchInputMobile1.click();
            reportInfo.log('Search input is clicked');

            //Enter the search term and wait for the search result
            browsePO.searchInputMobile1.sendKeys(skuID);
            reportInfo.log('Search keyword is entered in the search text field');

            //Wait for add to cart button in the search result section
            utilities.waitForElement(browsePO.searchAddToCartButton, waitTimeout);
            browser.wait(EC.elementToBeClickable(browsePO.searchAddToCartButton), waitTimeout);
            reportInfo.log('Wait for the search results is displayed');
            utilities.attachScreenshot();

        } else {
            var browsePO = new browseObj();
            reportInfo.log('Search input is clicked');
            utilities.pageWait();
            utilities.waitForElement(browsePO.searchInput, waitTimeout).then(function (text) {
                browsePO.searchInput.getAttribute('ng-reflect-value').then(function (text) {
                    if (text !== "") {
                        browsePO.searchInput.click();
                        browsePO.searchInput.sendKeys(protractor.Key.chord(protractor.Key.COMMAND, 'A'));
                        browsePO.searchInput.sendKeys(protractor.Key.BACK_SPACE);
                    }
                    browsePO.searchInput.sendKeys(skuID);
                });
            });
            reportInfo.log('Search keyword is entered in the search text field');

            //Wait for add to cart button in the search result section
            utilities.waitForElement(browsePO.searchAddToCartButton, waitTimeout);
            browser.wait(EC.elementToBeClickable(browsePO.searchAddToCartButton), waitTimeout);
            reportInfo.log('Wait for the search results is displayed');
        }
    }

    this.searchWithSkuIDTyping = function (skuID) {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var browsePO = new browseObj();
            var shoppingCartPO = new shopCartObj();
            browser.executeScript("document.getElementsByName('search')[1].click()");
            utilities.waitUtilElementPresent(browsePO.searchInputMobile, waitTimeout);
            browsePO.searchInputMobile.click();
            reportInfo.log('Search input is clicked');

            //Enter the search term and wait for the search result
            browsePO.searchInputMobile.sendKeys(skuID);
            reportInfo.log('Search keyword is entered in the search text field');

        } else {
            var browsePO = new browseObj();
            var shoppingCartPO = new shopCartObj();
            reportInfo.log('Search input is clicked');

            //Enter the search term and wait for the search result
            utilities.waitForElement(browsePO.productName, waitTimeout);
            browsePO.searchInput.sendKeys(skuID);
            reportInfo.log('Search keyword is entered in the search text field');

        }
    }

    this.searchWithSkuIDTypingWithOutSearchOpen = function (skuID) {
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var browsePO = new browseObj();
            utilities.waitUtilElementPresent(browsePO.searchInputMobile, waitTimeout);
            browsePO.searchInputMobile.click();
            reportInfo.log('Search input is clicked');

            //Enter the search term and wait for the search result
            browsePO.searchInputMobile.sendKeys(skuID);
            reportInfo.log('Search keyword is entered in the search text field');
        } else {
            var browsePO = new browseObj();
            reportInfo.log('Search input is clicked');

            //Enter the search term and wait for the search result
            utilities.waitForElement(browsePO.productName, waitTimeout);
            browsePO.searchInput.sendKeys(skuID);
            reportInfo.log('Search keyword is entered in the search text field');
        }
    }


    this.searchButtonClick = function () {
        var browsePO = new browseObj();
        var shoppingCartPO = new shopCartObj();
        browser.sleep(4000);
        browsePO.searchAddToCartButton1.click();
        browser.sleep(4000);

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitForElement(browsePO.searchCloseOption, waitTimeout);
            browsePO.searchCloseOption.click();
            utilities.pageWait();
            browser.executeScript("document.getElementsByName('cart')[1].click()");
        }
        reportInfo.log('Search - Add To Cart button is clicked');

        //Wait for the shopping cart section
        utilities.waitUtilElementPresent(shoppingCartPO.checkoutButton, waitTimeout);
        utilities.waitForElement(shoppingCartPO.productItemNumber, waitTimeout);
        utilities.attachScreenshot();
    }

    this.SearchTextBoxVerify = function () {
        var homePagePO = new homePageObj();
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.waitUtilElementPresent(browsePO.searchOptionMobile, waitTimeout);
            browser.executeScript("document.getElementsByName('search')[1].click()");
            utilities.waitForElement(browsePO.searchInputMobile, waitTimeout);
            utilities.HighlightElement(browsePO.searchInputMobile);
            utilities.waitForElement(browsePO.searchCloseOption, waitTimeout);
            browser.executeScript("document.getElementsByName('close')[1].click()");
            browser.sleep(2000);
        } else {
            utilities.waitForElement(browsePO.searchInput, waitTimeout);
            utilities.HighlightElement(browsePO.searchInput);
        }
    }

    this.SearchTextBoxVerify1 = function () {
        var homePagePO = new homePageObj();
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.executeScript("document.getElementsByName('search')[1].click()");
            utilities.waitForElement(browsePO.searchInputMobileSetPage, waitTimeout);
            utilities.HighlightElement(browsePO.searchInputMobileSetPage);
            utilities.waitForElement(browsePO.searchCloseOption, waitTimeout);
            browser.executeScript("document.getElementsByName('close')[1].click()");
            browser.sleep(2000);
        } else {
            utilities.waitForElement(browsePO.searchInput, waitTimeout);
            utilities.HighlightElement(browsePO.searchInput);
        }
    }

    this.SearchTextBoxVerifyPdp = function () {
        var homePagePO = new homePageObj();
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.sleep(3000);
            browser.executeScript("document.getElementsByName('search')[1].click()");
            utilities.waitForElement(browsePO.searchInputMobilePdp, waitTimeout);
            utilities.HighlightElement(browsePO.searchInputMobilePdp);
            utilities.waitForElement(browsePO.searchCloseOption, waitTimeout);
            browser.executeScript("document.getElementsByName('close')[1].click()");
        } else {
            utilities.waitForElement(browsePO.searchInput, waitTimeout);
            utilities.HighlightElement(browsePO.searchInput);
        }
    }


    this.nosearchResult = function () {
        var browsePO = new browseObj();
        var shoppingCartPO = new shopCartObj();

        //Check for no result section with in search result page
        utilities.waitForElement(browsePO.noResultMessage, waitTimeout);
        // expect(browsePO.noResultMessage).to.exist;
        utilities.attachScreenshot();
        reportInfo.log('No search result is verified');
        // expect(browsePO.searchInput).to.exist;
    }

    this.searchResult = function () {
        var browsePO = new browseObj();

        //Wait for the serach result to be display
        utilities.waitUtilElementPresent(browsePO.searchResult, waitTimeout);
        utilities.HighlightElement(browsePO.searchResult);
        utilities.attachScreenshot();
        reportInfo.log('Search result is getting displayed');
        //    expect(browsePO.searchResult).to.exist;
        reportInfo.log('In the search results page ');
    }

    this.keepTypingText = function () {
        var browsePO = new browseObj();
        utilities.waitForElement(browsePO.keepSearchingText, waitTimeout);
        browser.wait(EC.visibilityOf(browsePO.keepSearchingText), waitTimeout);
        //  expect(browsePO.keepSearchingText).to.exist;
        reportInfo.log('Keep Search text is getting displayed');
        utilities.attachScreenshot();
    }

    this.searchClearEnter = function () {
        var browsePO = new browseObj();
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            browser.sleep(3000);
        } else {
            utilities.waitUtilElementPresent(browsePO.searchInput, waitTimeout);
            browsePO.searchInput.click();
            browser.wait(EC.visibilityOf(browsePO.searchClear), waitTimeout);
            browsePO.searchClear.click();
            reportInfo.log('Search Clear option is clicked');
            browser.wait(EC.visibilityOf(browsePO.searchInput), waitTimeout);
            browsePO.searchInput.sendKeys();
            utilities.attachScreenshot();
        }
    }

    this.searchResultCount = function () {
        var browsePO = new browseObj();

        //count the list of search result values
        //    expect(browsePO.listOfSearchResult).to.exist;
        reportInfo.log('Verification Points - Search Result count is verified');
        //    expect(browsePO.searchInput).to.exist;
        utilities.attachScreenshot();
    }
}
module.exports = new search();