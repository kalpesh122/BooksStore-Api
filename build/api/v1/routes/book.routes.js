"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const trimRequestBody_middleware_1 = __importDefault(require("../middleware/trimRequestBody.middleware"));
const book_validation_1 = require("../validations/book.validation");
const validation_middleware_1 = __importDefault(require("../middleware/validation.middleware"));
class BookRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.bookController = new book_controller_1.default();
        this.initialiseRoutes();
    }
    initialiseRoutes() {
        this.router.get('/books', this.bookController.getAllBooks);
        this.router.get('/books/:bookId', this.bookController.getBookById);
        this.router.post('/books', trimRequestBody_middleware_1.default, (0, validation_middleware_1.default)(book_validation_1.createBook), this.bookController.createBook);
        this.router.patch('/books/:bookId', trimRequestBody_middleware_1.default, (0, validation_middleware_1.default)(book_validation_1.updateBook), this.bookController.updateBook);
        this.router.delete('/books/:bookId', this.bookController.deleteBook);
    }
    getRouter() {
        return BookRoute;
    }
}
exports.default = BookRoute;
