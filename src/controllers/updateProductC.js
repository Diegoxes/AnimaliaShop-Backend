const { Products } = require("../db");

const updateProductC = async (productId, updateData) => {
  try {
    const product = await Products.findByPk(productId);
    if (!product) {
      return { error: `Producto con ID ${productId} no encntrado` };
    }

    await Products.update(updateData, { where: { id: productId } });

    return { message: "Producto actualizado exitosamente" };
  } catch (error) {
    console.error("Error en updateProductC:", error);
    throw error;
  }
};

module.exports = { updateProductC };
