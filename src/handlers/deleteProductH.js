const { deleteProductC } = require("../controllers/deleteProductC");

const deleteProductH = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantityToDelete } = req.body;
    //{
    // "quantityToDelete": 40
    //}
    const result = await deleteProductC(productId, quantityToDelete);

    if (result.message) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ error: "Error en la solicitud" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Erro" });
  }
};

module.exports = { deleteProductH };
