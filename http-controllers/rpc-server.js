/**
 * Created by niupark on 16/2/19.
 */
'use strict';

var hprose = require('hprose');
const confige = require('../configes/confige');
const logger = process.logger;
var userClient = hprose.Client.create(confige.rpcHost.userHost);

exports.userCall = function (f) {
    try {
        userClient.ready(function(proxy){
            f(proxy);
        });
    } catch (e) {
        logger.error(e);
    }

}
