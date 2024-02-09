const db = require("../db");
const { Products } = require("../db");

const { Sequelize } = require("sequelize");

const getProductByTitleC = async (title) => {
  console.log("Searching for products with title:", title);
  try {
    const dbProducts = await Products.findAll({
      where: {
        title: {
          [Sequelize.Op.iLike]: `%${title}%`,
        },
      },
    });
    console.log("After fetching from database");
    return dbProducts;
  } catch (error) {
    console.error("Error in getProductByTitleC:", error);
    throw error;
  }
};

module.exports = { getProductByTitleC };
