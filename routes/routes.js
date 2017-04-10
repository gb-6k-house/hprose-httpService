/**
 * Created by niupark on 16/1/6.
 */
var user = require('../http-controllers/userHttp');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/signUp',user.signUp);
router.post('/signIn',user.signIn);

//express().use('/home/getNewMsg',home.getNewMsg);
module.exports = router;
