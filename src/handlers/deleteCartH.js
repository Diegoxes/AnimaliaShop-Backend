const { deleteCartC } = require("../controllers/deleteCartC");

const deleteCartH = async (req, res) => {
  const { email, id, all } = req.body;
  try {
    const updateCart = await deleteCartC(email, id, all);
    res.status(200).json(updateCart);
  } catch (error) {
    res.status(400).json({
      error: "Error al buscar el producto del carrito: " + error.message,
    });
  }
};

module.exports = {
  deleteCartH,
};
