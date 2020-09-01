let menuList = function () {

    //Page Object Lists
    this.homeLink = element(by.id("menu_Home"));
    this.shopLink=element(by.css("#menu_Shop"));
    this.feedbackLink = element(by.id("menu_feedback"));
    this.logoutLink = element(by.id("menu_logout")); 
    this.promoLink = element(by.id('menu_Promotional Order'));
    this.litLink = element(by.id('menu_Literature Order'));
};

module.exports = menuList