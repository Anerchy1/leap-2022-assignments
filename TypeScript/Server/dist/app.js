"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moviesRouter_1 = __importDefault(require("./routes/moviesRouter"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json('Hello class!');
});
app.use('/api/users', usersRoutes_1.default);
app.use('/api/movies', moviesRouter_1.default);
exports.default = app;
