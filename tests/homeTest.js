/**
 * Created by niupark on 16/1/8.
 */
require('should');
var test = require('./baseTest');
function home(){
}
home.prototype = new test(); //建立原型链

var homeTest = new home();


//homeTest.joinUs();
//homeTest.sendNewMsg();
//homeTest.POST('/user/getAllUser', {IMEI:'865790025955667'});

describe('user http', function () {
    describe('/api-user/signUp', function () {
        it('注册成功必须返回data字段', function (done) {
            homeTest.POST('/api-user/signUp', {account:'liukai', password:"123456"}, function (body) {
                body.should.have.property('data')
                done()
            });

        })
    })

})
