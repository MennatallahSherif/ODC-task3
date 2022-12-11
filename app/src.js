const express = require("express")
const { monitorEventLoopDelay } = require("perf_hooks")
const app = express()
const path = require("path")
const hbs = require("hbs")

app.use(express.static(path.join(__dirname,"../clientSide/public"))) //mkan el static files fly hya public css-html-pictures
app.set("view engine","hbs") //hbs
app.set("views",path.join(__dirname,"../clientSide/views")) //mkan el view index.hbs
hbs.registerPartials(path.join(__dirname,"../clientSide/layouts")) //layouts (share)

app.use(express.urlencoded({extended:true})) //byfhm el 7agat el post method (encoded) lazem ttktb hna

//bstd3y ely 3mlto fl routes
const bookRouts = require("./routes/book.routes")
app.use(bookRouts) // app.use("/task",bookRouts)



//all=>kol anwa3 el methods *=>ay route 8er el fo2 !!lazem ttktb b3d el routs kolha
app.all('*',(req,res)=> res.render('err404',{
    pageTitle:"page not found", //To set the page title for the index I'm doing this,Then when I return content (different angular route/page) I want to update this title
    err:"invaild url Please try again"}))


module.exports=app

