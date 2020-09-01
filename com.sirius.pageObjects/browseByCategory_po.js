var pageConstants = require('../com.sirius.library/pageConstants.js');

let browseByCategory = function () {

    //Page Object Lists
    this.browseByCategoryHeader = element(by.css(".browse-heading"));
    this.productNameSelect = element.all(by.css(".image-wrapper img")).first();
    this.productName = element.all(by.css('.card-native>div')).first();
    this.searchMobileLogo = element.all(by.name('search')).last();
    this.searchInput = element(by.css("#productSearchBar input"));
    this.searchInputMobile = element.all(by.css("#productSearchBar .searchbar-input")).last();
    this.searchMobileIcon = element.all(by.css(".cc-header-search-btn")).last();
    this.searchInputMobileSetPage = element(by.xpath("(//input[@type='search'])[4]"));
    this.searchInputMobilePdp = element(by.xpath("(//input[@type='search'])[5]"));
    this.searchCloseOption = element.all(by.name('close')).last();
    this.searchInputValue = element(by.css('#productSearchBar'));
    this.searchResult = element(by.css(".cc-list-col .product-image-container"));
    this.categoryCarouselImage = element(by.xpath(".//*[@class='swiper-slide hydrated swiper-slide-active']//img"));
    this.keepSearchingText = element(by.css(".cc-inline-center.cc-search-message"));
    this.listOfSearchResult = element(by.css('.cc-list-col .product-image-container'));
    this.noResultMessage = element(by.css(".cc-inline-center.cc-search-message"));
    this.searchAddToCartButton = element.all(by.css('.product-cart-btn>span , .cc-list-col .product-image-container')).first();
    this.searchAddToCartButton1 = element.all(by.css('.product-cart-btn>span')).first();
    this.searchClear = element(by.css(".searchbar-clear-icon.sc-ion-searchbar-ios"));
    this.searchOptionMobile = element.all(by.xpath(".//*[@name='search']")).last();
    this.searchResultImage = element(by.css(".cc-product-item .cc-image-wrapper"));
    this.popupNextButton = element(by.css(".introjs-nextbutton"));
    this.popupDoneButton = element(by.css(".introjs-donebutton"));
    this.loader = element(by.css('.loading-spinner'));
    this.retryBtn = element(by.css('.retry-btn button'));

    this.sliderBar = element(by.xpath("//ion-range"));
    this.bonusLimit = element(by.id('order-config-bonus-limit'));
    this.bonusPercent = element(by.css('.cc-bonus-value.cc-bonus-val-warning'));

};

module.exports = browseByCategory ;