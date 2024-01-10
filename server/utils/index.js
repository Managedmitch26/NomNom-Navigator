import express from 'express';
import userRouter from '../routes/userRoutes.js';
import cors from 'cors';
import favRouter from '../routes/favRoutes.js';
import yelpRouter from '../routes/yelpRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 8000;

app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());



app.use('/api/users', userRouter);
app.use('/api/yelp', yelpRouter);
app.use('/api/favorites', favRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
