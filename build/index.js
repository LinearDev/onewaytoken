"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.use = exports.check = void 0;
const generate_1 = require("./generate");
const tokenStore_1 = require("./tokenStore");
const oneWayToken = {
    use: (key) => { return (0, tokenStore_1.use)(key); },
    check: tokenStore_1.checkKey,
    create: () => { return (0, generate_1.create)(); }
};
exports.default = oneWayToken;
exports.check = oneWayToken.check;
exports.use = oneWayToken.use;
exports.create = oneWayToken.create;
