var productDetailsObj = require('../com.sirius.pageObjects/productDetailsPage_po.js');
var browserDetails = require('../com.sirius.reusables/browserDetails.js');
var browserDetailsObj = require('../com.sirius.pageObjects/browseByCategory_po.js');
var browseObj = require('../com.sirius.pageObjects/browseByCategory_po.js');
var shoppingCartObj = require('../com.sirius.pageObjects/shoppingCartPage_po.js');
var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');
const {
    expect
} = require("chai");
const {
    assert
} = require("chai");
var EC = protractor.ExpectedConditions;
var waitTimeout = 200000;

let productDetails = function () {

    var ProductSKUStore;

    this.pdpVerification = function () {
        var productDetailsPO = new productDetailsObj();

        //Product Details Page - Verification
        utilities.waitForElement(productDetailsPO.carousalImageVerify, waitTimeout);
        reportInfo.log('Product Details page is loaded completely');
        utilities.attachScreenshot();
        utilities.waitForElement(productDetailsPO.carousalImageEdit, waitTimeout);
        //  expect(productDetailsPO.carousalImageEdit).to.exist;
        reportInfo.log('carousalimageEdit available in the PDP page ');
        utilities.scrollTo(productDetailsPO.productDetailInfo);
        utilities.attachScreenshot();
        //  expect(productDetailsPO.productDetailInfo).to.exist;
        //  expect(productDetailsPO.quantityLabel).to.exist;
        utilities.scrollTo(productDetailsPO.priceLabel);
        //   expect(productDetailsPO.priceLabel).to.exist;
        utilities.scrollTo(productDetailsPO.productPrice);
        utilities.waitUtilElementPresent(productDetailsPO.productPrice, waitTimeout);
        utilities.HighlightElement(productDetailsPO.productPrice);
        productDetailsPO.productPrice.click();
        reportInfo.log('Verification points are passed in the product details page');
    }

    this.quantityMaximumValue = function () {
        var productDetailsPO = new productDetailsObj();
        var shoppingCartObjPO = new shoppingCartObj();
        utilities.waitForElement(productDetailsPO.carousalImageVerify, waitTimeout);
        utilities.HighlightElement(productDetailsPO.carousalImageVerify);
        reportInfo.log('Product Details page is loaded completely');
        utilities.attachScreenshot();
        /*utilities.HighlightElement(productDetailsPO.quantityDropDown);
        expect(productDetailsPO.quantityDropDown).to.exist;

        //Click on quantity option and check for the maximam value of it
        utilities.scrollTo(productDetailsPO.quantityDropDown.getWebElement());
        utilities.waitUtilElementPresent(productDetailsPO.quantityDropDown, waitTimeout);

        browser.executeScript("document.getElementsByTagName('ion-select')[0].value='99'");
        reportInfo.log('OK button is clicked in the quantity modal');
        utilities.waitUtilElementPresent(productDetailsPO.quantityDropDown, waitTimeout);*/
        utilities.scrollTo(productDetailsPO.quantityDropDownEdit.getWebElement());
        utilities.waitForElement(productDetailsPO.quantityDropDownEdit, waitTimeout);
        browser.wait(EC.visibilityOf(productDetailsPO.quantityDropDownEdit), waitTimeout);
        productDetailsPO.quantityDropDownEdit.click();

        utilities.HighlightElement(productDetailsPO.productMoreOptionDropdown);
        productDetailsPO.productMoreOptionDropdown.click();
        utilities.pageWait(5);
        utilities.HighlightElement(productDetailsPO.productMoreOptionsQty);
        productDetailsPO.productMoreOptionsQty.sendKeys('99');
        // browser.executeScript("document.getElementsByTagName('ion-select')[1].value='99'");
        reportInfo.log('Maximum Quantity Value is selected in Update Cart Quantity Dropdown');
        utilities.pageWaitSec(3);
        utilities.HighlightElement(productDetailsPO.productQtyOkButton);
        productDetailsPO.productQtyOkButton.click();
        utilities.waitForElement(productDetailsPO.quantityDropDownEdit, waitTimeout);
    }


    this.quantityValue = function (value) {
        var productDetailsPO = new productDetailsObj();
        var shoppingCartObjPO = new shoppingCartObj();
        utilities.waitForElement(productDetailsPO.carousalImageVerify, waitTimeout);
        utilities.HighlightElement(productDetailsPO.carousalImageVerify);
        reportInfo.log('Product Details page is loaded completely');
        utilities.attachScreenshot();
        utilities.HighlightElement(productDetailsPO.quantityDropDown);
        //  expect(productDetailsPO.quantityDropDown).to.exist;

        //Click on quantity option and check for the maximam value of it
        utilities.scrollTo(productDetailsPO.quantityDropDown);
        utilities.waitUtilElementPresent(productDetailsPO.quantityDropDown, waitTimeout);
        productDetailsPO.quantityDropDown.click();
        reportInfo.log('Quantity dropdown is clicked in the product details page');
        utilities.waitUtilElementPresent(shoppingCartObjPO.lastQty, waitTimeout);
        utilities.HighlightElement(shoppingCartObjPO.lastQty);
        utilities.scrollTo(shoppingCartObjPO.lastQty);
        shoppingCartObjPO.lastQty.click()

        //shoppingCartObjPO.selectQuantity(value);
        utilities.waitUtilElementPresent(shoppingCartObjPO.qtyModalOKButton, waitTimeout);
        reportInfo.log('Last Quantity option is clicked in the quantity modal');
        utilities.waitUtilElementPresent(shoppingCartObjPO.qtyModalOKButton, waitTimeout);
        utilities.HighlightElement(shoppingCartObjPO.qtyModalOKButton);
        shoppingCartObjPO.qtyModalOKButton.click();
        reportInfo.log('OK button is clicked in the quantity modal');
        utilities.pageWait();
        utilities.waitUtilElementPresent(productDetailsPO.quantityDropDown, waitTimeout);
    }

    this.selectQuantity = function (value) {
        var button = element(by.xpath("//button[@aria-checked='false']//*[@class='alert-radio-label sc-ion-alert-md' and contains(.,'" + value + "')]"));
        button.click();
    }


    this.quantityMaximumValueUpdate = function () {
        var productDetailsPO = new productDetailsObj();
        var shoppingCartObjPO = new shoppingCartObj();
        utilities.waitForElement(productDetailsPO.carousalImageEdit, waitTimeout);
        utilities.HighlightElement(productDetailsPO.carousalImageEdit);
        reportInfo.log('Product Details page is loaded completely');
        utilities.attachScreenshot();
        utilities.HighlightElement(productDetailsPO.quantityDropDownEdit);
        //   expect(productDetailsPO.quantityDropDownEdit).to.exist;

        //Click on quantity option and check for the maximam value of it
       // utilities.scrollTo(productDetailsPO.quantityDropDownEdit.getWebElement());
        utilities.waitForElement(productDetailsPO.quantityDropDownEdit, waitTimeout);
        browser.wait(EC.visibilityOf(productDetailsPO.quantityDropDownEdit), waitTimeout);
        productDetailsPO.quantityDropDownEdit.click();

        utilities.HighlightElement(productDetailsPO.productMoreOptionDropdown);
        productDetailsPO.productMoreOptionDropdown.click();
        utilities.pageWait(5);
        utilities.HighlightElement(productDetailsPO.productMoreOptionsQty);
        productDetailsPO.productMoreOptionsQty.sendKeys('99');
        // browser.executeScript("document.getElementsByTagName('ion-select')[1].value='99'");
        reportInfo.log('Maximum Quantity Value is selected in Update Cart Quantity Dropdown');
        utilities.pageWaitSec(3);

        utilities.HighlightElement(productDetailsPO.productQtyOkButton);
        productDetailsPO.productQtyOkButton.click();
        utilities.waitForElement(productDetailsPO.quantityDropDownEdit, waitTimeout);
        utilities.HighlightElement(productDetailsPO.quantityDropDownEdit);
    }

    this.addProduct = function () {
        var shopCartPO = new shoppingCartObj();
        var shoppingCartPO = new shoppingCartObj();

        if (browserDetails.executionName == 'android') {
            var productDetailsPO = new productDetailsObj();
            var shoppingCartPO = new shoppingCartObj();
            // productDetailsPO.addToCartButton.click();
            utilities.click(productDetailsPO.addToCartButton);
            //browser.executeScript("document.getElementById('btn_addToCart_pp').click();");
            reportInfo.log('Add to Cart button is clicked in the product details page');
            utilities.pageWaitSec(4);
            browser.executeScript("document.getElementsByName('cart')[1].click()");
            browser.sleep(10000);
            utilities.scrollTo(shopCartPO.checkoutButton);
            utilities.waitForElement(shopCartPO.checkoutButton, waitTimeout);
            utilities.HighlightElement(shopCartPO.checkoutButton);
            reportInfo.log('Cart icon is clicked in Mobile application');
        } else if (browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var productDetailsPO = new productDetailsObj();
            utilities.pageWaitSec(5);
            utilities.HighlightElement(productDetailsPO.addToCartButton);
            utilities.scrollTo(productDetailsPO.addToCartButton);
            productDetailsPO.addToCartButton.click();
            browser.sleep(5000);
            reportInfo.log('Add to Cart button is clicked in the product details page');
            browser.executeScript("document.getElementsByName('cart')[1].click()");
            browser.sleep(5000);
            utilities.scrollTo(shopCartPO.checkoutButton);
            utilities.waitUtilElementPresent(shopCartPO.checkoutButton, waitTimeout);
            utilities.HighlightElement(shopCartPO.checkoutButton);
            reportInfo.log('Cart icon is clicked in Mobile application');
            utilities.HighlightElement(shoppingCartPO.closeShoppingCartMobile);
        } else {
            this.addProductToCart();
        }
        reportInfo.log('Add to cart button is clicked in the product details page');
    }

    this.addProductWithoutCartOpen = function () {
        var shopCartPO = new shoppingCartObj();

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            var productDetailsPO = new productDetailsObj();
            utilities.scrollTo(productDetailsPO.addToCartButton);
            utilities.waitUtilElementPresent(productDetailsPO.addToCartButton);
            utilities.HighlightElement(productDetailsPO.addToCartButton);
            browser.sleep(2000);
            browser.executeScript("document.getElementById('btn_addToCart_pp').click()");
            reportInfo.log('Add to Cart button is clicked in the product details page');
            utilities.pageWaitSec(4);
        } else {
            this.addProductToCart();
        }
        reportInfo.log('Add to cart button is clicked in the product details page');
    }

    this.ProductDetailStore = function () {
        var productDetailsPO = new productDetailsObj();
        utilities.waitForElement(productDetailsPO.skuId, waitTimeout);
        productDetailsPO.skuId.getText().then(function (text) {
            ProductSKUStore = text;
            utilities.log('****** Stored Bonus Product Name ******', text);
        });

    }


    this.VerifySameProductAddedInCart = function () {
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shoppingCartPO.cartProductSKU, waitTimeout);
        var shoppingCartSKUStore;
        shoppingCartPO.cartProductSKU.getText().then(function (text) {
            shoppingCartSKUStore = text;
            utilities.log('****** Stored Bonus Product Name ******', text);
            assert.equal(shoppingCartSKUStore, ProductSKUStore);
        });
        utilities.waitUtilElementPresent(shoppingCartPO.cartProductSKU, waitTimeout);
    }

    this.giftcardQtyUpdate = function () {
        var productDetailsPO = new productDetailsObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(productDetailsPO.giftCardInput, waitTimeout);
        utilities.HighlightElement(productDetailsPO.giftCardInput);
        productDetailsPO.giftCardInput.sendKeys(protractor.Key.BACK_SPACE);
        productDetailsPO.giftCardInput.sendKeys(protractor.Key.BACK_SPACE);
        productDetailsPO.giftCardInput.sendKeys(protractor.Key.BACK_SPACE);
        productDetailsPO.giftCardInput.sendKeys("100");
    }


    this.giftcardQtyUpdateCheckout = function (value) {
        var productDetailsPO = new productDetailsObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(productDetailsPO.giftCardInput, waitTimeout);
        utilities.HighlightElement(productDetailsPO.giftCardInput);
        productDetailsPO.giftCardInput.sendKeys(protractor.Key.BACK_SPACE);
        productDetailsPO.giftCardInput.sendKeys(protractor.Key.BACK_SPACE);
        productDetailsPO.giftCardInput.sendKeys(protractor.Key.BACK_SPACE);
        productDetailsPO.giftCardInput.sendKeys(value);
    }

    this.giftcardQtyValidations = function () {
        var productDetailsPO = new productDetailsObj();
        var shoppingCartPO = new shoppingCartObj();
        utilities.waitForElement(productDetailsPO.giftCardInput, waitTimeout);
        utilities.HighlightElement(productDetailsPO.giftCardInput);
        var count212 = productDetailsPO.giftCardInputText.getAttribute('ng-reflect-model');
        browser.executeScript("document.getElementsByClassName('product-detail-giftcard-amount')[0].value=''");
        utilities.pageWait();
        productDetailsPO.giftCardInput.sendKeys("10");
        browser.executeScript(addtoCart);
        utilities.waitForElement(productDetailsPO.giftCardQtyMsg, waitTimeout);

        var GiftCardErrorMsgStore;
        productDetailsPO.giftCardQtyMsg.getText().then(function (text) {
            GiftCardErrorMsgStore = text;
            utilities.log('****** Stored Bonus Product Name ******', text);
            assert.equal(GiftCardErrorMsgStore, "Amount must be at least $50 in increments of $25");
        });
        utilities.pageWait();
        browser.executeScript("document.getElementsByClassName('product-detail-giftcard-amount')[0].value=''");
        utilities.pageWaitSec(3);
        productDetailsPO.giftCardInput.sendKeys("3000");
        browser.executeScript(addtoCart);
        utilities.waitForElement(productDetailsPO.giftCardQtyMsg, waitTimeout);

        var GiftCardErrorMsgStore;
        productDetailsPO.giftCardQtyMsg.getText().then(function (text) {
            GiftCardErrorMsgStore = text;
            utilities.log('****** Stored Bonus Product Name ******', text);
            assert.equal(GiftCardErrorMsgStore, "Amount must be $2000 or less in increments of $25");
        });
        utilities.pageWait();
        browser.executeScript("document.getElementsByClassName('product-detail-giftcard-amount')[0].value=''");
        utilities.pageWaitSec(3);
        productDetailsPO.giftCardInput.sendKeys("120");
        browser.executeScript(addtoCart);
        utilities.waitForElement(productDetailsPO.giftCardQtyMsg, waitTimeout);

        var GiftCardErrorMsgStore;
        productDetailsPO.giftCardQtyMsg.getText().then(function (text) {
            GiftCardErrorMsgStore = text;
            utilities.log('****** Stored Bonus Product Name ******', text);
            assert.equal(GiftCardErrorMsgStore, "Amount must be in increments of $25");
        });

    }


    this.addProductToCart = function () {
        var productDetailsPO = new productDetailsObj();
        var shopCartPO = new shoppingCartObj();
        utilities.scrollTo(productDetailsPO.carousalImageEdit);
        utilities.waitForElement(productDetailsPO.carousalImageEdit, waitTimeout);
        utilities.pageWaitSec(3);
        utilities.HighlightElement(productDetailsPO.carousalImageEdit);
        utilities.HighlightElement(productDetailsPO.carousalImageEdit);
        utilities.scrollTo(productDetailsPO.addToCartButton);
        utilities.HighlightElement(productDetailsPO.addToCartButton);
        productDetailsPO.addToCartButton.click();
        utilities.pageWaitSec(5);
        reportInfo.log('Add to Cart button is clicked in the product details page');
        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {
            utilities.pageWaitSec(5);
            browser.executeScript("document.getElementsByName('cart')[1].click()");
            browser.sleep(4000);
        }
        utilities.scrollTo(shopCartPO.checkoutButton);
        utilities.waitForElement(shopCartPO.checkoutButton, waitTimeout);
        utilities.HighlightElement(shopCartPO.checkoutButton);
    }

    this.verifyGiftCardDetials = function () {
        var productDetailsPO = new productDetailsObj();
        var shopCartPO = new shoppingCartObj();
        utilities.waitUtilElementPresent(shopCartPO.shoppingCartProductName);
        shopCartPO.shoppingCartProductName.click();
        utilities.waitForElement(productDetailsPO.giftCardInput, waitTimeout);
        utilities.HighlightElement(productDetailsPO.giftCardInput);
        utilities.HighlightElement(productDetailsPO.giftCardQtyMsg);
        utilities.HighlightElement(productDetailsPO.giftCardMsg);

    }

    this.searchResultsNavigation = function () {
        var browsePO = new browserDetailsObj();
        var productDetailsPO = new productDetailsObj();
        utilities.pageWaitSec(5);
        utilities.waitUtilElementPresent(browsePO.listOfSearchResult, waitTimeout);
        utilities.HighlightElement(browsePO.listOfSearchResult);
        // browsePO.listOfSearchResult.click();
        utilities.click(browsePO.listOfSearchResult);
        browser.sleep(4000);
        reportInfo.log("Search product is selected from the search result section");
        utilities.waitForElement(productDetailsPO.carousalImageVerify, waitTimeout);
        utilities.scrollTo(productDetailsPO.addToCartButton);
        utilities.HighlightElement(productDetailsPO.addToCartButton);
        reportInfo.log("Wait for the product details page to load");
    }

    this.defaultAttributeSelection = function () {
        var productDetailsPO = new productDetailsObj();

        //Deselect the default value and check for the add to cart button 
        utilities.waitForElement(productDetailsPO.addToCartButton, waitTimeout);
        utilities.waitForElement(productDetailsPO.defaultAttributeSelection, waitTimeout);
        productDetailsPO.defaultAttributeSelection.click();
        reportInfo.log('Default attribute is selected in the product details page ');
        utilities.waitForElement(productDetailsPO.carousalImageVerify, waitTimeout);
        reportInfo.log('Verification Point - Add to cart button is disabled after all the attributes deselected');
        utilities.attachScreenshot();
    }

    this.pdpVerficationPoints = function () {
        var productDetailsPO = new productDetailsObj();
        browser.wait(EC.visibilityOf(productDetailsPO.carousalImageVerify), waitTimeout);

        utilities.scrollTo(productDetailsPO.productDetailInfo);
        //     expect(productDetailsPO.productDetailInfo).to.exist;
        utilities.scrollTo(productDetailsPO.quantityLabelUpdate);
        //    expect(productDetailsPO.quantityLabel).to.exist;
        utilities.scrollTo(productDetailsPO.priceLabel);
        expect(productDetailsPO.priceLabel).to.exist;
        //   utilities.scrollTo(productDetailsPO.productPrice);
        reportInfo.log('Verification Points - Product Attributes are verified');
        //    expect(productDetailsPO.productPrice).to.exist;
        utilities.attachScreenshot();
    }

    this.pdpVerficationUpdatePoints = function () {
        var productDetailsPO = new productDetailsObj();

        utilities.scrollTo(productDetailsPO.productDetailInfoUpdate.getWebElement());
        //   expect(productDetailsPO.productDetailInfoUpdate).to.exist;
        utilities.scrollTo(productDetailsPO.quantityLabelUpdate.getWebElement());
        //    expect(productDetailsPO.quantityLabelUpdate).to.exist;
        utilities.scrollTo(productDetailsPO.priceLabelUpdate.getWebElement());
        //    expect(productDetailsPO.priceLabelUpdate).to.exist;
        utilities.scrollTo(productDetailsPO.productPriceUpdate.getWebElement());
        reportInfo.log('Verification Points - Product Attributes are verified');
        //    expect(productDetailsPO.productPriceUpdate).to.exist;
        utilities.attachScreenshot();
    }



    this.searchFieldCheck = function () {
        var productDetailsPO = new productDetailsObj();
        var browserDetailsPO = new browserDetailsObj();

        if (browserDetails.executionName == 'android' || browserDetails.executionName == 'iphone' || browserDetails.executionName == 'ipad') {

            browser.executeScript("document.getElementsByName('search')[1].click()");
            utilities.waitUtilElementPresent(browserDetailsPO.searchInputMobile, waitTimeout);
            browserDetailsPO.searchInputMobile.click();
            reportInfo.log('Search input is clicked');
        }

        utilities.attachScreenshot();
        utilities.HighlightElement(browserDetailsPO.searchInput);
        reportInfo.log('Wait for the product details page to load completely');
    }

    this.searchFieldSKUIDCheck = function (skuID) {
        var productDetailsPO = new productDetailsObj();
        var browserDetailsPO = new browserDetailsObj();
        var storeSKU = skuID;
        // console.log('***** storeSKU ****** ', storeSKU);
       // utilities.waitUtilElementPresent(productDetailsPO.skuNumber, waitTimeout);
       utilities.waitForElement(productDetailsPO.skuNumber, waitTimeout);
        utilities.HighlightElement(productDetailsPO.skuNumber);
        productDetailsPO.skuNumber.getText().then(function (text) {
            var Actual = text;
           // console.log('****** Actual Comments ******', text);
            assert.include(Actual, storeSKU);
        });
        reportInfo.log('Verification Point - Search term is verified in the search text field');
    }

    this.searchFieldProductNameCheck = function (productName) {
        var productDetailsPO = new productDetailsObj();
        var browserDetailsPO = new browserDetailsObj();
        var storeProduct = productName;
       // console.log('***** storeSKU ****** ', storeProduct);
        utilities.waitUtilElementPresent(productDetailsPO.skuNumber, waitTimeout);
        utilities.HighlightElement(productDetailsPO.skuNumber);

        productDetailsPO.searchProductName.getText().then(function (text) {
            var Actual = text;
           // console.log('****** Actual Comments ******', text);
            //assert.include(Actual, storeProduct);
        });
    }

    this.pdpQuantityClick = function() {
        var productDetailsPO = new productDetailsObj();
        var shoppingCartObjPO = new shoppingCartObj();
        utilities.waitForElement(productDetailsPO.quantityDropDown, waitTimeout);
        utilities.HighlightElement(productDetailsPO.quantityDropDown);
        utilities.scrollTo(productDetailsPO.quantityDropDown);
        productDetailsPO.quantityDropDown.click();
    }

    this.verifyLITQuantitySelect = function(value) {
        utilities.pageWaitSec(3);
        expect(element(by.xpath("//ion-label[contains(text(),'50')]")));
        expect(element(by.xpath("//ion-label[contains(text(),'100')]")));
        var button = element(by.xpath("//ion-label[contains(text(),'"+value+"')]/..//ion-radio"));
        button.click();
        var shoppingCartObjPO = new shoppingCartObj();
        utilities.pageWaitSec(3);
        utilities.waitForElement(shoppingCartObjPO.qtyModalOKButton, waitTimeout);
        utilities.HighlightElement(shoppingCartObjPO.qtyModalOKButton);
        shoppingCartObjPO.qtyModalOKButton.click();
    }

    this.updatePDPCart = function () {
        var productDetailsPO = new productDetailsObj();
        var browserDetailsPO = new browserDetailsObj();
        utilities.waitForElement(productDetailsPO.updateButton, waitTimeout);
        utilities.HighlightElement(productDetailsPO.updateButton);
        productDetailsPO.updateButton.click();
    }

    async function addtoCart() {
        var addToCartButton = document.getElementById('btn_addToCart_pp');
        addToCartButton.shadowRoot.querySelector('button').click();
    }

}
module.exports = new productDetails();