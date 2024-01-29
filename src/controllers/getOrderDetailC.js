const { Order, Products } = require("../db");

const getOrderDetailC = async (orderId) => {
  try {
    const order = await Order.findByPk(orderId, {
      include: [Products],
    });
    console.log("Order:", order.toJSON());
    const OrderDetails = {
      orderId: order.id,
      estado: order.estado,
      productos: order.Products.map((product) => ({
        productId: product.id,
        title: product.title,
        manufacturer: product.manufacturer,
        stock: product.stock,
        price: product.price,
        available: product.available,
        description: product.description,
        category: product.category,
      })),
    };
    console.log("OrderDetails:", OrderDetails);
    return OrderDetails;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

module.exports = { getOrderDetailC };
