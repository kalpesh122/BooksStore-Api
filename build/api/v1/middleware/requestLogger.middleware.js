"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logging/logger");
const requestLogger = (req, res, next) => {
    logger_1.logger.info(`${req.method} ${req.originalUrl}`);
    next();
};
exports.default = requestLogger;
