"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const logRequest_1 = __importDefault(require("./logRequest"));
const operationsController_1 = __importDefault(require("./controllers/operationsController"));
const postOperationDto_1 = __importDefault(require("./dto/postOperationDto"));
const validateRequest_1 = require("./middleware/validateRequest");
const api_error_handler_1 = __importDefault(require("./errors/api-error-handler"));
const getOperationDto_1 = __importDefault(require("./dto/getOperationDto"));
class Router {
    constructor(server) {
        const router = express_1.default.Router();
        var corsOptions = {
            origin: '*',
        };
        server.use(cors_1.default(corsOptions));
        server.use(logRequest_1.default);
        server.use(express_1.default.urlencoded({ extended: true }));
        server.use(express_1.default.json());
        router.get('/operations', validateRequest_1.validateQueryParams(getOperationDto_1.default), operationsController_1.default.getOperation);
        router.post('/operations', validateRequest_1.validateBody(postOperationDto_1.default), operationsController_1.default.postOperation);
        server.use('/api', router);
        server.use(api_error_handler_1.default);
    }
}
exports.default = Router;
