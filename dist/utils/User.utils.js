"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUtils = void 0;
class UserUtils {
    static getCurrentAccount(req) {
        if (req?.headers['x-iisnode-auth_user']) {
            return req.headers['x-iisnode-auth_user'].toString().split("\\")[1].toUpperCase();
        }
        else {
            return require("os").userInfo().username.toUpperCase();
        }
    }
    static getCurrentAccountId(req) {
        return UserUtils.accountStringToInt(UserUtils.getCurrentAccount(req));
    }
    static accountIntToString(account) {
        return String.fromCharCode(parseInt(account.toString().substr(1, 2))) + account.toString().substr(3);
    }
    static accountStringToInt(account) {
        return Number(`1${account.toUpperCase().charCodeAt(0)}${account.substr(1, 6)}`);
    }
}
exports.UserUtils = UserUtils;
