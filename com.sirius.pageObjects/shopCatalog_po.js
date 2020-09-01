var pageConstants = require('../com.sirius.library/pageConstants.js');

let shopCatalog = function () {

    //Page Object Lists
    this.cartButton = element(by.css('.product-cart-btn'));
    this.productGrid = element(by.xpath(".//*[@class='product-image-container']//*[@class='cc-image cc-img-loaded']"));
    this.categoryHeader = element(by.css('.category-name'));
    this.gridViewOpt = element(by.name('grid'));
    this.listViewOpt = element(by.name('list'));
    this.listViewContainer = element(by.css('.menu-content-overlay'));
    this.productListCount = element.all(by.css('.cc-list-col'));
    this.listAddToCartButton = element(by.css('.product-cart-btn'));
    this.listAddToCartButtons = element.all(by.css('.product-cart-btn'));
    this.carousalImage = element(by.className('product-detail-images-wrapper'));
    this.addToCartPlp = element(by.css(".product-order-info .product-cart-btn"));

    this.optionContainer = element(by.css(".option-container"));
    this.storageOptionCheckbox = element(by.xpath(".//ion-list-header[.='Storage Option']//ancestor::div[1]//ion-radio[@ng-reflect-checked='false']"));
    this.blockFinishCheckbox = element(by.xpath(".//ion-list-header[.='Block Finish']//ancestor::div[1]//ion-radio[@ng-reflect-checked='false']"));
    this.chefKnifeCheckbox = element(by.xpath(".//ion-list-header[.='Chef Knife']//ancestor::div[1]//ion-radio[@ng-reflect-checked='false']"));
    this.rivetHandleColorCheckbox = element(by.xpath(".//ion-list-header[.='Rivet Handle Color']//ancestor::div[1]//ion-radio[@ng-reflect-checked='false']"));
};

module.exports = shopCatalog;