const rout = require("express").Router()
const bookControl = require("../controller/book.controller")


rout.get("/",bookControl.allBooks) //home

rout.get("/add", bookControl.addBooks) //add 
rout.get("/addLogic", bookControl.addBookGetLogic) //get

rout.get('/addPost',bookControl.addPostBooks) //addPost
rout.post('/addPost',bookControl.addBookPostLogic) //add post

rout.get("/edit/:id", bookControl.editBooks) //edit 3la kol id

rout.get("/del/:id", bookControl.delBooks) //edit 3la kol id


module.exports = rout
