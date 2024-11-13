const express = require('express')
const router = express.Router();
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller')
const  Book = require('./book.model');
const verifyAdminToken = require('../middleware/verifyAdminToken');
//post a book
 
// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

router.post("/create-book", verifyAdminToken, postABook)



//get all books

router.get("/", getAllBooks)

router.get("/:id", getSingleBook)

router.put("/edit/:id",verifyAdminToken, UpdateBook);

router.delete("/:id", verifyAdminToken, deleteABook)



module.exports = router;