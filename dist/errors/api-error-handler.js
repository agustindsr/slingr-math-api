"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_error_1 = __importDefault(require("./api-error"));
function apiErrorHandler(err, req, res, next) {
    if (err instanceof api_error_1.default) {
        return res.status(err.code).json(err.message);
    }
    return res.status(500).json('something went wrong');
}
exports.default = apiErrorHandler;
