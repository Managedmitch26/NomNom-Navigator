import controller from '../controller/users.js'
import express from 'express'
import authenticateUser from '../controller/auth.js';

const userRouter = express.Router();

userRouter.get('/', controller.users.getAllUsers);
userRouter.get('/:id', authenticateUser, controller.users.getOneUser);
userRouter.post('/', controller.users.addUsers);
userRouter.put('/:id', authenticateUser,controller.users.updateUsers);
userRouter.delete('/:id', authenticateUser,controller.users.deleteUsers);
userRouter.post('/login', controller.users.loginUser);

export default userRouter;
