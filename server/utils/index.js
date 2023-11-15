import express from 'express';
import pool from './NomNom.js';
import favRouter from '../routes/favRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json())

app.use('/api/favorites', favRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
