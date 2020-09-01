var shopCatalogObj = require('../com.sirius.pageObjects/shopCatalog_po.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var browserDetails = require('./browserDetails.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
// const {
//     expect
// } = require("chai");
var waitTimeout = 200000;

let shopCatalog = function () {

    this.selectCategoryFromSetPage = function () {
        var shopCatalogPO = new shopCatalogObj();
        utilities.waitUtilElementPresent(shopCatalogPO.productGrid, waitTimeout);
        utilities.HighlightElement(shopCatalogPO.productGrid);
        if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            shopCatalogPO.productGrid.click();
        } else {
            utilities.click(shopCatalogPO.productGrid);
        }
        reportInfo.log('Product name is clicked in the product set page');

        //Adding a product to the cart from product details page
        //utilities.waitUtilElementPresent(shopCatalogPO.carousalImage, waitTimeout);
    }

    this.selectAttributeFromSetPage1 = function () {
        var shopCatalogPO = new shopCatalogObj();

        var productDetailsPO = new productDetailsObj();

        browser.sleep(5000);
        utilities.scrollTo(shopCatalogPO.optionContainer);
        utilities.waitUtilElementPresent(shopCatalogPO.optionContainer, waitTimeout);
        utilities.HighlightElement(shopCatalogPO.optionContainer);
        reportInfo.log('Wait for the product details page to load');
        shopCatalogPO.storageOptionCheckbox.isPresent().then(function (result) {
            utilities.log("shopCatalogPO.storageOptionCheckbox found ", result);
            if (result) {
                // console.log("selecting storageOptionCheckbox");
                utilities.scrollTo(shopCatalogPO.storageOptionCheckbox);
                utilities.HighlightElement(shopCatalogPO.storageOptionCheckbox);
                shopCatalogPO.storageOptionCheckbox.isEnabled().then(function (result) {
                    utilities.log("shopCatalogPO.storageOptionCheckbox found ", result);
                    if (result) {
                        browser.executeScript("arguments[0].click();", shopCatalogPO.storageOptionCheckbox);
                    }
                });
            }
        });

        shopCatalogPO.blockFinishCheckbox.isPresent().then(function (result) {
            utilities.log("shopCatalogPO.blockFinishCheckbox found ", result);
            if (result) {
               // console.log("selecting blockFinishCheckbox");
                utilities.scrollTo(shopCatalogPO.blockFinishCheckbox);
                utilities.HighlightElement(shopCatalogPO.blockFinishCheckbox);
                shopCatalogPO.blockFinishCheckbox.isEnabled().then(function (result) {
                    utilities.log("shopCatalogPO.blockFinishCheckbox found ", result);
                    if (result) {
                        browser.executeScript("document.getElementsByTagName('ion-radio')[4].click();")
                    }
                });
            }
        });

        reportInfo.log('Default Attributes are changed');
    }

    this.selectAttributeFromSetPage = function () {
        var shopCatalogPO = new shopCatalogObj();

        browser.sleep(5000);
        utilities.scrollTo(shopCatalogPO.optionContainer);
        utilities.waitUtilElementPresent(shopCatalogPO.optionContainer, waitTimeout);
        utilities.HighlightElement(shopCatalogPO.optionContainer);
        reportInfo.log('Wait for the product details page to load');
        shopCatalogPO.storageOptionCheckbox.isPresent().then(function (result) {
            utilities.log("shopCatalogPO.storageOptionCheckbox found ", result);
            if (result) {
                // console.log("selecting storageOptionCheckbox");
                utilities.scrollTo(shopCatalogPO.storageOptionCheckbox);
                utilities.HighlightElement(shopCatalogPO.storageOptionCheckbox);
                shopCatalogPO.storageOptionCheckbox.isEnabled().then(function (result) {
                    utilities.log("shopCatalogPO.storageOptionCheckbox found ", result);
                    if (result) {
                        browser.executeScript("arguments[0].click();", shopCatalogPO.storageOptionCheckbox);
                    }
                });
            }
        });

        shopCatalogPO.blockFinishCheckbox.isPresent().then(function (result) {
            utilities.log("shopCatalogPO.blockFinishCheckbox found ", result);
            if (result) {
                // console.log("selecting blockFinishCheckbox");
                utilities.scrollTo(shopCatalogPO.blockFinishCheckbox);
                utilities.HighlightElement(shopCatalogPO.blockFinishCheckbox);
                shopCatalogPO.blockFinishCheckbox.isEnabled().then(function (result) {
                    utilities.log("shopCatalogPO.blockFinishCheckbox found ", result);
                    if (result) {
                        browser.executeScript("document.getElementsByTagName('ion-radio')[4].click();")
                    }
                });
            }
        });
        shopCatalogPO.chefKnifeCheckbox.isPresent().then(function (result) {
            utilities.log("shopCatalogPO.chefKnifeCheckbox found ", result);
            if (result) {
               // console.log("selecting chefKnifeCheckbox");
                utilities.scrollTo(shopCatalogPO.chefKnifeCheckbox);
                utilities.HighlightElement(shopCatalogPO.chefKnifeCheckbox);
                shopCatalogPO.chefKnifeCheckbox.isEnabled().then(function (result) {
                    utilities.log("shopCatalogPO.chefKnifeCheckbox found ", result);
                    if (result) {
                        browser.executeScript("document.getElementsByTagName('ion-radio')[9].click();")
                    }
                });
            }
        });
        shopCatalogPO.rivetHandleColorCheckbox.isPresent().then(function (result) {
            utilities.log("shopCatalogPO.rivetHandleColorCheckbox found ", result);
            if (result) {
               // console.log("selecting rivetHandleColorCheckbox");
                utilities.scrollTo(shopCatalogPO.rivetHandleColorCheckbox);
                utilities.HighlightElement(shopCatalogPO.rivetHandleColorCheckbox);
                shopCatalogPO.rivetHandleColorCheckbox.isEnabled().then(function (result) {
                    utilities.log("shopCatalogPO.rivetHandleColorCheckbox found ", result);
                    if (result) {
                        browser.executeScript("document.getElementsByTagName('ion-radio')[6].click();")
                    }
                });
            }
        });
        reportInfo.log('Default Attributes are changed');
    }


    this.listOptionCheck = function () {
        var shopCatalogPO = new shopCatalogObj();

        //Wait for list option check and click on list icon in the shop page
        utilities.waitForElement(shopCatalogPO.productGrid, waitTimeout);
        utilities.waitForElement(shopCatalogPO.listViewOpt, waitTimeout);
        shopCatalogPO.listViewOpt.click();
        reportInfo.log('List View is clicked in the product set page');
        utilities.waitForElement(shopCatalogPO.listViewContainer, waitTimeout);

        //Adding a product to the cart
        shopCatalogPO.listAddToCartButton.click();
        reportInfo.log('Add to cart button is clicked in the list view');
        var lastListElement = shopCatalogPO.listAddToCartButtons.last();
        utilities.scrollTo(lastListElement.getWebElement());
        shopCatalogPO.listAddToCartButton.isPresent();
        utilities.attachScreenshot();
    }

    this.AddToCartButtonPLP = function () {
        var shopCatalogPO = new shopCatalogObj();
        utilities.waitUtilElementPresent(shopCatalogPO.addToCartPlp, waitTimeout);
        utilities.HighlightElement(shopCatalogPO.addToCartPlp);
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone') {
            shopCatalogPO.addToCartPlp.click();
        } else {
            utilities.click(shopCatalogPO.addToCartPlp);
        }
    }

}
module.exports = new shopCatalog();