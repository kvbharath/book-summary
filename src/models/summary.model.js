
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Book = require("./book.model");

const Summary = sequelize.define("Summary", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    bookId: { type: DataTypes.UUID, allowNull: false, references: { model: Book, key: "id" } },
    summaryText: { type: DataTypes.TEXT, allowNull: false }
});


Book.hasMany(Summary, { foreignKey: "bookId" });
Summary.belongsTo(Book, { foreignKey: "bookId" })

module.exports = Summary;