import express from 'express';
import userRouter from '../routes/userRoutes';
import cors from 'cors';
import favRouter from '../routes/favRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

app.use('/api/favorites', favRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
