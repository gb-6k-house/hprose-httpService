/**
 * Created by niupark on 16/1/8.
 */
//require('util').inherits(home,require('./baseTest').base);
    require('should');
var test = require('./baseTest');
function home(){
}
home.prototype = new test(); //建立原型链

var homeTest = new home();


//homeTest.joinUs();
//homeTest.sendNewMsg();
//homeTest.POST('/user/getAllUser', {IMEI:'865790025955667'});

homeTest.POST('/api-user/signUp', {account:'liukai', password:"123456"});


var moment = require('moment');

var data = moment('2016-03-25 14:32:10', 'YYYY-MM-DD HH:mm:ss');

var duration = moment().diff(data);
console.log(duration);

describe("msg", function() {
    it("The name should be zhaojian", function() {
        homeTest.getNewMsg();
    });
});

