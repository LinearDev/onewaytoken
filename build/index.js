"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = require("./generate");
const tokenStore_1 = require("./tokenStore");
exports.default = {
    use: tokenStore_1.use,
    check: tokenStore_1.checkKey,
    create: generate_1.create
};
