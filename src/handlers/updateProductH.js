const { updateProductC } = require("../controllers/updateProductC");

const updateProductH = async (req, res) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const result = await updateProductC(productId, updateData);

    if (result.message) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Produto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updateProductH };
