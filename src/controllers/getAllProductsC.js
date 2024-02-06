const fs = require("fs");
const path = require("path");
const { Products, Categories } = require("../db");

const JSONFilePath = path.join(__dirname, "../../api/db.json");
//const getAllProductsC = async (page = 1, perPage = 10)
const getAllProductsC = async (page = 1) => {
  try {
    if (page === "all") {
      // Si se proporciona 'all', obtener todos los productos
      const allProducts = await Products.findAll();
      console.log(
        "Productos obtenidos de la base de datos:",
        allProducts.length
      );
      return allProducts;
    }
    const totalProductsCount = await Products.count();

    if (totalProductsCount === 0) {
      const jsonData = fs.readFileSync(JSONFilePath, "utf8");
      const data = JSON.parse(jsonData);

      if (!data || data.length === 0)
        throw new Error("No products were found in the JSON file");
      console.log("Productos obtenidos del archivo JSON:", data.length);
      const apiProducts = data.map(
        ({
          title,
          manufacturer,
          stock,
          price,
          image,

          description,
          category,
        }) => ({
          title,
          manufacturer,
          stock,
          price,
          image,

          description,
          category,
        })
      );
      const uniqueCategories = [...new Set(data.map((item) => item.category))];
      const apiCategories = uniqueCategories.map((category) => ({ category }));
      const insertedCategories = await Categories.bulkCreate(apiCategories);
      const insertedProducts = await Products.bulkCreate(apiProducts);
      console.log(
        "Productos y Categorias insertados en la base de datos:",
        insertedProducts.length
      );
      return insertedProducts;
    }
    const productsDB = await Products.findAll();
    return productsDB;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllProductsC,
};
