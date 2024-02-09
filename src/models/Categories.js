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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
