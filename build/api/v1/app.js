"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
const helmet_1 = __importDefault(require("helmet"));
const connect_1 = __importDefault(require("./models/connect"));
const requestLogger_middleware_1 = __importDefault(require("./middleware/requestLogger.middleware"));
const errorLogger_middleware_1 = __importDefault(require("./middleware/errorLogger.middleware"));
class App {
    constructor(routes, port) {
        this.mongoDB = new connect_1.default(process.env.MONGO_USER, process.env.MONGO_PASSWORD, process.env.MONGO_PATH, {});
        this.express = (0, express_1.default)();
        this.port = port;
        this.mongoDB.connect();
        this.initialiseMiddleware();
        this.initialiseRoutes(routes);
        this.initialiseErrorHandling();
    }
    initialiseMiddleware() {
        this.express.use((0, helmet_1.default)());
        this.express.use((0, cors_1.default)());
        this.express.use((0, morgan_1.default)('development'));
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
        this.express.use((0, compression_1.default)());
        this.express.use(requestLogger_middleware_1.default);
        this.express.use(errorLogger_middleware_1.default);
    }
    initialiseRoutes(routes) {
        routes.forEach((route) => {
            this.express.use('/api/v1', route.router);
        });
    }
    initialiseErrorHandling() {
        this.express.use(error_middleware_1.default);
    }
    listen() {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
