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
const book_model_1 = __importDefault(require("../models/schema/book.model"));
class UserService {
    constructor() {
        this.book = book_model_1.default;
    }
    /**
     * @Create a new Book
     */
    createBook(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield this.book.create(body);
                return book;
            }
            catch (error) {
                throw new Error('Something went wrong');
            }
        });
    }
    /**
     *
     * @Update a Book
     */
    updateBook(body, bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield this.book.updateOne({ bookId, deletedAt: null }, body);
                return body;
            }
            catch (error) {
                throw new Error('Something went wrong');
            }
        });
    }
    /**
     * @finding a single Book By Id
     */
    getBookById(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.book.findOne({ bookId, deletedAt: null });
                return user;
            }
            catch (error) {
                throw new Error('Something went wrong');
            }
        });
    }
    /**
     * @finding a AllBooks
     */
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.book.find({ deletedAt: null });
                return user;
            }
            catch (error) {
                throw new Error('Something went wrong');
            }
        });
    }
    /**
     *
     * @Delete a Book
     */
    deleteBook(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteBook = yield this.book.deleteOne({ bookId, deletedAt: null });
                return deleteBook;
            }
            catch (error) {
                throw new Error('Something went wrong');
            }
        });
    }
}
exports.default = UserService;
