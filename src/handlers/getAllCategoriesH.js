const { getAllCategoriesC } = require("../controllers/getAllCategoriesC");

const getAllCategoriesH = async (req, res) => {
  try {
    const result = await getAllCategoriesC();

    if (result.error) {
      return res.status(500).json({ error: result.error });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor " });
  }
};

module.exports = { getAllCategoriesH };
