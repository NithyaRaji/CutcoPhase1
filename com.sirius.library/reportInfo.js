let reportInfo = function () {

    this.log = function (info) {
        browser.controlFlow().execute(function(){
        allure.createStep(info, () => {})();
    });
    } 
};
module.exports = new reportInfo();
