let menuList = function () {

    //Page Object Lists
    this.contactUsTitle = element(by.xpath(".//*[@class='md title-md title-default hydrated'][contains(.,'Contact us')]"));
    //this.contactDescription = element(by.xpath(".//*[@class='text-wrapper' and text()=' Please do not use this function for order/tab issues. This is intended for enhancement suggestions and feedback about the ROLO experience. ']"));
    this.contactReasonTitle = element(by.xpath(".//*[text()='Contact Reason']"));
    this.contactTypeProblem = element(by.xpath(".//ion-label[contains(.,' I Have a Problem')]"));
    this.contactTypeSuggestion = element(by.xpath(".//ion-label[contains(.,' I Have a Suggestion')]"));
    this.contactTypeHelpWithAnOrder = element(by.xpath(".//ion-label[contains(.,' I Need Help with an Order')]"));

    this.problemSeverityTitle = element(by.xpath(".//*[text()='Problem Severity ']"));
    this.problemSeverityLow = element(by.xpath(".//ion-label[text()='Low']"));
    this.problemSeverityMedium = element(by.xpath(".//ion-label[text()='Medium']"));
    this.problemSeverityHigh = element(by.xpath(".//ion-label[text()='High']"));
    this.orderNumberField = element(by.xpath(".//*[@class='checkout-input']//ion-input[@formcontrolname='orderNumber']//input"));
    this.customerNameField = element(by.xpath(".//*[@class='checkout-input']//ion-input[@formcontrolname='customerName']//input"));

    this.contactEmailField = element(by.xpath(".//*[@class='checkout-input']//ion-input[@formcontrolname='email']"));
    this.contactEmailAutoPopulated = element(by.className("native-input sc-ion-input-md"));
    this.contactEmailRequiredMessage = element(by.xpath("//div[contains(text(),' Email is required ')]"));
    this.contactEmailInvalidMessage = element(by.xpath("//div[contains(text(),' Not a valid email ')]"));
    this.emailLabel = element(by.xpath(".//ion-label[contains(.,'Email')]"));

    this.contactDetailsTextArea = element(by.xpath(".//textarea"));
    this.contactDetailsRequiredWarning = element(by.xpath(".//div[@class='warning-text error-message']/div[text()=' Details are required ']"));
    this.contactDetailsInvalidWarning = element(by.xpath(".//div[contains(text(),'Details contain invalid characters')]"));
  
    this.contactOrderNumberWarningMessage = element(by.xpath(".//div[@class='warning-text error-message']//div[text()=' Order Number is required ']"));
    this.contactCustomerNameWarningMessage = element(by.xpath(".//div[@class='warning-text error-message']//div[text()=' Customer Name is required ']"));


    this.sendButtonDisabled = element(by.xpath(".//ion-button[contains(.,'Send') and @ng-reflect-disabled='true']"));
    this.sendButtonEnabled = element(by.xpath(".//ion-button[contains(.,'Send') and @ng-reflect-disabled='false']"));
    this.cancelButton = element(by.xpath(".//ion-button[contains(.,'Cancel')]"));
    this.clearButton = element(by.className("clear-btn"));
    this.buttonPanel = element(by.className("cc-button-wrapper"));
  
    this.confirmationMessageProblem = element(by.xpath(".//*[contains(text(),'Thank you for reporting your feedback.')]"));
    this.confirmationMessageSuggestion = element(by.xpath(".//*[contains(text(),'Thank you for your suggestion.')]"));
    this.confirmationMessageOrderInquiry = element(by.xpath(".//*[contains(text(),'Your order inquiry has been submitted.')]"));
    this.doneButton = element(by.xpath(".//*[@class='md hydrated']//*[text()='Done']"));
    this.createAnotherButton = element(by.xpath(".//*[@class='md hydrated']//*[text()=' Create Another ']"));

};

module.exports = menuList