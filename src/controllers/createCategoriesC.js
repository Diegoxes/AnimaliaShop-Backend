const { Categories } = require("../db");

const createCategoriesC = async (category) => {
  if (category) {
    try {
      const existingCategory = await Categories.findOne({
        where: { category: category },
      });

      if (existingCategory) {
        return { data: existingCategory };
      }

      const newCategory = await Categories.create({
        category: category,
      });

      return { data: newCategory };
    } catch (error) {
      return { error: "Error interno del servidor", details: error };
    }
  }
};

module.exports = {
  createCategoriesC,
};
