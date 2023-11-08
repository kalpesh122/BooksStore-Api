"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logging/logger");
const errorLogger = (err, req, res, next) => {
    logger_1.logger.error(err.message);
    next(err);
};
exports.default = errorLogger;
