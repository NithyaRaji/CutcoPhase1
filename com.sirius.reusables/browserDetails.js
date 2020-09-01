let browserDetails = function () {

    return new Promise(function (res, rej) {
        let capsPromise = browser.getCapabilities();
        capsPromise.then(function (caps) {
            module.exports.browserName = caps.get('browserName');
            module.exports.browserVersion = caps.get('version');
            module.exports.executionName = caps.get('name');
            module.exports.udidname = caps.get('udid');
            res(true);
        });
    });

};
module.exports = new browserDetails();