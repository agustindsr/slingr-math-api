import { Request, Response } from 'express';
import OperationService from '../services/operationsServices';


class OperationsController {

  getOperation(req: Request, res: Response) {
    try {
      const { expression, precision } = req.query as { expression: string, precision?: string };

      const result = OperationService.getOperationResult(expression, precision !== undefined ? parseInt(precision) : undefined);

      res.json(result);

    } catch (error) {
      res.status(422).json({ "error": "problem with get result" });
    }
  };

  postOperation(req: Request, res: Response) {
    try {
      const { expression, precision } = req.body as { expression: string, precision?: number };

      const result = OperationService.getOperationResult(expression, precision);

      res.json(result);
    }
    catch (error) {
      res.status(422).json({ "error": "problem with get result" });
    }
  };
}

export default new OperationsController()