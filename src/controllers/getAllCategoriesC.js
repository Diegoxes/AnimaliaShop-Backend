const { Categories } = require("../db");

const getAllCategoriesC = async () => {
  try {
    const allCategories = await Categories.findAll({
      attributes: ["category"],
    });

    return allCategories;
  } catch (error) {
    return { error: "Error interno del servidor " };
  }
};

module.exports = { getAllCategoriesC };
