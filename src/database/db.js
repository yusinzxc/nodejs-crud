var mysql = require("mysql")
/*'Database */
const connection = mysql.createConnection({
  host    : "localhost",
  user    : "root",
  port    : 3306,
  password: "",
  database: "Recap1"
})

module.exports = connection

