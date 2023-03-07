import { createPool } from "mysql2";

const pool = createPool({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "Green",
}).promise();

export default pool;
