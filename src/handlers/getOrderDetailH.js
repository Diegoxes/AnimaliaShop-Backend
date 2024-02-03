const { getOrderDetailC } = require("../controllers/getOrderDetailC");

const getOrderDetailH = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await getOrderDetailC(orderId);

    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getOrderDetailH };
