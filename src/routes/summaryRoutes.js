const express = require('express')
const router = express.Router()
const { createSummary, updateSummary, getSummary, getAllBooks, deleteSummary } = require('../controllers/summaryController.js')

router.post("/create", createSummary);
router.get("/", getAllBooks);
router.put("/update/:id", updateSummary);
router.get("/:id", getSummary);
router.delete("/:id", deleteSummary);

module.exports = router