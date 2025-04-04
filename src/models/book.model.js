
const DataTypes = require("sequelize");
const sequelize = require("../config/database")

const Book = sequelize.define("Book", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Book;