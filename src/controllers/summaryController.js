const Summary = require("../models/summary.model");


const createSummary = async (req, res) => {
    try {
        const { bookId, summaryText } = req.body;
        if (!bookId || !summaryText) {
            return res.status(400).json({ message: "Book ID and summary text are required" });
        }
        const summary = await Summary.create({ bookId, summaryText });
        res.status(201).json({ message: "Summary created successfully", summary })

    } catch (error) {
        console.error("Error creating summary:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}
const updateSummary = async (req, res) => {
    try {
        const { id } = req.params;
        const { summaryText } = req.body;
        if (!summaryText) {
            return res.status(400).json({ message: "Summary text is required for update" });
        }
        const summary = await Summary.findByPk(id);
        if (!summary) {
            return res.status(404).json({ message: "Summary not found" });
        }
        await summary.update({ summaryText });
        res.status(200).json({ message: "Summary updated successfully", summary })

    } catch (error) {
        console.error("Error updating summary:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}

const getSummary = async (req, res) => {
    try {
        const { id } = req.params;
        const summary = await Summary.findByPk(id);
        if (!summary) {
            return res.status(404).json({ message: "Summary not found" });
        }
        res.status(200).json({ message: "Summary fetched successfully", summary })

    } catch (error) {
        console.error("Error fetching summary:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}


const getAllBooks = async (req, res) => {
    try {
        const summaries = await Summary.findAll();
        console.log(/summaries/, summaries);

        if (!summaries) {
            return res.status(404).json({ message: "No summaries found" });
        }
        res.status(200).json({ message: "Summaries fetched successfully", summaries })

    } catch (error) {
        console.error("Error fetching summaries:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


const deleteSummary = async (req, res) => {
    try {
        const { id } = req.params;
        const summary = await Summary.findByPk(id);
        if (!summary) {
            return res.status(404).json({ message: "Summary not found" });
        }
        await summary.destroy();
        res.status(200).json({ message: "Summary deleted successfully" });

    } catch (error) {
        console.error("Error deleting summary:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { createSummary, updateSummary, getSummary, getAllBooks, deleteSummary }