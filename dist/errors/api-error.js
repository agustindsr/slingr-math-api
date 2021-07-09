"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError {
    constructor(code, message) {
        this.message = message;
        this.code = code;
    }
    static badRequest(msg) {
        return new ApiError(400, msg);
    }
}
exports.default = ApiError;
