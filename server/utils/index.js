import express from 'express';
import userRouter from '../routes/userRoutes.js';
import cors from 'cors';
import favRouter from '../routes/favRoutes.js';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);

app.use('/api/favorites', favRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
