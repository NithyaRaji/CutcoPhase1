let productDetailsPage = function () {

    //Page Object Lists
    this.addToCartButton = element.all(by.id("btn_addToCart_pp")).last();
    this.productAttributeContainers = element(by.className('option-container'));
    this.productGrid = element(by.css('.cc-grid-col .cc-product-item'));
    this.carousalImageVerify = element.all(by.css('.product-detail-images-wrapper')).last();
    this.carousalImageVerifyUpdate = element.all(by.css(".product-detail-single-image")).last();
    this.carousalImageEdit = element.all(by.css('.product-detail-images-wrapper')).last();
    this.quantityLabel = element(by.className(".product-detail-quantity-item"));
    this.quantityLabelUpdate = element(by.css(".product-detail-quantity-item"));
    this.quantityDropDown  = element(by.css('.cc-select-qty-fake'));
    this.quantityDropDownItem  = element.all(by.css('.in-item')).last();
    this.productMoreOptionsQty = element(by.css('.more-input input'));
    this.productMoreOptionDropdown = element(by.xpath(".//*[@name='option-more']"));
    this.productQtyOkButton = element(by.xpath("//cc-qty-select-modal//ion-button [contains(.,'OK')]"));
    this.quantityDropDownEdit = element.all(by.css(".product-detail-quantity-item .cc-select-qty-fake-value")).last();
    this.priceLabel = element(by.css('.product-detail-price'));
    this.priceLabelUpdate = element.all(by.className('product-detail-price')).last();
    this.productPrice = element.all(by.css('.product-detail-price  .extended-product-price')).last();
    this.productPriceUpdate = element(by.xpath(".//*[@class='product-price']"));
    this.productDetailInfo = element(by.css('.product-detail-info'));
    this.productDetailInfoUpdate = element.all(by.className("product-detail-info")).last();
    this.swiperPaginationBullets = element(by.css('.swiper-pagination swiper-pagination-bullets'));
    this.productToastMessage = element(by.css('#toast-container'));
    this.updateButton = element(by.css('#btn_update_ecp , #btn_update_ecm'));
    this.cancelButton = element(by.css('#btn_cancel_ecp , #btn_cancel_ecm'));
    this.skuNumber = element(by.css('.product-title>.product-item-number'));
    this.searchProductName = element(by.css(".product-title"));
    this.defaultAttributeSelection = element(by.css(".item-label.item-radio-checked"));
    this.cartIconMobile = element.all(by.xpath("(.//*[@name='cart'])")).last();

    //max quantity verification
    this.notMoreThan999Error = element(by.xpath(".//div[contains(text(),'Quantity cannot be greater than 999')]"));
    this.notMoreThan99Error = element(by.xpath(".//div[contains(text(),'Quantity cannot be greater than 99')]"));
    this.notMoreThan9999Error = element(by.xpath(".//div[contains(text(),'Quantity cannot be greater than 9999')]"));


    this.skuId = element(by.xpath("(.//div[@class='product-detail-info']//span[contains(@class,'product-item-number')])"));
    this.productName = element.all(by.className("product-title")).last();
    this.giftCardQtyMsg = element(by.css(".warning-text"));
    this.giftCardInput = element(by.css(".product-detail-giftcard-amount input"));
    this.giftCardInputText = element(by.css(".product-detail-giftcard-amount"));
    this.giftCardQty = element(by.css(".product-detail-giftcard-quantity-col"));
    this.giftCardMsg = element(by.css(".cc-form-group ion-checkbox"));

    this.giftWrapHeader = element(by.xpath("//ion-title[contains(.,'Gift Wrapping')]"));
    this.giftWrapAllItem = element(by.id("btn_allItemsTogether_gw"));
    this.giftWrapIndividualItem = element(by.id("btn_allItemsIndividually_gw"));
    this.giftWrapCustomItem = element(by.id("btn_custom_gw"));
    
};

module.exports = productDetailsPage ;