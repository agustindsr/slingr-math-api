import { Request, Response, urlencoded } from 'express';
import OperationService from '../services/operationsServices';


class OperationsController {

  getOperation(req: Request, res: Response) {
    try {
      let { expression, precision } = req.query as { expression: string, precision?: string };
      console.log(`expression ${expression}`)
      console.log(`expression decode ${decodeURIComponent(expression)}`)
      console.log(`expression encode ${encodeURIComponent(expression)}`)

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