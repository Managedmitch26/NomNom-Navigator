import controller from '../controller/users.js'
import express from 'express'
import { authenticateToken } from '../controller/auth.js';

const userRouter = express.Router();

userRouter.get('/', controller.users.getAllUsers);
userRouter.get('/:id', authenticateToken, controller.users.getOneUser);
userRouter.post('/', controller.users.addUsers, controller.users.loginUser);
userRouter.put('/:id', authenticateToken, controller.users.updateUsers);
userRouter.delete('/:id', authenticateToken, controller.users.deleteUsers);
userRouter.post('/login', controller.users.loginUser);

export default userRouter;
