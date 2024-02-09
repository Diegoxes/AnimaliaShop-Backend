const { Products } = require("../db");

const deleteProductStockC = async (productId, quantityToDelete) => {
  try {
    if (quantityToDelete <= 0) {
      return { error: "La cantidad a eliminar debe ser mayor que cero" };
    }
    const product = await Products.findByPk(productId);

    if (!product) {
      return { error: `Producto con ID ${productId} no encontrado` };
    }

    if (quantityToDelete > product.stock) {
      return {
        error: "La cantidad a eliminar es mayor que la cantidad disponible",
      };
    }

    await product.update({ stock: product.stock - quantityToDelete });
    if (product.stock === 0) {
      return {
        message:
          "Unidades eliminadas exitosamente y producto marcado como eliminado (sin stock)",
      };
    }
    return { message: "Unidades eliminadas exitosamente" };
  } catch (error) {
    throw error;
  }
};

module.exports = { deleteProductStockC };
