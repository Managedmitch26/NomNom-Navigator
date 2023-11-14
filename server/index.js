const express = require('express');
const pool = require('./NomNom.js');
const app = express();
const PORT = 3000;
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

app.get('/users', async (req, response) => {
    try {
      pool.query(`Select * from users`, (err, res) => {
        if (!err) {
            response.send(res.rows);
        }
      })
    } catch (err) {
      console.error(err);
      response.status(500).send('Internal Server Error');
    }
  });
