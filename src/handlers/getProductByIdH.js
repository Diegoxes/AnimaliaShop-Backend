const { getProductByIdC } = require("../controllers/getProductByIdC");

const getProductByIdH = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await getProductByIdC(productId);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getProductByIdH };
