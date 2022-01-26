"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
const Constants_1 = require("../config/Constants");
class MongoConnection {
    connect() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(Constants_1.config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
                console.log('Database connected');
            }
            catch (err) {
                console.error(err.message);
                process.exit(1);
            }
        });
    }
}
exports.MongoConnection = MongoConnection;
//# sourceMappingURL=MongoConnection.js.map