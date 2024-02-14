const {Review, Users} =require('../db')

async function getReviews() {
  try {
    const pageReviews = await Review.findAll({
      include: [
        {
          model: Users,
        },
      ]
    });

    return { success: true, reviews: pageReviews  };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Error al obtener las revisiones de la página.' };
  }
}

async function createReview(userId, content, score) {
  try {
    // Verifica si el usuario existe antes de crear la revisión
    const user = await Users.findByPk(userId);
    if (!user) {
      return { success: false, message: 'Usuario no encontrado.', error: 'Usuario no encontrado.' };
    }

    // Crea la revisión asociada al usuario
    const newReview = await Review.create({
      content,
      score,
    });

    // Asocia la revisión al usuario
    await user.addReview(newReview);

    return { success: true, message: 'Revisión creada correctamente.', review: newReview };
  } catch (error) {
    console.error('Error al crear revisión:', error);
    return { success: false, message: 'Error al crear la revisión.', error: error.message };
  }
}

module.exports = { getReviews, createReview };