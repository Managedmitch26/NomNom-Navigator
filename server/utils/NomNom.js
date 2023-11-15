import pkg from 'pg';
import user from '../../config2';
const { Pool } = pkg;

const pool = new Pool({
    host: "localhost",
    user: user,
    password: "password",
    database: "nomnom",
    port: 5432,
});

export default pool;
