"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mathjs_1 = require("mathjs");
class OperationService {
    getOperationResult(expression, precision) {
        console.log(`expresion: ${expression} precision: ${precision}`);
        let result = mathjs_1.evaluate(expression);
        if (precision !== undefined) {
            result = parseFloat(result.toFixed(precision));
        }
        return result;
    }
}
exports.default = new OperationService();
