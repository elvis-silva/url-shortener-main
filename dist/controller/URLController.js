"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
const tslib_1 = require("tslib");
const shortid_1 = (0, tslib_1.__importDefault)(require("shortid"));
const Constants_1 = require("../config/Constants");
const URL_1 = require("../database/model/URL");
class URLController {
    shorten(req, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { originURL } = req.body;
            const url = yield URL_1.URLModel.findOne({ originURL });
            if (url) {
                res.json(url);
                return;
            }
            const hash = shortid_1.default.generate();
            const shortURL = `${Constants_1.config.API_URL}/${hash}`;
            const newURL = yield URL_1.URLModel.create({ hash, shortURL, originURL });
            res.json(newURL);
        });
    }
    redirect(req, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { hash } = req.params;
            const url = yield URL_1.URLModel.findOne({ hash });
            if (url) {
                res.redirect(url.originURL);
                return;
            }
            res.status(400).json({ error: 'URL not found' });
        });
    }
}
exports.URLController = URLController;
//# sourceMappingURL=URLController.js.map