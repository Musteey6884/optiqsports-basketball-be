import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
});

pool.connect()
  .then(() => console.log(" Connected to PostgreSQL Database"))
  .catch(err => console.error(" Database connection failed:", err.message));

export default pool;
