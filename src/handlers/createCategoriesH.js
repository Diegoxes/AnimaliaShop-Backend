const { createCategoriesC } = require("../services/categoryService"); // Asegúrate de que la ruta sea correcta

const createCategoryHandler = async (req, res) => {
  const { categoryName } = req.body;

  try {
    const result = await createCategoriesC(categoryName); // Aquí también ajusta el nombre de la función

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    res.status(201).json(result); // Puedes ajustar la respuesta según tus necesidades
  } catch (error) {
    console.error('Error al manejar la solicitud:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  createCategoryHandler,
};