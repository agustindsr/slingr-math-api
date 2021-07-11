"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_error_1 = __importDefault(require("../errors/api-error"));
function validateRequest(schema, target) {
    return async (req, res, next) => {
        let targetToValidate = target === "Body" ? req.body : req.query;
        try {
            const validatedBody = await schema.validate(targetToValidate);
            targetToValidate = validatedBody;
            next();
        }
        catch (err) {
            next(api_error_1.default.badRequest(err));
        }
    };
}
exports.default = validateRequest;
;
