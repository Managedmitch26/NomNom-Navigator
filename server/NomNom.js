import { Pool } from 'pg.js'
require('dotenv').config()


const pool = new Pool({
    host: "localhost",
    user: "user",
    password: "password",
    database: "NomNom",
    port: 5432,
})
