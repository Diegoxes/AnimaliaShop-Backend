const { Categories } = require("../db");

const deleteCategories = async (req, res) => {
  const { category } = req.params;
  try {
    const categoryDelete = await Categories.findOne({
      where: { category: category },
    });

    if (!categoryDelete) {
      return res.status(404).json({ error: "Categoria no encontrada" });
    }

    categoryDelete.deleted = true;
    await categoryDelete.save();

    res.status(200).json({ message: "Categoría eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la categoria:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { deleteCategories };
