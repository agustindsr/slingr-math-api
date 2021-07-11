import { Request, Response } from 'express';
import OperationService from '../services/operationsServices';


class OperationsController {
  solveOperation(req: Request, res: Response) {
    try {
      const expression = (req.query.expression ?? req.body.expression) as string
      const precision = (req.query.precision ?? req.body.precision) as string

      const result = OperationService.solveOperation(expression, precision !== undefined ? parseInt(precision) : undefined);

      res.json(result);

    } catch (error) {
      res.status(422).json({ "error": "Wrong formula" });
    }
  };
}

export default new OperationsController()