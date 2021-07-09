"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operationsServices_1 = __importDefault(require("../services/operationsServices"));
class OperationsController {
    getOperation(req, res) {
        try {
            const { expression, precision } = req.query;
            const result = operationsServices_1.default.getOperationResult(expression, precision !== undefined ? parseInt(precision) : undefined);
            res.json(result);
        }
        catch (error) {
            res.status(422).json({ "error": "problem with get result" });
        }
    }
    ;
    postOperation(req, res) {
        try {
            const { expression, precision } = req.body;
            const result = operationsServices_1.default.getOperationResult(expression, precision);
            res.json(result);
        }
        catch (error) {
            res.status(422).json({ "error": "problem with get result" });
        }
    }
    ;
}
exports.default = new OperationsController();
