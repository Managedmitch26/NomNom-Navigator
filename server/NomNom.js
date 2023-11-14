import pkg from 'pg';
const { Pool } = pkg;



const pool = new Pool({
    host: "localhost",
    user: "mitchellwong",
    password: "password",
    database: "nomnom",
    port: 5432,
});

export default pool;
