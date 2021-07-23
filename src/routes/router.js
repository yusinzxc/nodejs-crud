var express = require("express")
var moment = require("moment")

const router = express.Router()
const connection = require("../database/db")
const crud = require("../services/crud")
const address = require("../ip/address")
connection.connect()
const { create, read, update, del } = crud;
const date = moment().format('MMMM Do YYYY'),time = moment().format('h:mm:ss a')
 
//CREATE
router.post("/create", function(req){
  const { usern, passw } = req.body
  const query = create(usern, passw, date, time, address)
  connection.query(query, function(err){
    if (err) throw err;
    console.log(req.body);
  })
})
//READ
router.get("/read/:id", function(req,res){
  const { id } = req.params
  const query = read(id)
  connection.query(query, function(err, result){
    if (err) throw err;
    console.log(result);
    res.send(result)
  })
})
//UPDATE
router.put("/update", function(req){
  const { passw, id } = req.body
  const query = update(passw, id)
  connection.query(query, function(err){
    if(err) throw err;
    console.log("Password has been changed!")
  })
})
//DELETE
router.delete("/delete", function(req){
  const { id } = req.body
  const query = del(id)
  connection.query(query, function(err){
    if (err) throw err;
  })
})

module.exports = router;
