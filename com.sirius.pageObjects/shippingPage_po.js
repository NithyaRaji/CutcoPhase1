let addressesPage = function () {
    
    //Page Object Lists
    this.shippingMethods = element(by.id("radios_shippingMethod"));
    this.nextButton = element(by.id("btn_next_sp"));
};
module.exports =  addressesPage;