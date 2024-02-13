const { Order } = require("../db.js");

const createOrderC = async (email, carrito) => {
  try {
    if (!email || !carrito) throw new Error("Incomplete data");

    const items = carrito.map((data) => {
      const { title, price, stock, id } = data;

      return {
        producto_id: id,
        producto_nombre: title,
        price,
        stock,
        email,
      };
    });

    const order = await Order.bulkCreate(items);

    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createOrderC,
};
