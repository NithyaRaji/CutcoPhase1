let 
bonusAdvisorobj = function () {

  this.bonusAdvisor = element(by.css("#bonusAdvisorBanner #btn_bonusAdvisor_ba"));
  this.bonusAddFirstProduct = element(by.css("cc-bonusable-item .bonusable-item-add-to-cart"));
  this.bonusFirstProductName = element(by.css(".bonusable-item-name"));
  this.bonusQtyDropDown = element(by.xpath(".//*[contains(@class,'bonused-item')]//span[@class='cc-select-qty-fake']"));
  this.closeIconBonusOverlay = element(by.id("btn_close_ba"));
  this.productQtyOkButton = element(by.xpath("//cc-qty-select-modal//ion-button [contains(.,'OK')]"));

  this.bonusFromCatalog = element(by.xpath('//div[@class="tabs-header"]//span[contains(text(),"From Catalog")]'));
  this.bonusFromCart = element(by.xpath('//div[@class="tabs-header"]//span[contains(text(),"From Cart")]'));

  this.bonusProductMore = element.all(by.xpath('//div[@class="bonused-items-wrapper"]//ion-icon[@name="more"]')).first();   
  this.bonusProductDelete = element(by.id('bonused_item_remove_item'));
  this.bonusProductUnBonus = element(by.id('bonused_item_unbonus_item'));

  this.searchbar = element(by.xpath('.//div[@class="bonus-advisor-wrapper"]//input'));

  this.bonusOrderHealthBar = element(by.css('cc-bonus-advisor-modal #header_cust_order_snap'));
  this.bonusOrderBonusPercent = element(by.css('cc-bonus-advisor-modal .order-health-indicator-values-percent'));
  this.bonusOrderBonusPts = element(by.css('cc-bonus-advisor-modal .order-health-indicator-values-points'));

  this.bonusOrderGreenThumb = element(by.css('cc-bonus-advisor-modal .icon-green.thumb.md.hydrated'));
  this.bonusOrderOrangeThumb = element(by.css('cc-bonus-advisor-modal .icon-orange.thumb.md.hydrated'));

  this.popSort = element(by.xpath("//span[contains(text(),'Points')]"));
  this.pointSort = element(by.xpath("//span[contains(text(),'Popularity')]"));

  this.firstProduct = element(by.css("cc-bonus-advisor-modal .bonusable-item-name"));

  this.configColor = element(by.xpath("//cc-bonus-advisor-modal//span[contains(text(),'Configure')]"));
  this.color2 = element(by.xpath("//cc-bonus-advisor-modal//ion-radio-group/ion-item[2]")); 

  this.productCurrentlyBonused = element(by.css('.bonused-items-content .bonused-item-wrapper'));

  this.productFromCart = element(by.css('.bonusable-item.ng-star-inserted.item.md.ion-focusable.hydrated'));
  this.bonusItemButton = element(by.xpath("//span[contains(text(),'Bonus Item')]"));

};

module.exports = bonusAdvisorobj ;