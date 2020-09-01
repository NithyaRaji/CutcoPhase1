var pageConstants = require('../com.sirius.library/pageConstants.js');

let login = function () {

    //Page Object Lists
    this.usernameText = element(by.css('#username_input>input'));
    this.passwordText = element(by.css('#password_input>input'));
    this.loginButton = element(by.id("login_btn"));
    this.alertNoButton = element(by.xpath(".//span[.='No']"));

    this.loginErrorMsg = element(by.css(".login-error"));
    this.forgotPasswordLink = element(by.xpath(".//div[@class='login-help-links']//*[contains(.,'Forgot')]"));
    this.needHelpLink = element(by.xpath(".//div[@class='login-help-links']//*[contains(.,'Help')]"));
    this.forgotPage = element(by.css(".forgot-password-form"));
 
};
module.exports =  login;