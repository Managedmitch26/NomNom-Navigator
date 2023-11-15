import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: "erik",
    password: "password",
    database: "nomnom",
    port: 5432,
});

export default pool;
