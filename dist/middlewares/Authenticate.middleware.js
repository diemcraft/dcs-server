"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateMiddleware = void 0;
const User_model_1 = require("../models/User.model");
const User_utils_1 = require("../utils/User.utils");
async function AuthenticateMiddleware(req, res, next) {
    if (!req.user) {
        req.user = new User_model_1.User(User_utils_1.UserUtils.getCurrentAccountId(req), User_utils_1.UserUtils.getCurrentAccount(req));
    }
    return next();
}
exports.AuthenticateMiddleware = AuthenticateMiddleware;
