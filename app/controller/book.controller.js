
const dealHelper = require("../helper/dealWithJson.helper")
//el controller w el helper mkan el logic bta3y 
class Book {


    /*start get add*/
    static addBooks = (req, res)=>{
        res.render("addBooks", {pageTitle: "add Book"})
    }
    static addBookGetLogic = (req,res)=>{
        const book = {id:Date.now(), ...req.query}
        const all = dealHelper.readFromJSON()
        all.push(book)
        dealHelper.writeToJSON(all)
        res.redirect("/")
    }
    /*end get add */

    /*start post add*/
     static addPostBooks = (req, res)=>{
        res.render("addBooksPost", {pageTitle: "add Book"})
    }
    static addBookPostLogic = (req,res)=>{
        const book = {id:Date.now(),...req.body}
        const all = dealHelper.readFromJSON()
        all.push(book)
        dealHelper.writeToJSON(all)
        res.redirect("/")
    }
    /*end post add */

    static allBooks = (req,res)=>{
        const books = dealHelper.readFromJSON()
        res.render("allBooks",{pageTitle:"All Books", books , hasBooks:books.length})
    }
    static editBooks =(req,res)=>{
             res.render("editBooks")  
    }

    static delBooks =(req,res)=>{
          const id = req.params.id
        const all = dealHelper.readFromJSON()
        const newData = all.filter((book)=> book.id != id)
        dealHelper.writeToJSON(newData)
        res.redirect("/")
    }

}

module.exports = Book