"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const operationsController_1 = __importDefault(require("./controllers/operationsController"));
const validateRequest_1 = __importDefault(require("./middleware/validateRequest"));
const api_error_handler_1 = __importDefault(require("./errors/api-error-handler"));
const operationDto_1 = __importDefault(require("./dto/operationDto"));
const logRequest_1 = __importDefault(require("./middleware/logRequest"));
class Router {
    constructor(server) {
        const router = express_1.default.Router();
        var corsOptions = {
            origin: '*',
        };
        server.use(cors_1.default(corsOptions));
        server.use(express_1.default.urlencoded({ extended: false }));
        server.use(express_1.default.json());
        server.use(logRequest_1.default);
        router.get('/operations', validateRequest_1.default(operationDto_1.default, "QueryParams"), operationsController_1.default.solveOperation);
        router.post('/operations', validateRequest_1.default(operationDto_1.default, "Body"), operationsController_1.default.solveOperation);
        server.use('/api', router);
        server.use(api_error_handler_1.default);
    }
}
exports.default = Router;
