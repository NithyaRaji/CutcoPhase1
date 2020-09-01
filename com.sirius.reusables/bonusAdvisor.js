var reportInfo = require('../com.sirius.library/reportInfo.js');
var utilities = require('../com.sirius.reusables/utilities.js');
var productDetailsObj = require('../com.sirius.pageObjects/productDetailsPage_po.js');
var BonusAdvisorObj = require('../com.sirius.pageObjects/bonusAdvisor_PO.js');
var shoppingcartobj = require('../com.sirius.pageObjects/shoppingCartPage_po.js')
var EC = protractor.ExpectedConditions;
var waitTimeout = 300000;

let bonusAdvisor = function () {

    this.openBonusAdvisor = function () {
        var BonusPO = new BonusAdvisorObj();
        
        utilities.waitUtilElementPresent(BonusPO.bonusAdvisor, waitTimeout);
        utilities.HighlightElement(BonusPO.bonusAdvisor);
        BonusPO.bonusAdvisor.click();

        utilities.pageWaitSec(5);  
        var done = element(by.css(".introjs-donebutton"));
        utilities.waitUtilElementPresent(done); 
        utilities.HighlightElement(done);
        done.click();
    }

    this.addBonusProduct = function () {
        var BonusPO = new BonusAdvisorObj();
        var BonusProductNameStore;
        utilities.waitUtilElementPresent(BonusPO.bonusAddFirstProduct, waitTimeout);
        BonusPO.bonusFirstProductName.getText().then(function (text) {
            BonusProductNameStore = text;
          //  console.log('****** Stored Bonus Product Name ******', BonusProductNameStore);
        });
        utilities.HighlightElement(BonusPO.bonusAddFirstProduct);
        browser.executeScript("document.getElementsByClassName('bonusable-item-add-to-cart')[0].click();");
       
        
    }

    this.verifyBonusAdvisor = function() {
        var BonusPO = new BonusAdvisorObj();
        var shopcartPO = new shoppingcartobj();
        var productDetailsPO = new productDetailsObj();
        expect(BonusPO.bonusFromCatalog.isDisplayed());
        expect(BonusPO.bonusFromCart.isDisplayed());
        expect(element(by.xpath('//div[@class="bonused-items-wrapper"]//img')).isDisplayed());
        expect(element(by.xpath('//div[@class="bonused-items-wrapper"]//p[@class="bonused-item-name"]')).isDisplayed());
        expect(element(by.xpath('//div[@class="bonused-items-wrapper"]//span[@class="product-item-number"]')).isDisplayed());
        utilities.scrollTo(BonusPO.bonusQtyDropDown);
        utilities.HighlightElement(BonusPO.bonusQtyDropDown);
        BonusPO.bonusQtyDropDown.click();
        shopcartPO.bonusQtyIncrease("1");
        utilities.HighlightElement(productDetailsPO.productQtyOkButton);
        productDetailsPO.productQtyOkButton.click();
    }


    this.unBonusProduct = function() {
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.bonusProductMore);
        utilities.scrollTo(BonusPO.bonusProductMore);
        utilities.HighlightElement(BonusPO.bonusProductMore);
        BonusPO.bonusProductMore.click();

        utilities.waitForElement(BonusPO.bonusProductUnBonus);
        utilities.scrollTo(BonusPO.bonusProductUnBonus);
        utilities.HighlightElement(BonusPO.bonusProductUnBonus);
        BonusPO.bonusProductUnBonus.click();

    }
    
    this.deleteBonusProduct = function() {
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.bonusProductMore);
        utilities.scrollTo(BonusPO.bonusProductMore);
        utilities.HighlightElement(BonusPO.bonusProductMore);
        BonusPO.bonusProductMore.click();

        utilities.waitForElement(BonusPO.bonusProductDelete);
        utilities.scrollTo(BonusPO.bonusProductDelete);
        utilities.HighlightElement(BonusPO.bonusProductDelete);
        BonusPO.bonusProductDelete.click();
    }

    this.searchProductToBonus = function(searchterm){
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.searchbar);
        utilities.scrollTo(BonusPO.searchbar);
        utilities.HighlightElement(BonusPO.searchbar);
        BonusPO.searchbar.sendKeys(searchterm);
    }

    this.selectCartTab = function() {
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.bonusFromCart);
        utilities.scrollTo(BonusPO.bonusFromCart);
        utilities.HighlightElement(BonusPO.bonusFromCart);
        BonusPO.bonusFromCart.click();

    }

    this.selectCatalogTab = function() {
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.bonusFromCatalog);
        utilities.scrollTo(BonusPO.bonusFromCatalog);
        utilities.HighlightElement(BonusPO.bonusFromCatalog);
        BonusPO.bonusFromCatalog.click();
    }

    this.verifyOrderHealth = function() {
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.bonusOrderHealthBar);
        BonusPO.bonusOrderHealthBar.click();

        expect(BonusPO.bonusOrderBonusPercent.isDisplayed());
        expect(BonusPO.bonusOrderBonusPts.isDisplayed());

    }

    this.verifySort = function() {
        var BonusPO = new BonusAdvisorObj();
        utilities.HighlightElement(BonusPO.firstProduct);

        expect(BonusPO.popSort.isEnabled());
        BonusPO.popSort.click();
        utilities.HighlightElement(BonusPO.firstProduct);
    }

    this.changeColor = function(){
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.configColor);
        utilities.HighlightElement(BonusPO.configColor);
        BonusPO.configColor.click();

        utilities.waitForElement(BonusPO.color2);
        utilities.HighlightElement(BonusPO.color2);
        BonusPO.color2.click();
    }

    this.verifyCurrentlyBonused = function() {
        var BonusPO = new BonusAdvisorObj();
        expect(BonusPO.productCurrentlyBonused.isDisplayed());
        utilities.HighlightElement(BonusPO.productCurrentlyBonused);

        utilities.HighlightElement(BonusPO.bonusFromCart);
        BonusPO.bonusFromCart.click();
        expect(BonusPO.productCurrentlyBonused.isDisplayed());
    }

    this.verifyBonusQuantityLimit = function(qty) {
        var BonusPO = new BonusAdvisorObj();
        var shopcartPO = new shoppingcartobj();
        utilities.scrollTo(BonusPO.bonusQtyDropDown);
        utilities.HighlightElement(BonusPO.bonusQtyDropDown);
        BonusPO.bonusQtyDropDown.click();
        expect(element(by.css(".cc-modal-select-option:nth-of-type(" + qty + ")")).isPresent()).toBeFalsy();
    }

    this.verifyImg = function(searchterm) {
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.searchbar);
        utilities.scrollTo(BonusPO.searchbar);
        utilities.HighlightElement(BonusPO.searchbar);
        BonusPO.searchbar.sendKeys(searchterm);

        utilities.pageWaitSec(5);
        utilities.HighlightElement(BonusPO.bonusAddFirstProduct);
        browser.executeScript("document.getElementsByClassName('bonusable-item-add-to-cart')[0].click();");
 
        var img = element(by.xpath('//div[@class="bonused-items-wrapper"]//img[@alt="'+searchterm+'"]'));
        expect(img.isDisplayed());
        utilities.HighlightElement(img);
    }

    this.addBonusProductFromCart = function() {
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.productFromCart);
        utilities.scrollTo(BonusPO.productFromCart);
        utilities.HighlightElement(BonusPO.productFromCart);

        utilities.waitForElement(BonusPO.bonusItemButton);
        utilities.scrollTo(BonusPO.bonusItemButton);
        utilities.HighlightElement(BonusPO.bonusItemButton);
        BonusPO.bonusItemButton.click();
    }

    this.closeBonusAdvisor = function() {
        var BonusPO = new BonusAdvisorObj();
        utilities.waitForElement(BonusPO.closeIconBonusOverlay);
        utilities.scrollTo(BonusPO.closeIconBonusOverlay);
        utilities.HighlightElement(BonusPO.closeIconBonusOverlay);
        BonusPO.closeIconBonusOverlay.click();
    }
    

    this.expectHighBonusProductsNo = function() {
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'6 pts')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'7 pts')]")).isPresent()).toBeFalsy();
        expect(element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'8 pts')]")).isPresent()).toBeFalsy();
    }

}
module.exports = new bonusAdvisor();