const { Pool } = require('pg');



const pool = new Pool({
    host: "localhost",
    user: "mitchellwong",
    password: "password",
    database: "NomNom",
    port: 5432,
});

module.exports = pool;
