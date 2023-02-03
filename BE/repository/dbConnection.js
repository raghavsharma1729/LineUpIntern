import pg from 'pg';

const { Pool } = pg;

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "mysecretpassword",
    port: 5432,
};

const pool = new Pool(credentials);

export default pool;