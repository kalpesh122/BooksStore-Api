"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_middleware_1 = __importDefault(require("../middleware/async.middleware"));
const book_service_1 = __importDefault(require("../services/book.service"));
class BookController {
    constructor() {
        this.getAllBooks = (0, async_middleware_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const books = yield this.bookService.getBooks();
            return res.status(200).json({
                success: true,
                message: (books === null || books === void 0 ? void 0 : books.length)
                    ? 'All Books fetched  successfully'
                    : 'No books found',
                count: books === null || books === void 0 ? void 0 : books.length,
                books,
            });
        }));
        this.getBookById = (0, async_middleware_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookId = (req.params.bookId && req.params.bookId.toString()) || '';
            const book = yield this.bookService.getBookById(bookId);
            if (!book) {
                return res.status(200).json({
                    success: false,
                    message: `Book does not exists for bookId :- ${bookId}`
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Book fetched successfully',
                book,
            });
        }));
        this.createBook = (0, async_middleware_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookData = req.body;
            const book = yield this.bookService.createBook(bookData);
            return res.status(201).json({
                success: true,
                message: 'Book created successfully',
                book,
            });
        }));
        this.updateBook = (0, async_middleware_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookData = req.body;
            let bookId = (req.params.bookId && req.params.bookId.toString()) || '';
            const bookExists = yield this.bookService.getBookById(bookId);
            if (!bookExists) {
                return res.status(200).json({
                    success: false,
                    message: `Book does not exists for bookId :- ${bookId}`
                });
            }
            ;
            const book = yield this.bookService.updateBook(bookData, bookId);
            return res.status(200).json({
                success: true,
                message: 'Book updated successfully',
                book,
            });
        }));
        this.deleteBook = (0, async_middleware_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookId = (req.params.bookId && req.params.bookId.toString()) || '';
            const bookExists = yield this.bookService.getBookById(bookId);
            if (!bookExists) {
                return res.status(200).json({
                    success: false,
                    message: `Book does not exists for bookId :- ${bookId}`
                });
            }
            ;
            const book = yield this.bookService.deleteBook(bookId);
            return res.status(200).json({
                success: true,
                message: 'Book deleted successfully',
            });
        }));
        this.bookService = new book_service_1.default();
    }
}
exports.default = BookController;
