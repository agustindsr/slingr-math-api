import express from 'express';
import cors from 'cors'
import OperationsController from './controllers/operationsController';
import validateRequest from './middleware/validateRequest';
import apiErrorHandler from './errors/api-error-handler';
import operationDto from './dto/operationDto';
import logRequest from './middleware/logRequest';

class Router {
  constructor(server: any) {
    const router = express.Router();

    var corsOptions = {
      origin: '*',
    }

    server.use(cors(corsOptions));
    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());

    server.use(logRequest)

    router.get('/operations', validateRequest(operationDto, "QueryParams"), OperationsController.solveOperation)
    router.post('/operations', validateRequest(operationDto, "Body"), OperationsController.solveOperation)

    server.use('/api', router)

    server.use(apiErrorHandler)
  }
}

export default Router;


