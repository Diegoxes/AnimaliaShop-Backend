const { createCategoriesC } = require("../controllers/createCategoriesC");

const createCategoriesH = async (req, res) => {
  const { category, image } = req.body;

  try {
    const result = await createCategoriesC(category, image);

    if (!result || result.error) {
      console.error("Error al crear la categoría:", result.error);
      return res.status(400).json({
        error: result ? result.error : "Error al crear la categoría",
      });
    }

    console.log("Categoría creada con éxito:", result.data);

    return res.status(201).json({ data: result.data });
  } catch (error) {
    console.error("Error interno del servidor:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  createCategoriesH,
};
