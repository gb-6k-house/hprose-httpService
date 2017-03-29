/**
 * Created by niupark on 16/3/3.
 */
'use strict';

const eCode = require('../models/errorCode');
const http = require('./httpBase').http;
const rpc = require('./rpc-server');
const logger = process.logger;


/*
 *接口名 signUp
 *描述 注册
 * 入参数 {acccount:
 *        password:}
 * 出参数{
 * code:
 * msg:
 * data:{
 *      token:
 * }
 * */

exports.signUp = function(req, res, next) {
    if (!req.body.account || !req.body.password){
        http.sendData(res, eCode.ParamerError, '参数错误', null);
        return
    }
    rpc.userCall(function(remote){
        remote.signUpWithNameAndPwd(req.body.account, req.body.password, function(e, v){
            if (e){
                http.sendData(res, eCode.UnkownError, '操作失败', null);
            }else{
                http.sendData(res, eCode.Success, '操作成功', v);
            }
        });
    });
}