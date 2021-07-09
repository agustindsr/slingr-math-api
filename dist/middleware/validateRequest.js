"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryParams = exports.validateBody = void 0;
const api_error_1 = __importDefault(require("../errors/api-error"));
function validateBody(schema) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const validatedBody = yield schema.validate(req.body);
            req.body = validatedBody;
            next();
        }
        catch (err) {
            next(api_error_1.default.badRequest(err));
        }
    });
}
exports.validateBody = validateBody;
function validateQueryParams(schema) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const validatedQueryParams = yield schema.validate(req.query);
            req.query = validatedQueryParams;
            next();
        }
        catch (err) {
            next(api_error_1.default.badRequest(err));
        }
    });
}
exports.validateQueryParams = validateQueryParams;
;
