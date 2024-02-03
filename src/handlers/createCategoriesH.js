const { createCategoriesC } = require("../controllers/createCategoriesC");

const createCategoriesH = async (req, res) => {
  const { category } = req.body;

  try {
    const result = await createCategoriesC(category);

    if (!result || result.error) {
      return res
        .status(400)
        .json({ error: result ? result.error : "Error al crear la categoría" });
    }

    return res.status(201).json({ data: result.data });
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  createCategoriesH,
};
