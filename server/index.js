import express from 'express';
const app = express();
const pool = require('./NomNom');
const PORT = 3000;

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is lisgening on PORT: ${PORT}`)
})
