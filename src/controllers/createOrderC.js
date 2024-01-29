const { Order, Products } = require("../db");

const createOrderC = async (productsSelected) => {
  try {
    const order = await Order.create({ estado: "pendiente" });

    for (const producto of productsSelected) {
      const { productId, cantidad } = producto;

      //Buscar el producto por ID en la base de datos
      const product = await Products.findByPk(productId);

      //Verificar si el producto existe
      if (product) {
        // Agregar el producto al pedido con la cantidad especificada
        await order.addProducts(product, { through: { cantidad } });
      } else {
        // Manejar el caso donde el producto no existe
        return res
          .status(404)
          .json({ error: ` Producto con ID ${productId} no encontrado ` });
      }
    }

    return { message: "Pedido creado exitosamente" };
  } catch (error) {
    throw error;
  }
};

module.exports = { createOrderC };
