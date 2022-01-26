"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const URLController_1 = require("./controller/URLController");
const MongoConnection_1 = require("./database/MongoConnection");
const api = (0, express_1.default)();
api.use(express_1.default.json());
const database = new MongoConnection_1.MongoConnection();
database.connect();
const urlController = new URLController_1.URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
api.listen(5000, () => console.log('servidor correndo na porta 5000'));
//# sourceMappingURL=index.js.map