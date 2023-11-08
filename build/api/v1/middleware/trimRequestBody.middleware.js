"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function trimRequestBody(req, res, next) {
    const { method, body } = req;
    if (method === 'POST' || method === 'PATCH') {
        if (typeof body === 'object' && body !== null) {
            for (const key in body) {
                if (typeof body[key] === 'string') {
                    body[key] = body[key].trim();
                }
            }
        }
    }
    next();
}
exports.default = trimRequestBody;
