const { Categories } = require("../db");

const getAllCategoriesC = async () => {
  try {
    const allCategories = await Categories.findAll({
      attributes: ["category", "image"],
      where: { deleted: false },
    });

    console.log("Categorías encontradas:", allCategories);

    return allCategories;
  } catch (error) {
    console.error("Error al buscar categorías:", error);
    return { error: "Error interno del servidor " };
  }
};

module.exports = { getAllCategoriesC };
