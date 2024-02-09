const { getAllCategoriesC } = require("../controllers/getAllCategoriesC");

const getAllCategoriesH = async (req, res) => {
  try {
    const result = await getAllCategoriesC();

    if (result.error) {
      console.error("Error al obtener categorías:", result.error);
      return res.status(500).json({ error: result.error });
    }

    console.log("Categorías obtenidas correctamente:", result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error interno del servidor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { getAllCategoriesH };
