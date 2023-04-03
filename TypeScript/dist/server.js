"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const MONGODB_URL = process.env.MONGODB_URL || '';
mongoose_1.default.connect(MONGODB_URL);
mongoose_1.default.connection.once('open', () => {
    console.log('Mongoose connection is established');
});
const PORT = process.env.PORT || 7000;
app_1.default.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});
