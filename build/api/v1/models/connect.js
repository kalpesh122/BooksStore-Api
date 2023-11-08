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
const mongoose_1 = __importDefault(require("mongoose"));
// @MongoDb Connection file
class MongoDBConnection {
    constructor(mongo_user, mongo_password, mongo_path, options) {
        this.mongo_user = mongo_user;
        this.mongo_password = mongo_password;
        this.mongo_path = mongo_path;
        this.options = options;
        this.uri = `mongodb+srv://${this.mongo_user}:${this.mongo_password}${this.mongo_path}`;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connectMongod = (yield mongoose_1.default.connect(this.uri, this.options));
                const connection = mongoose_1.default.connection;
                console.log('###########');
                console.log('Connected to MongoDB...');
                console.log(`Host :- ${connection.host}`);
                console.log(`Port :- ${connection.port}`);
                console.log(`Database Name :- ${connection.name}`);
                console.log('###########');
            }
            catch (error) {
                console.error('Failed to connect to MongoDB:', error);
                throw error;
            }
        });
    }
    connectToSeed() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connectMongod = (yield mongoose_1.default.connect(this.uri, this.options));
                const connection = mongoose_1.default.connection;
            }
            catch (error) {
                console.error('Failed to connect to MongoDB:', error);
                throw error;
            }
        });
    }
    getConnection() {
        if (!this.connectMongod) {
            throw new Error('Not connected to MongoDB');
        }
        return this.connectMongod;
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connectMongod) {
                yield this.connectMongod.close();
                console.log('Disconnected from MongoDB');
            }
            this.connectMongod = undefined;
        });
    }
}
exports.default = MongoDBConnection;
