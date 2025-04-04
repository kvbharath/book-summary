const express = require("express");
const { createBook, updateBook, getBook, getAllBooks, deleteBook } = require("../controllers/bookController")

const router = express.Router();

router.post("/", createBook);
router.get("/:id", getBook)
router.get("/", getAllBooks);
router.delete("/:id", deleteBook);
router.put("/update/:id", updateBook);


module.exports = router;