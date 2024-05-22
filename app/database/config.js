const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_securedwebshop",
  connectTimeout: 60000,
  port: 6033,
});

module.exports = pool;
