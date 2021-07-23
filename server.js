var express = require("express")
var bodyParser = require("body-parser")
var mysql = require("mysql")
const app = express()

/* Middle Ware*/
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
  {extended: true}
))

/* Routes */
app.use("/", require("./src/routes/router"))

/* Server */
const PORT = 3200
app.listen(PORT, function(){
  console.log();
  console.log();
  console.log(`Server is running on: http://localhost:${PORT}`);
})
