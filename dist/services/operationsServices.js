"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mathjs_1 = require("mathjs");
class OperationService {
    solveOperation(expression, precision) {
        let result = mathjs_1.evaluate(expression);
        result = precision !== undefined ? parseFloat(result.toFixed(precision)) : result;
        return result;
    }
}
exports.default = new OperationService();
