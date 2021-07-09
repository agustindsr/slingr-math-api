import express from 'express';
import cors from 'cors'
import loggerRequest from './logRequest';
import OperationsController from './controllers/operationsController';
import postOperationDto from './dto/postOperationDto';
import { validateBody, validateQueryParams } from './middleware/validateRequest';
import apiErrorHandler from './errors/api-error-handler';
import getOperationDto from './dto/getOperationDto';

class Router {
  constructor(server: any) {
    const router = express.Router()

    var corsOptions = {
      origin: '*',
    }

    server.use(cors(corsOptions));
    server.use(loggerRequest)
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());

    router.get('/operations', validateQueryParams(getOperationDto), OperationsController.getOperation)
    router.post('/operations', validateBody(postOperationDto), OperationsController.postOperation)

    server.use('/api', router)
    server.use(apiErrorHandler)
  }
}

export default Router;


