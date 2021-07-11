"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operationsServices_1 = __importDefault(require("../services/operationsServices"));
class OperationsController {
    solveOperation(req, res) {
        try {
            const expression = (req.query.expression ?? req.body.expression);
            const precision = (req.query.precision ?? req.body.precision);
            const result = operationsServices_1.default.solveOperation(expression, precision !== undefined ? parseInt(precision) : undefined);
            res.json(result);
        }
        catch (error) {
            res.status(422).json({ "error": "Wrong formula" });
        }
    }
    ;
}
exports.default = new OperationsController();
