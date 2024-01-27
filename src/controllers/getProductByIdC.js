const fs = require("fs");
const path = require("path");
const { Products, Categories } = require("../db");

const JSONFilePath = path.join(__dirname, "../../api/db.json");

const getProductByIdC = async (productId) => {
  try {
    const product = await Products.findByPk(productId, {
      include: Categories,
    });

    if (product) {
      return product;
    }
    // Si no se encuentra en la base de datos, intenta buscar en el archivo JSON
    const jsonData = fs.readFileSync(JSONFilePath, "utf8");
    const data = JSON.parse(jsonData);

    if (!data || data.length === 0)
      throw new Error("No products were found in the JSON file");

    const productFromJSON = data.find(
      (product) => product.id === parseInt(productId)
    );

    if (productFromJSON) {
      return productFromJSON;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

module.exports = { getProductByIdC };
