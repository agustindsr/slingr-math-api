import { evaluate } from 'mathjs'

class OperationService {
  getOperationResult(expression: string, precision?: number): number {
    console.log(`expresion: ${expression} precision: ${precision}`)

    let result = evaluate(expression);

    if (precision !== undefined) {
      result = parseFloat(result.toFixed(precision));
    }

    return result;
  }
}

export default new OperationService();