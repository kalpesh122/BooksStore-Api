"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.createBook = void 0;
const joi_1 = __importDefault(require("joi"));
// Define Joi schema for book validation
const createBook = joi_1.default.object({
    name: joi_1.default.string().required(),
    isbn: joi_1.default.string().required(),
    category: joi_1.default.string().required(),
    author: joi_1.default.string().required(),
    publication: joi_1.default.string(),
    printing: joi_1.default.string().valid('ebook', 'hardcopy').required(),
    numberOfPages: joi_1.default.number().required(),
    editor: joi_1.default.string(),
    awards: joi_1.default.array().items(joi_1.default.string()),
    price: joi_1.default.number().required(),
    copiesSold: joi_1.default.number().required(),
    unitsInStock: joi_1.default.number().required(),
    rating: joi_1.default.number().min(0).max(5),
    reviews: joi_1.default.array().items(joi_1.default.object({
        userId: joi_1.default.string(),
        text: joi_1.default.string(),
        rating: joi_1.default.number().min(0).max(5),
    })),
    distributor: joi_1.default.string().required(),
    latestRevision: joi_1.default.number().required(),
    latestRevisionDate: joi_1.default.date(),
    bookReleaseDate: joi_1.default.date(),
    availabilityZones: joi_1.default.array().items(joi_1.default.string()),
    retailerIds: joi_1.default.array().items(joi_1.default.string()),
    retailerWholeSalerMapping: joi_1.default.array().items(joi_1.default.object({
        retailerId: joi_1.default.string(),
        wholesalerId: joi_1.default.string(),
    })),
    wholesalerDistributorMapping: joi_1.default.array().items(joi_1.default.object({
        wholesalerId: joi_1.default.string(),
        distributorId: joi_1.default.string(),
    })),
    distributorWareHouseMapping: joi_1.default.array().items(joi_1.default.object({
        distributorId: joi_1.default.string(),
        wareHouseId: joi_1.default.string(),
    })),
    createdAt: joi_1.default.date().allow(null),
    updatedAt: joi_1.default.date().allow(null),
    deletedAt: joi_1.default.date().allow(null),
});
exports.createBook = createBook;
const updateBook = joi_1.default.object({
    name: joi_1.default.string().required(),
    isbn: joi_1.default.string().required(),
    category: joi_1.default.string().required(),
    author: joi_1.default.string().required(),
    publication: joi_1.default.string(),
    printing: joi_1.default.string().valid('ebook', 'hardcopy').required(),
    numberOfPages: joi_1.default.number().required(),
    editor: joi_1.default.string(),
    awards: joi_1.default.array().items(joi_1.default.string()),
    price: joi_1.default.number().required(),
    copiesSold: joi_1.default.number().required(),
    unitsInStock: joi_1.default.number().required(),
    rating: joi_1.default.number().min(0).max(5),
    reviews: joi_1.default.array().items(joi_1.default.object({
        userId: joi_1.default.string(),
        text: joi_1.default.string(),
        rating: joi_1.default.number().min(0).max(5),
    })),
    distributor: joi_1.default.string().required(),
    latestRevision: joi_1.default.number().required(),
    latestRevisionDate: joi_1.default.date(),
    bookReleaseDate: joi_1.default.date(),
    availabilityZones: joi_1.default.array().items(joi_1.default.string()),
    retailerIds: joi_1.default.array().items(joi_1.default.string()),
    retailerWholeSalerMapping: joi_1.default.array().items(joi_1.default.object({
        retailerId: joi_1.default.string(),
        wholesalerId: joi_1.default.string(),
    })),
    wholesalerDistributorMapping: joi_1.default.array().items(joi_1.default.object({
        wholesalerId: joi_1.default.string(),
        distributorId: joi_1.default.string(),
    })),
    distributorWareHouseMapping: joi_1.default.array().items(joi_1.default.object({
        distributorId: joi_1.default.string(),
        wareHouseId: joi_1.default.string(),
    })),
    createdAt: joi_1.default.date().allow(null),
    updatedAt: joi_1.default.date().allow(null),
    deletedAt: joi_1.default.date().allow(null),
});
exports.updateBook = updateBook;
