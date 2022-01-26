"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLModel = exports.URL = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
class URL {
}
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], URL.prototype, "hash", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], URL.prototype, "originURL", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], URL.prototype, "shortURL", void 0);
exports.URL = URL;
exports.URLModel = (0, typegoose_1.getModelForClass)(URL);
//# sourceMappingURL=URL.js.map