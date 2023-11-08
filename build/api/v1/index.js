"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const app_1 = __importDefault(require("./app"));
const book_routes_1 = __importDefault(require("../v1/routes/book.routes"));
(0, validateEnv_1.default)();
const app = new app_1.default([new book_routes_1.default()], Number(process.env.PORT));
app.listen();
