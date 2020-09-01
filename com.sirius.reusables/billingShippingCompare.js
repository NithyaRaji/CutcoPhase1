var utilities = require('./utilities.js');
var browserDetails = require('./browserDetails.js');
var addressPageObj = require('../com.sirius.pageObjects/addressesPage_po.js');

let billingShippingCompare = function () {

    this.checkshipping = function () {
        var addressPagePO = new addressPageObj();
        utilities.pageWaitSec(5);
        expect(addressPagePO.shipFirstName);

    }

}
module.exports = new billingShippingCompare();