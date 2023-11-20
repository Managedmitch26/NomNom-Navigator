import pkg from 'pg';
const { Pool } = pkg;
import user from '../../config2.js';

const pool = new Pool({
    host: "localhost",
    user: user,
    password: "password",
    database: "nomnom",
    port: 5432,
});

export default pool;
