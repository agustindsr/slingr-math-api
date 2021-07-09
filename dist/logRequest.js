"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerRequest = (req, res, next) => {
    console.log(`${req.method} - ${req.path}`);
    next();
};
exports.default = loggerRequest;
