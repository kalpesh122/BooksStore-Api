"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const winston_2 = require("winston");
const winston_elasticsearch_1 = require("winston-elasticsearch");
const logLevels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
};
const logger = winston_1.default.createLogger({
    levels: logLevels,
    format: winston_2.format.combine(winston_2.format.timestamp(), winston_2.format.errors({ stack: true }), winston_2.format.splat(), winston_2.format.json()),
    transports: [
        new winston_1.default.transports.Console({
            format: winston_2.format.combine(winston_2.format.colorize(), winston_2.format.simple()),
        }),
        new winston_elasticsearch_1.ElasticsearchTransport({
            level: 'info',
            indexPrefix: 'my-app-logs',
            clientOpts: { node: 'http://localhost:9200' },
        }),
    ],
});
exports.logger = logger;
