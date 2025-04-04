const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes.js');
const summaryRoutes = require('./routes/summaryRoutes.js');
const sequelize = require('./config/database.js');

dotenv.config();

const app = express();
app.use(express.json());

app.use("/books", bookRoutes);
app.use("/summaries", summaryRoutes);

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
    console.log(" Database connected!");
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
}).catch(err => console.error("Database connection error:", err));