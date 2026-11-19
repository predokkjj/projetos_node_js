const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "5587",
  database: "projeto_node_ds",
  port: 3306
});

module.exports = db;