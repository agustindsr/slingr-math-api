import { evaluate } from 'mathjs'

class OperationService {
  solveOperation(expression: string, precision?: number): number {

    let result = evaluate(expression) as number;

    result = precision !== undefined ? parseFloat(result.toFixed(precision)) : result;

    return result;
  }
}

export default new OperationService();