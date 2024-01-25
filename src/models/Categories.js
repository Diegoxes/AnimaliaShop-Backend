const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define("Categories", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    nameCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
