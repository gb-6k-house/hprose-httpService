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
        http.sendData(res, eCode.ParamerError, '参数错误', null)
        logger.info("请求参数错误")
        return
    }
    rpc.userCall(function(remote){
        remote.signUp(req.body.account, req.body.password).then(function (token){
            http.sendData(res, eCode.Success, '操作成功', token)
        }).catch(function () {
            http.sendData(res, eCode.UnkownError, '操作失败', null)
        })
    });
}

/*
 *接口名 signIn
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

exports.signIn = function(req, res, next) {
    if (!req.body.account || !req.body.password){
        http.sendData(res, eCode.ParamerError, '参数错误', null)
        logger.info("请求参数错误")
        return
    }
    rpc.userCall(function(remote){
        remote.signIn(req.body.account, req.body.password).then(function (token){
            http.sendData(res, eCode.Success, '操作成功', token)
        }).catch(function () {
            http.sendData(res, eCode.UnkownError, '操作失败', null)
        })
    });
}