const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define("Categories", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    // nameCategory: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  });
};
