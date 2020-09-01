let paymentPage = function () {

  this.taxImg = element(by.xpath('//input[@type="file"]'));

  //Page Object Lists
  this.checkoutProgress = element(by.xpath(".//*[@class='checkout-progress-wrapper']"));
  this.paymentProgressHeader = element(by.xpath("(.//*[@class='checkout-progress-wrapper'])[2]"));
  this.checkoutProgressPlaceOrderPage = element(by.css('.checkout-progress-wrapper'));
  this.shippingMethodHeader = element(by.xpath(".//h4[contains(.,'Shipping Method')]"));
  this.shippingMethods = element(by.css(".checkout-radio-wrapper.options-wrapper"));
  this.groundShippingMethod = element(by.id("radios_shippingMethod_REG"));
  this.expressShippingMethod = element(by.id("radios_shippingMethod_1DY"));
  this.twoDayShippingMethod = element(by.id("radios_shippingMethod_2DY"));
  this.handDeliveredMethod = element(by.id("radios_shippingMethod_PRE"));
  this.militaryStarCard = element(by.xpath(".//*[@id='radio_paymentMethod_sp']//ion-item[contains(.,'Military')]"));
  this.creditCardPayment = element(by.xpath(".//*[@id='radio_paymentMethod_sp']//ion-item[contains(.,'Credit')]"));
  this.paperChequePayment = element(by.xpath(".//*[@id='radio_paymentMethod_sp']//ion-item[contains(.,'Paper')]"));
  this.achCard = element(by.xpath(".//*[@id='radio_paymentMethod_sp']//ion-item[contains(.,'ACH')]"));
  this.taxableTaxable = element(by.xpath(".//*[@id='radio_taxableStatus_sp']//ion-item[contains(.,'Taxable')]"));
  this.exemptPstTaxable = element(by.xpath(".//*[@id='radio_taxableStatus_sp']//ion-item[contains(.,'PST')]"));
  this.exemptGstTaxable = element(by.xpath(".//*[@id='radio_taxableStatus_sp']//ion-item[contains(.,'GST')]"));
  this.taxExempt = element(by.xpath(".//*[@id='radio_taxableStatus_sp']//ion-item[contains(.,'Tax Exempt')]"));
  this.exemptBothTaxable = element(by.xpath(".//*[@id='radio_taxableStatus_sp']//ion-item[contains(.,'Both')]"));
  this.nextButton = element(by.css(".menu-content .cc-button-wrapper  ion-button:nth-of-type(2)"));
  this.certificateNumber = element(by.id("input_taxExemptNumber_sp"));
  this.shippingMethodOptions = element.all(by.css('#radios_shippingMethod>ion-item'));
  this.formGroup = element(by.css("#form_shippingAndPaymentForm"));
  this.specialInstructionsCheckbox = element.all(by.xpath(".//ion-item[contains(@class,cc-checkbox-standalone)]//ion-checkbox")).first();

  //PlaceOrder Page
  this.billingAddressSection = element(by.css(".contact-info-wrapper"));
  this.adjustTotalLinkCheckbox = element(by.id("cb_adjustTotals_aot"));
  this.adjustTotalInputTextBox = element(by.css(".cc-currency-field input"));
  this.adjustTotalInputTextBoxiOS = element(by.css(".cc-currency-field input"));
  this.adjustTotalUpdateLink = element(by.id("btn_updateAdjustOrderTotals"));
  this.maxAdjustErrorCheck = element(by.css(".warning-text.error-message"));
  this.paymentTotalAfterAdjustment = element(by.xpath("//span[contains(.,'This Payment')]//following-sibling::span"));
  this.orderTotalText = element(by.id("value_thisPayment"));
  this.itemSubTotalValue = element(by.xpath("(//ion-col[contains(.,'Item Subtotal')]//parent::ion-row//ion-col)[2]"));
  this.shippingCostsValue = element(by.xpath("(//ion-col[contains(.,'Shipping Costs')]//parent::ion-row//ion-col)[2]"));
  this.adminFeesValue = element(by.xpath("(//ion-col[contains(.,'Admin Fees')]//parent::ion-row//ion-col)[2]"));
  this.bonusSavingsValue = element(by.xpath("(//ion-col[contains(.,'Bonus Savings')]//parent::ion-row//ion-col)[2]"));
  this.saleTaxValue = element(by.xpath("(//ion-col[contains(.,'Sales Tax')]//parent::ion-row//ion-col)[2]"));
  this.totalBeforeTaxValue = element(by.xpath(".//*[.='Total Before Tax: ']/following-sibling::span"));
  this.orderTotalValue = element(by.xpath("//b[contains(.,'Order Total')]//parent::ion-col//span[@class='text-price']"));

  this.cardDetailsNumberTextbox = element(by.css("#input_cardNumber_pd>input"));
  this.cardDetailsMonthTextbox = element(by.css("#input_expDate_pd>input"));
  this.saveButton = element(by.id("btn_saveOrder_po"));
  this.placeOrderButton = element(by.id("btn_placeOrder"));
  this.orderInfo = element(by.css(".card-wrapper"));

  this.saveOrderOverlayButton = element(by.css(".modal-wrapper .cc-button-wrapper ion-button:nth-of-type(2)"));
  this.customerNotPresentCheckbox = element(by.css(".cc-form-group.auth-panel ion-checkbox"));

  //Review Page 
  this.myReceipt = element(by.xpath(".//*[@class='btn-wrapper']//ion-button[contains(.,'My receipt')]"));
  this.orderConfirmationMessage = element.all(by.css(".checkout-wrapper")).last();
  this.orderNumber = element(by.css(".card-wrapper div:nth-of-type(2)"));
  this.orderDate = element(by.css(".card-wrapper div:nth-of-type(4)"));
  this.configureEmailButton = element(by.xpath(".//*[@class='btn-wrapper']//ion-button[contains(.,'Configure')]"));
  this.configureCustomerButton = element(by.xpath(".//*[@class='btn-wrapper']//ion-button[contains(.,'Customer Receipt')]"));
  this.imDoneButton = element(by.id("btn_done_ocp"));
  this.adminWarningMsg = element(by.css(".warning-message"));
  this.orderInfo = element(by.css(".card-wrapper"));
  this.eventHandleThis = element(by.css(".payment-override-modal-content ion-button:nth-of-type(2)"));


  //Christmas checkbox
  this.confirmShippingSelection = element(by.xpath(".//ion-title[contains(.,'Confirm Shipping Selection')]"));
  this.christmasCheckbox = element(by.id("cb_beforeChristmas"));
  this.continueButton = element(by.xpath(".//ion-button[contains(.,'Continue')]"));

  //payment
  this.multiplePaymentOption = element(by.xpath(".//ion-label[contains(.,'Payments of')]"));
  this.onePaymentOption = element(by.xpath(".//ion-label[contains(.,'Payment of')]"));
  this.twopaymentOption = element(by.xpath("(.//*[@id='radio_paymentTerm_sp']//ion-item)[2]"));
  this.threepaymentOption = element(by.xpath("(.//*[@id='radio_paymentTerm_sp']//ion-item)[3]"));
  this.fivepaymentoption = element(by.xpath("(.//*[@id='radio_paymentTerm_sp']//ion-item)[4]"));
  this.paymentMethodHeader = element(by.xpath(".//h4[contains(.,'Payment Method')]"));
  //this.paymentNextButton = element(by.id("btn_saveOrder_sp"));
  this.paymentNextButton = element(by.id("btn_next_sp"));
  this.paymentNextButton1 = element(by.id("btn_next_sp"));
  this.paymentHeader = element(by.xpath(".//h4[contains(.,'Number of Payments')]"));

  this.taxFailedHeader = element(by.xpath(".//ion-header[contains(.,'Tax Rate Lookup Failed')]"));
  this.TaxField = element(by.xpath(".//*[@formcontrolname='taxRate']//input"));
  this.confirmTaxField = element(by.xpath(".//*[@formcontrolname='confTaxRate']//input"));
  this.saveButton = element.all(by.xpath(".//ion-button[contains(.,'Save')]")).last();

  //starcard payment details
  this.starCardNumber = element(by.xpath("//*[@formcontrolname='cardNumber']//input"));
  this.authorizationDate = element(by.xpath("//*[@formcontrolname='authorizationDate']//input"));
  this.authorizationCode = element(by.xpath("//*[@formcontrolname='authorizationCode']//input"));
  this.authorizationAmount = element(by.xpath("//*[@formcontrolname='authorizationAmount']//input"));

  this.imageField = element(by.css('input[type="file"]'));
  this.removeImg = element(by.xpath("//div[@class='image-btn'][contains(text(),'Remove')]"));
  
  //TaxExempt img fields
  this.taxImage1 = element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate1']//input"));
  this.taxImage2 = element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate2']//input"));
  this.taxImageSel1 = element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate1']//div[contains(text(),'Select')]"));
  this.taxImageSel2 = element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate2']//div[contains(text(),'Select')]"));
  this.taxImageRem1 = element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate1']//div[contains(text(),'Remove')]"));
  this.taxImageRem2 = element(by.xpath("//cc-image-capture[@formcontrolname='taxCertificate2']//div[contains(text(),'Remove')]"));

  //paper check/Mo card details
  this.checkNumber = element(by.xpath("//*[@formcontrolname='checkNumber']//input"));


  //ACH Card Details
  this.billingAddressHeader = element(by.xpath("//h4[contains(.,'Billing Address')]"));
  this.paymentDetailsHeader = element(by.xpath("//h4[contains(.,'Payment Details')]"));
  this.routingNumber = element(by.xpath(".//*[@formcontrolname='routingNumber']//input"));
  this.accountNumber = element(by.xpath(".//*[@formcontrolname='accountNumber']//input"));

  //Tax lookup failed
  this.taxLookupHeader = element(by.xpath(".//ion-title[contains(.,'Tax Rate Lookup Failed')]"));
  this.taxRateInput = element(by.xpath(".//*[@formcontrolname='taxRate']//input"));
  this.confirmTaxRate = element(by.xpath(".//*[@formcontrolname='confTaxRate']//input"));

  this.yourCommission = element(by.xpath("//ion-label[contains(text(),'Your')]/ancestor::ion-item"));

  //month&year
  this.year = element(by.id('select_expYear'));
  this.expyear = element(by.xpath('//span[contains(text(),"2026")]'));

  //signature
  this.signature = element(by.css('.signature-button.ng-star-inserted'));
  this.signPad = element(by.xpath('//signature-pad'));
  this.authorizeCheckBox = element(by.xpath('//cc-signature-pad-modal//ion-checkbox'));
  this.signAccept = element(by.xpath("//ion-button[contains(text(),'Accept')]"));

  this.checkEnabled = function (check) {
    check.getAttribute('ng-reflect-disabled').then(function (text) {
      var storeAttributeValue = text;
      if (storeAttributeValue == 'false') {
        return true;
      } else {
        return false;
      }
    });
  }

};
module.exports = paymentPage;