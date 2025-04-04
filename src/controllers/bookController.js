const Book = require("../models/book.model")


const createBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        if (!title || !author) {
            return res.status(400).json({ message: "Title and author are required" });
        }
        const book = await Book.create({ title, author });
        res.status(201).json({ message: "Book created successfully", book })

    } catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}


const updateBook = async (req, res) => {
    try {

        const { id } = req.params;
        const { title, author } = req.body;
        if (!title && !author) {
            return res.status(400).json({ message: "Title and author are required for update" });
        }
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        await book.update({ title, author });
        res.status(200).json({ message: "Book updated successfully", book })

    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}

const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book fetched successfully", book })

    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        console.log(/books/, books);

        if (!books) {
            return res.status(404).json({ message: "No books found" });
        }
        res.status(200).json({ message: "Books fetched successfully", books })

    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal server error" });

    }

}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        await book.destroy();
        res.status(204).json({ message: "Book deleted successfully" });

    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}

module.exports = { createBook, updateBook, getBook, getAllBooks, deleteBook }