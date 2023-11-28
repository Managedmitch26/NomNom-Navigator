import controller from '../controller/users.js'
import express from 'express'

const userRouter = express.Router();

userRouter.get('/', controller.users.getAllUsers);
userRouter.get('/:id', controller.users.getOneUser);
userRouter.post('/', controller.users.addUsers);
userRouter.put('/:id', controller.users.updateUsers);
userRouter.delete('/:id', controller.users.deleteUsers);
userRouter.post('/login', controller.users.loginUser);

export default userRouter;
