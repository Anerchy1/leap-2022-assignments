import express from 'express';
import { createUser, deleteUser, findAllUsers, findUserById, updateUser } from '../controllers/usersController';

const usersRouter = express.Router();

usersRouter.use(express.json());

usersRouter.get('/', findAllUsers);
usersRouter.get('/:_id', findUserById);
usersRouter.post('/', createUser);
usersRouter.put('/:_id', updateUser);
usersRouter.delete('/:_id', deleteUser);
export default usersRouter;