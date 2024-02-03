const { Products, Categories } = require("../db");

const createProductC = async (data) => {
  try {
    const { title, description, price, category, stock } = data;
    const imageUrl = data.imageUrl;

    if (!category) {
      return { error: "La categoría no está especificada" };
    }

    if (!imageUrl) {
      return { error: "La URL de la imagen no está especificada" };
    }

    const existingCategory = await Categories.findOne({
      where: { category },
    });

    if (!existingCategory) {
      return { error: "La categoría especificada no existe" };
    }

    const newProduct = await Products.create({
      title,
      description,
      price,
      category,
      image: imageUrl,
      stock,
    });

    return newProduct;
  } catch (error) {
    return { error: "Error interno del servidor" };
  }
};

module.exports = { createProductC };
