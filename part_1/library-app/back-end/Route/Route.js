const express = require('express');
const mainRouter = express.Router();
const {newBook,getAllBook,getSpeceficBook,deletBookById}=require('../controllers/conrollers')
mainRouter.post("/books",newBook);
mainRouter.get("/books",getAllBook);
mainRouter.get("/books/:id",getSpeceficBook);
mainRouter.delete("/books/:id",deletBookById)
module.exports = mainRouter;/* books
book_id *//*  */