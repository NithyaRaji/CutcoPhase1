var pageConstants = require('../com.sirius.library/pageConstants.js');

let Homepage = function () {

   //Page Object Lists
   this.passwordText = element(by.css('#password_input>input'));
   this.usernameText = element(by.css('#username_input>input'));
   this.loginButton = element(by.id("login_btn"));
   this.alertNoButton = element(by.xpath(".//span[.='No']"));
   this.cutcoLogo = element(by.css('.cc-logo-header'));
   this.contextSwitcher = element(by.css('#header_user_profile_btn'));
   this.completeSetupButton = element(by.css('#completeSetup_btn'));
   this.logoutButton = element.all(by.css("#menu_logout")).last();
   this.logoutMobile = element(by.css('#menu_logout'));
   
   this.vectorLoginScreen = element(by.css(".login-message"));
   this.browserLogoutLink = element(by.css('.menu-item'));
   this.contactProfile = element.all(by.css("#header_profile_btn")).first();
   this.messageGotItButton = element(by.id("btn_acknowledge_msg"));
   this.showAllLink = element(by.css('.show-more'));
   this.hamburgerMenu = element(by.id('header_menu_btn'));
   this.hamburgerMenuMobile = element.all(by.id("header_menu_btn")).last();
   this.careerCop = element(by.css('.career-cpo'));
   this.messageNotification = element.all(by.id('header_messages_btn')).first();
   this.messageNotificationMobile = element.all(by.id('header_messages_btn')).last();
   this.messageHeader =element(by.id("title_msg"));
   this.messageHeaderCount = element.all(by.css(".modal-wrapper-md ion-header"));
   this.messageCloseButton = element.all(by.name('close')).last();
   this.chartWrapper = element(by.className('progress-chart-wrapper'));

   this.changeCompany = element(by.id("menu_change_company"));
   this.masquerade = element(by.id("menu_start_masquerade"));
   this.masquaradeMobile = element(by.id("menu_beginMasquerade"));
   this.RepLabelMobile = element(by.xpath(".//*[@class='checkout-label']"));
   this.endMasquerade = element(by.id("menu_end_masquerade"));
   this.endMasquaradeMobile = element(by.id("menu_endMasquerade"));
   this.masqueradeHeader =element(by.css("cc-masquerade-modal ion-title"));
   this.repNameField = element(by.xpath("(.//div[contains(.,'Rep Name')]//input)[2]"));
   this.searchButton = element(by.xpath(".//ion-button[contains(.,'Search')]"));
   this.selectUserRow = element(by.css("cc-masquerade-user .user-row"));
   this.selectUserButton = element(by.xpath(".//ion-button[contains(.,'Select User')]"));
   this.devilIcon = element(by.id("header_profile_btn"));
   this.changeCompanyDisabledMobile = element(by.xpath(".//*[@id='menu_changeContext' and @aria-disabled='true']"));
   this.changeCompanyDisabled = element(by.xpath(".//*[@id='menu_changeContext' and @aria-disabled='true']"));
   this.changeCompanyMobile = element(by.id('menu_changeContext'));
   this.vectorUS = element(by.id("change_company_00004"));
   this.vectorCA = element(by.id("change_company_00005"));
   this.cutcoHomeUS = element(by.id("change_company_00018"));
   this.changeCompanyGoBack = element(by.css('.icon-wrapper'));
   this.confirmCompanySwitchModal = element(by.css("cc-cart-replacement-modal ion-title"));
   this.comments= element(by.css(".comment:nth-of-type(1)"));
   this.pendingOrderHeader = element(by.xpath("//span[contains(.,'Pending')]"));
   this.pendingOrderName = element(by.css(".name-and-expiry:nth-of-type(1)"));
   this.pendingOrderType = element(by.xpath('//cc-pending-order-item/div/ion-item-sliding/ion-item/div[2]/ion-grid/ion-row[2]/ion-col[3]'));
   this.resumeOrderMore = element(by.xpath("(.//*[@name='more'])[1]"));
   this.moreDeleteButton = element(by.css("cc-pending-order-popover .delete-option"));
   this.deleteCommentButton = element(by.css('cc-delete-pending-order-modal .delete'));

   this.companySwitchContent = element(by.css(".modal-wrapper .cart-item-all"));
   this.switchCompanyButton = element.all(by.css(".button-solid")).last();
   this.switchCompanyButton1 = element.all(by.css(".cc-button-wrapper .button-solid")).last();

   this.confirmCompanySaveOrderYes = element(by.css(".save-cart-section ion-item:nth-of-type(2)"));
   this.confirmCompanySaveOrderNo= element(by.css(".save-cart-section ion-item:nth-of-type(1)"));

   this.pendingOrderSummaryCount = element.all(by.css(".grid-wrapper"));
   this.pendingOrderSummaryFirst = element(by.css(".grid-wrapper"));
   this.showAllPendingOrderFirst = element(by.css(".modal-wrapper .cc-product-order-item-wrapper"));
   this.showAllPendingOrderLast = element.all(by.css(".modal-wrapper .cc-product-order-item-wrapper")).last();
   this.allPendingOrderModal = element(by.css(".modal-wrapper .title-md"));

   this.pendingOrderSaveforLater = element.all(by.css(".save-cart-section ion-item"));
   this.pendingOrderSaveforLaterYes = element(by.css(".save-cart-section ion-item:nth-of-type(2)"));
   this.pendingOrderSaveforLaterNo = element(by.css(".save-cart-section ion-item:nth-of-type(1)"));

   this.profileName = element(by.css("#header_profile_userFullName"));
   this.profileNumber = element(by.css("#header_profile_userRepNumber"));
   this.profilePlace = element(by.css("#header_profile_userActiveCompany"));

   this.companyNameMobile = element(by.css('.company'));
   this.messageCount = element(by.id('messageCountBadge'));

   
   this.companyNameCheck = function(companyName){
      var companyNamePO = element(by.xpath(".//div[contains(.,'" + companyName +"')]/parent::ion-item/ion-icon[contains(@class,'selected-company')]"));
      companyNamePO.isDisplayed();
   }
};

module.exports =  Homepage;