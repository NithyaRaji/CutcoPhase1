var pageConstants = require('../com.sirius.library/pageConstants.js');

let addressesPage = function () {

    //Page Object Lists
    this.customerType = element(by.css("#select_customerType"));
    this.usernameText = element(by.xpath('.//input[@type="name"]'));
    this.provideEventDetail = element.all(by.css('.native-textarea'));
    this.provideEventDetailFirst = element.all(by.css('.native-textarea')).first();
    this.marketingMethod = element(by.css("#select_marketingMethod"));
    this.socialName = element(by.css("#input_socialInfo"));
    this.eventName = element(by.css(".checkout-select.event-number"));
    this.billFirstName = element(by.css("#input_firstName>input"));
    this.billLastName = element(by.css("#input_lastName>input"));
    this.billCompanyName = element(by.css("#input_companyName>input"));
    this.billAddress1 = element(by.css("#input_address1>input"));
    this.billAddress2 = element(by.css("#input_address2>input"));
    this.billCity = element(by.css("#input_city>input"));
    this.billStateDropDown = element(by.id("select_state"));
    this.billZipCode = element(by.css("#input_zipCode>input"));
    this.billPhoneNumber = element(by.css("#input_phoneNumber>input"));
    this.billAltPhoneNumber = element(by.css("#input_phoneNumber2>input"));
    this.billEmail = element(by.css("#input_email>input"));
    this.billStateDistrictDrop = element(by.css(".alert-radio-group button:nth-child(1)"))
    this.billDropDownOk = element(by.css(".confirm"));
    this.billEmailLabel = element(by.xpath(".//*[@class='checkout-label']//*[.='Email']"));
    this.eventDetails = element(by.css("#textarea_eventInformation textarea"));
    
    this.languageEnglish = element(by.css("#radios_language_english>ion-label"));
    this.languageFrench = element(by.css("#radios_language_french>ion-label"));
    this.languageSpanish = element(by.css("#radios_language_spanish>ion-label"));
    this.shippingSameAsBillingYes=element(by.xpath(".//ion-label[.='Yes']"));
    this.shippingSameAsBillingNo = element(by.xpath(".//ion-label[.='No']"));
    this.billEmailLabelMobile = element(by.xpath(".//ion-label[contains(.,'Email')]"));
    this.shippingSameAsBillingYes=element(by.xpath(".//div[@class='element-group-wrapper clear-border']//div[contains(.,'Shipping same as billing')]//following-sibling::div//ion-label[.='Yes']"));
    this.shippingSameAsBillingNo = element(by.xpath(".//div[@class='element-group-wrapper clear-border']//div[contains(.,'Shipping same as billing')]//following-sibling::div//ion-label[.='No']"));
    this.isShippingRequiredYes = element(by.xpath(".//div[@class='element-group-wrapper clear-border']//div[contains(.,'Is shipping required')]//following-sibling::div//ion-segment-button[@value='yes']"));
    this.isShippingRequiredNo = element(by.xpath(".//ion-segment-button[contains(.,'No')]"));

    this.shipFirstName = element(by.css("#input_firstName_shipping>input"));
    this.shipLastName = element(by.css("#input_lastName_shipping>input"));
    this.shipCompanyName = element(by.css("#input_companyName_shipping>input"));
    this.shipAddress1 = element(by.css("#input_address1_shipping>input"));
    this.shipAddress2 = element(by.css("#input_address2_shipping>input"));
    this.shipCity = element(by.css("#input_city_shipping>input"));
    this.shipStateDropDown = element(by.id("select_state_shipping"));
    this.shipZipCode = element(by.css("#input_zipCode_shipping>input"));
    this.shipPhoneNumber = element(by.css("#input_phoneNumber_shipping>input"));
    this.shipAltPhoneNumber = element(by.css("#input_phoneNumber2_shipping>input"));
    this.shippingDropdownLength = element.all(by.css(".alert-radio-label.sc-ion-alert-md"));
    this.shipAltPhoneNumberLabel = element(by.xpath("(.//ion-label[contains(.,'Alt. Phone')])[2]"));

    this.searchCustomer = element(by.css(".customer-search-wrapper input"));
    this.customerSearchTextField = element(by.xpath(".//*[@id='input_lastName_cs']//input"));
    this.customerSearchModalAdvanceSearch = element(by.xpath(".//span[contains(text(),' Advanced Search ')]"));
    this.customerSearchModalSearchButton = element(by.id("btn_search_cs"));
    this.customerSearchModalCustomerNumber = element(by.css("#input_customerNumber_cs>input"));
    this.customerSearchModalFirstName = element(by.css("#input_firstName_cs>input"));
    this.customerSearchModalLastName = element(by.css("#input_lastName_cs>input"));
    this.customerSearchModalPhone = element(by.css("#input_phoneNumber_cs>input"));
    this.customerSearchModalEmail = element(by.css("#input_emailAddress_cs>input"));
    this.customerSerachModalCloseButton = element(by.xpath(".//*[@class='ion-page']//ion-icon[@name='close']"));
    this.customerSearchNoResult = element(by.css(".no-result-message"));
    this.customerDetailsResult = element(by.css(".cc-customer-detail-item-wrapper"));
    this.customerDetailsResultLast = element.all(by.css(".cc-customer-detail-item-wrapper")).last();
    this.customerSearchModalBasicSearch = element(by.xpath(".//span[contains(text(),' Basic Search ')]"));

    // this.customerTypeNew = element(by.css(".alert-radio-group button:nth-child(1)"));
    this.customerTypeNew = element(by.css(".ng-dropdown-panel-items span:nth-child(1) , .alert-radio-group button:nth-child(1)"));
    this.customerTypeNewMobile = element(by.css('ionic-selectable-modal ion-item'));
    this.customerTypePrevious = element(by.xpath(".//div[.=' Previous ']"));
    this.customerTypeOther = element(by.xpath(".//div[.=' Other ']"));

    this.modalOkButton = element(by.xpath(".//span[.='OK']"));
    this.modalCancelButton = element(by.xpath(".//span[.='Cancel']"));
    this.saveButton = element(by.css("#btn_saveOrder_ci"));
    this.nextButton = element(by.css("#btn_next_ci"));

    this.standardizationAddress = element(by.css(".address"));
    this.standardizationBillingAddress = element(by.xpath(".//*[@class='address-card']/div[contains(.,'Standardized Billing Address')]"));
    this.standardizationAddressCount = element.all(by.css(".address-option-item"));
    this.enteredBillingAddress = element(by.css(".address-option-item:nth-of-type(1)"));
    this.suggestedBillingAddress = element(by.css(".address-option-item:nth-of-type(2)"));
    this.standardizationHeader = element(by.xpath(".//ion-title[contains(.,'Address Standardization')]"));
    this.continueButton = element(by.xpath(".//ion-button[contains(.,'Continue')]"));

    this.customerDetailCheckbox = element(by.xpath("//ion-radio-group/ion-item"));
    this.selectButton = element.all(by.xpath("//cc-customer-search-modal//ion-button")).last();
    this. checkoutwrapper = element(by.xpath(".//*[@class='checkout-progress-wrapper']"));
    this.selectState = function(stateName){
    var stateValue = element(by.xpath(".//*[.='State']/parent::*/parent::*//*[@class='alert-radio-label sc-ion-alert-md'] [contains(.,'"+stateName+"')]"));
    stateValue.click();
    }
    
};
module.exports =  addressesPage;