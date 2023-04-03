"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersController_1 = require("../controllers/usersController");
const usersRouter = express_1.default.Router();
usersRouter.use(express_1.default.json());
usersRouter.get('/', usersController_1.findAllUsers);
usersRouter.get('/:_id', usersController_1.findUserById);
usersRouter.post('/', usersController_1.createUser);
usersRouter.put('/:_id', usersController_1.updateUser);
usersRouter.delete('/:_id', usersController_1.deleteUser);
exports.default = usersRouter;
