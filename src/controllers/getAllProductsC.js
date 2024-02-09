const fs = require("fs");
const path = require("path");
const { Products, Categories } = require("../db");

const JSONFilePath = path.join(__dirname, "../../api/db.json");

const getAllProductsC = async (page = 1) => {
  try {
    if (page === "all") {
      const allProducts = await Products.findAll({
        attributes: { exclude: ["available"] },
        where: { available: false },
      });
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

      console.log("Productos obtenidos del archivo JSON:");

      const insertedProducts = [];
      const insertedCategories = [];

      for (const categoryData of data) {
        const { category, products, image } = categoryData;

        insertedCategories.push({ category, image }); // Agrega la categoría junto con su imagen a la lista de categorías insertadas
        const apiProducts = products.map(
          ({ title, manufacturer, stock, price, image, description }) => ({
            title,
            manufacturer,
            stock,
            price,
            image,
            description,
            category,
          })
        );
        insertedProducts.push(...apiProducts);
      }

      await Categories.bulkCreate(insertedCategories); // Inserta las categorías en la base de datos
      const insertedProductsDB = await Products.bulkCreate(insertedProducts); // Inserta los productos en la base de datos

      return insertedProductsDB;
    }

    const productsDB = await Products.findAll({
      where: { available: false },
    });

    return productsDB;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllProductsC,
};
