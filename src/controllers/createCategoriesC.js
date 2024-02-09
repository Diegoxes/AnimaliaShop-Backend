const { Categories } = require("../db");

const createCategoriesC = async (category, image) => {
  try {
    const existingCategory = await Categories.findOne({
      where: { category: category },
    });

    if (existingCategory) {
      console.log(`La categoría '${category}' ya existe en la base de datos.`);
      return { data: existingCategory };
    }

    const newCategory = await Categories.create({
      category: category,
      image: image,
    });

    console.log(`Nueva categoría '${category}' creada con éxito.`);

    return { data: newCategory };
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    return { error: "Error interno del servidor", details: error };
  }
};

module.exports = {
  createCategoriesC,
};
