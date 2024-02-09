const { Products } = require("../db");

const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const productToDelete = await Products.findByPk(productId);

    if (!productToDelete) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Realizar el borrado lógico (actualizar el estado)
    productToDelete.available = true;
    await productToDelete.save();

    res.status(200).json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { deleteProduct };
