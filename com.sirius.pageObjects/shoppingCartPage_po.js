var utilities = require('../com.sirius.reusables/utilities.js');
var pageConstants = require('../com.sirius.library/pageConstants.js');

let shoppingCart = function () {

  this.olean = element(by.id('btn_engrave_location_O_config'));
  this.pacificEngrave = element(by.id('btn_engrave_location_Z7_config'));
  this.regimbalAward = element(by.id('btn_engrave_location_Z9_config'));
  this.tideyEngrave = element(by.id('btn_engrave_location_Z8_config'));
  this.brandingTools = element(by.id('btn_engrave_location_T_config'));

  this.creditCart = element(by.id('btn_pricing_CC_config'));
  this.yourCommission = element(by.id('btn_pricing_REP_config'));

  this.checkoutButton = element(by.id("btn_checkout"));
  this.cartIcon = element.all(by.name("cart")).last();
  this.productLineItem = element(by.className('cart-item'));
  this.emptyCartLink = element(by.id('emptyCart_btn'));
  this.emptyCartLinkCancelButton = element(by.css(".cancel-btn"));
  this.emptyCartLinkEmptyCartButton = element(by.css(".empty-cart-btn"));
  this.noItemsInCartMessage = element(by.xpath(".//*[@class='cc-error-message'][contains(.,'No items in cart')]"));
  this.closeShoppingCartMobile = element(by.name('close'));
  this.confirmCustomGiftWrap = element(by.xpath(".//ion-title[contains(.,'Confirm Custom Gift Wrapping')]"));
  this.CustomWrapCheckoutbtn = element(by.xpath(".//ion-button[@type='submit']"));

  this.shoppingCartProductName = element(by.css(".cart-item-name"));
  this.shoppingCartQtyValidation = element(by.css("cc-cart-item .cc-select-qty-fake-value"));
  this.qtyWrapper = element(by.css("cc-cart-item .cc-select-qty-fake-value"));
  this.lastQtyValue = element.all(by.xpath(".//*[@class='cart-item-qty-wrapper']//cc-select")).last();
  this.qtySelected = element(by.xpath(".//*[@class='cart-item-qty-wrapper']//ion-select"));
  this.sellingPriceVerify = element(by.css('cc-cart-item .selling-price'));
  this.productColor = element(by.css("cc-cart-item .product-item-color"));
  this.productItemNumber = element(by.css(".cart-item-details-wrapper .product-item-number"));

  this.sellingPrice = element.all(by.css(".selling-price"));
  this.cartTotalPrice = element(by.css(".cart-order-total-price"));
  this.selectedCheckbox = element(by.xpath(".//button[@aria-checked='true']"));
  this.nonSelectedCheckbox = element(by.xpath(".//button[@aria-checked='false']"));
  this.nonSelectedCheckboxQtyValue = element(by.xpath(".//button[@aria-checked='false']//*[@class='alert-radio-label sc-ion-alert-md']"));
  this.lastQty = element(by.xpath('//ion-radio[@ng-reflect-name="option-10"]'));
  this.customQty = element(by.xpath('//ion-radio[@ng-reflect-name="option-3"]'));
  this.qtyModalOKButton = element(by.xpath('//*[@class="cc-button-wrapper-select"]/ion-button[2]'));
  this.qtyModalCancelButton = element(by.xpath('//*[@class="cc-button-wrapper-select"]/ion-button[2]'));
  this.overlayTitle = element(by.css(".modal-wrapper .title-md"));
  this.engraveText = element(by.css("#input_line0_engraving>input"));

  this.selectSecondProduct = element(by.xpath("(//cc-cart-item//*[@class='cart-item-details-wrapper'])[2]"));
  this.confirmCancelModal = element(by.xpath(".//ion-title[.='Confirm Cancel']"));
  this.confirmCancelYesButton = element(by.xpath(".//ion-button[.='Yes']"));
  this.confirmCancelNoButton = element(by.xpath(".//ion-button[.='No']"));

  this.bonusAdvisor = element(by.css("#bonusAdvisorBanner #btn_bonusAdvisor_ba"));
  this.savings = element(by.css("#bonusAdvisorBanner #btn_savings_ba"));
  this.upgrade = element(by.css("#bonusAdvisorBanner #btn_upgrade_ba"));

  this.savingsDisabled = element(by.css("#bonusAdvisorBanner #btn_savings_ba"));
  this.upgradeDisabled = element(by.css("#bonusAdvisorBanner #btn_upgrade_ba"));

  this.bonusAddFirstProduct = element(by.css("cc-bonusable-item .bonusable-item-add-to-cart"));
  this.bonusFirstProductName = element(by.css(".bonusable-item-name"));
  this.bonusQtyDropDown = element(by.css(".bonused-item-all .cc-select-qty-fake-value"));
  this.closeIconBonusOverlay = element(by.id("btn_close_ba"));

  this.bonusOverlayClose = element(by.id("btn_close_ba"));
  this.shoppingCartContent = element(by.xpath(".//*[@class='cart-content-wrapper']"));
  this.bonusSellingPrice = element(by.xpath("(.//*[@class='selling-price ng-star-inserted'])[1]"));
  this.cartMoreOption = element.all(by.xpath("(.//*[@name='more'])")).last();
  this.CartItemName = element.all(by.className("cart-item-name")).last();

  this.bonusFromCatalog = element(by.xpath('//div[@class="tabs-header"]//span[contains(text(),"From Catalog")]'));
  this.bonusFromCart = element(by.xpath('//div[@class="tabs-header"]//span[contains(text(),"From Cart")]'));
  this.bonusAdvisorGiftErrorMsg = element(by.xpath(".bonusable-items-wrapper .cc-error-message"));


  this.moreBonusOption = element.all(by.id("text_bonus_cpo")).last();
  this.moreDeleteOption = element.all(by.css("#text_delete_cpo")).last();
  this.moreEngraveOption = element.all(by.id("text_editEngrave_cpo")).last();
  this.cartProductSKU = element(by.css(".cart-item-details-wrapper .product-item-number"));
  this.check = element(by.xpath("(//*[@class ='cc-cart-popover-wrapper ion-item-options hydrated']//ion-col)[1]"));

  this.saveOrderReasonField = element(by.xpath(".//textarea"));
  this.saveButton = element(by.id("btn_saveOrder_cart"));
  this.cancelSaveOrder = element(by.css("#btn_cancel_som"));
  this.saveOrderButton = element(by.id("btn_save_som"));

  //EngraveOption
  this.engraveTypeEngrave = element(by.id("btn_type_E_engraving"));
  this.engraveTypeMonoGram = element(by.id("btn_type_M_engraving"));
  this.engraveTypeBlade = element(by.id("btn_placement_B_engraving"));
  this.engraveTypeSquarePlate = element(by.id("btn_placement_S_engraving"));
  this.engraveTypeDiamondPlate = element(by.id("btn_placement_D_engraving"));
  this.engraveBonusNo = element(by.id("btn_no_engraving"));
  this.engraveBonusYes = element(by.id("btn_yes_engraving"));
  this.GWBonusNO = element(by.id("btn_no_gw"));
  this.GWBonusYes = element(by.id("btn_yes_gw"));
  this.engraveText = element(by.css("#input_line0_engraving>input"));
  this.engraveSubmitButton = element(by.id("btn_apply_engraving"));
  this.GWSubmitButton = element(by.id("btn_submit_gw"));
  this.engravingAIcon = element(by.css(".cart-item-additional-icons"));
  this.bonusAdvisorengravingAIcon = element(by.css("cc-bonusable-item .engraving-icon-wrapper"));

  //configuration icon
  this.configSetting = element.all(by.id('header_config_btn')).first();
  this.configSettingMobile = element.all(by.id('header_config_btn')).last();
  this.homeDemo = element(by.id("btn_location_HOME_DEMO_config"));
  this.virtualDemo = element(by.id("btn_location_VIRTUAL_DEMO_config"));
  this.eventDemo = element(by.id("btn_location_EVENT_DEMO_config"));

  this.socialDemo = element(by.id("btn_location_SOCIAL_DEMO_config"));
  this.socilContainer = element(by.css(".checkin-container ion-text"));
  this.eventCheckinContainer = element.all(by.css(".checkin-container")).last();
  this.socailDemoDate = element(by.css(".social-detail"));
  this.eventState = element(by.css(".checkout-select-item>ion-select"));
  this.eventDetailsSearch = element(by.xpath("//input[@placeholder = 'Type to filter']"));
  this.eventDetailsName = element(by.css(".event-detail"));
  this.socialDemoSubmitButton = element(by.css(".select-btn"));
  this.socialDemoSubmitButtonEnable = element(by.css(".select-btn.ion-activatable"));
  this.checkStatus = element(by.css(".checkin-status"));
  this.checkoutStatusChange = element(by.css(".checkout-container"));

  this.customerSelect = element(by.css(".search-customer"));
  this.customerSearchInput = element(by.css(".search-inputs input"));
  this.customerSelection = element(by.css("cc-customer-detail-item div"));
  this.customerSearchButton = element(by.css(".search-button"));
  this.customerSearchSelectButton = element(by.css(".select-btn"));

  this.inventoryToggleSelecticon = element(by.css('.inventory-toggle'));

  this.orderTypeRegular = element(by.id("btn_orderType_REG_config"));
  this.orderTypeRelator = element(by.id("btn_orderType_RLT_config"));
  this.orderTypeBusiness = element(by.id("btn_orderType_BIZ_config"));
  this.priceSetupStandard = element(by.id("btn_pricing_STANDARD_config"));
  this.priceSetupCatalog = element(by.id("btn_pricing_CATALOG_config"));
  this.updateConfig = element(by.id("btn_update_config"));
  this.cancelConfig = element(by.id("btn_cancel_config"));
  this.useCatalogPricing = element(by.css(".catalog-pricing-btn"));
  this.eventTextArea = element(by.css('#textarea_eventInformation ion-textarea textarea'));

  //Empty cart 
  this.emptyCartStartNewOrderNoRadio = element(by.css(".option-custom-indicator>.option-custom-indicator-fill"));
  this.emptyCartStartNewOrderYesRadio = element.all(by.css(".option-custom-indicator>.option-custom-indicator-fill")).last();
  this.emptyCartSaveOrderTypeNoRadio = element.all(by.css(".save-order-wrapper .cc-answers ion-item")).first();
  this.emptyCartSaveOrderTypeYesRadio = element.all(by.css(".save-order-wrapper .cc-answers ion-item")).last();
  this.emptyCartModel = element(by.css(".cc-modal-content-inner .current-cart .cart-item-image-wrapper"));
  this.pendingOrderReplaceCartButton = element(by.xpath(".//ion-button[contains(.,'Replace Cart')]"));
  this.pendingOrderProductName = element.all(by.css(".curent-cart-items .cart-item-details-wrapper p")).first();

  //Savings option overlay
  this.arrowForward = element.all(by.xpath(".//*[@name='arrow-forward']")).last();
  this.compare = element(by.xpath(".//cc-set-comparison-selection-modal//ion-button[contains(.,'Compare')]"));
  this.continue = element(by.xpath("//ion-button[contains(.,'Continue')]"));
  this.setComparisonOverlay = element(by.css("#modal_setComparison>ion-toolbar>ion-title"));
  this.replaceSetBtn = element(by.id("btn_replace_scm"));

  //GiftWrappingCartitems
  this.addGiftWrappingBtn = element(by.id("btn_giftWrapGhostItem"));
  this.giftWrapMoreOption = element(by.xpath(".//*[contains(.,'WRAPALL')]/parent::div[@class='cart-item-details-wrapper']//parent::div//*[@name='more']"));
  this.allItemsIndividual = element(by.id("btn_allItemsIndividually_gw"));
  this.giftWrapMoreOption = element(by.css("cc-gift-wrap-cart-item .cart-item-gw .cart-item-menu-wrapper>ion-icon"));
  this.allItemsIndividual = element(by.css("cc-gift-wrapping-option-modal #btn_allItemsIndividually_gw"));
  this.customWrapping = element(by.id("btn_custom_gw"));
  this.giftWrapText = element(by.xpath("//p[contains(.,'GIFT')]"));
  this.giftWrapHeader = element(by.id("title_giftWrappingOptions"));
  this.selectQtyGW = element(by.xpath('//*[@class="cc-form-item"]/span'));
  this.GWInstructions = element(by.css("#textarea_instructions_gw ion-item textarea"));
  this.customGiftwrapCheckout = element(by.css("cc-gift-wrapping-confirmation-modal ion-button:nth-of-type(2)"));

  //Cart Validation 
  this.priceEachItem = element.all(by.css(".selling-price"));
  this.cartTotalPrice = element(by.css(".cart-order-total-price"));
  this.priceBonusItem = element(by.css("cc-cart-item .selling-price"));

  //engraving
  this.engraveApplied = element(by.css(".engraving-name"));
  this.engraveModalHeader = element(by.css("cc-engraving-modal ion-title"));
  this.shoppingCartHeader = element(by.css("cc-cart .shopping-cart-header"));

  //set break down
  this.setBreakButton = element(by.css('#text_editBreakdown_cpo'));
  this.setBreakHeader = element(by.xpath("//ion-title[contains(text(),'Set Breakdown Confirmation')]"));
  this.setBreakContinue = element(by.xpath("//ion-button[contains(text(),'Continue')]"));
  this.setBreakCancel = element(by.xpath("//ion-button[contains(text(),'Cancel')]"));

  this.bonusQtyIncrease = function (qty) {
    var bonusqtyIncreaseSelect = element(by.css(".cc-modal-select-option:nth-of-type(" + qty + ")"));
    utilities.HighlightElement(bonusqtyIncreaseSelect);
    bonusqtyIncreaseSelect.click();
  }

  this.checkEnabled = function (name) {
    var check = element(by.xpath(".//*[@class='option-content-wrapper']//div[contains(.,'" + name + "')]//ancestor::div[@class='option-content-wrapper']//ion-icon"));
    utilities.HighlightElement(check);
    check.getAttribute('ng-reflect-name').then(function (text) {
      var storeAttributeValue = text;
      if (storeAttributeValue == 'checkmark' || storeAttributeValue == 'cc-engrave') {
        utilities.log(" Testing if loop : ", storeAttributeValue);
        check.click();
        return true;
      } else {
        return false;
      }
    });
  }

  this.checkBonusApplied = function (productName) {
    var price = element(by.xpath(".//*[@class='product-item-number'][contains(.,'" + productName + "')]//ancestor::div[@class='cart-item-all']//span[contains(@class,'selling-price')]"));
    price.getText().then(function (text) {
      assert.equal(text, '$0.00');
    })
  }

  this.selectQuantity = function (value) {
    var button = element(by.xpath("//button[@aria-checked='false']//*[@class='alert-radio-label sc-ion-alert-md' and contains(.,'" + value + "')]"));
    button.click();
  }

  this.EvenetbillingstateCheckout = function (state) {
    var button = element(by.xpath(".//*[@class='alert-radio-label sc-ion-alert-md' and contains(.,'" + state + "')]"));
    utilities.scrollTo(button);
    button.click();
  }

  this.productMoreOption = function (productName) {
    var button = element(by.xpath(".//*[contains(.,'" + productName + "')]/ancestor::div[@class='cart-item-all']//ion-icon[@name='more']"));
    utilities.waitForElement(button, 20000);
    utilities.scrollTo(button);
    utilities.HighlightElement(button);
    browser.sleep(5000);
    button.click();
    browser.sleep(7000);
  }

};

module.exports = shoppingCart;