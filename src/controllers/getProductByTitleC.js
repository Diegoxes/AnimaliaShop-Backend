const fs = require("fs");
const path = require("path");
const { Products } = require("../db");

const JSONFilePath = path.join(__dirname, "../../api/db.json");
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
    const jsonData = fs.readFileSync(JSONFilePath, "utf8");
    const data = JSON.parse(jsonData);

    if (!data || data.length === 0)
      throw new Error("No products were found in the JSON file");

    const apiProducts = data.filter((product) =>
      product.title.toLowerCase().includes(title.toLowerCase())
    );

    const combinedProducts = [...dbProducts, ...apiProducts.filter(apiProduct => !dbProducts.some(dbProduct => dbProduct.id === apiProduct.id))];


    if (combinedProducts.length === 0) {
      throw new Error("No se encontraron razas de perros con ese nombre.");
    }
    return combinedProducts;
  } catch (error) {
    console.error("Error in getProductByTitleC:", error);
    throw error;
  }
};

module.exports = { getProductByTitleC };
