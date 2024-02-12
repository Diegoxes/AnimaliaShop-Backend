const { Review, Users } = require('../db');

console.log('base de datos de review' , Review);
console.log('base de datos de users', Users);

async function getReviews() {
  try {
    const pageReviews = await Review.findAll({
      where: { pageReview: true }, // Filtra solo las revisiones de la página
      include: [{ model: Users }], // Incluye la información del usuario que hizo la revisión
    });

    return { success: true, reviews: pageReviews || [] };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Error al obtener las revisiones de la página.' };
  }
}

async function createReview(reviewData) {
  try {
    console.log('Datos de revisión:', reviewData);

    // Ajusta userId según cómo estás manejando las sesiones y la autenticación
    const userId = reviewData.userId;

    const newReview = await Review.create({
      content: reviewData.content,
      score: reviewData.score,
      userId: userId, // Asigna la revisión al usuario que la creó
      pageReview: true, // Indica que es una revisión de la página
    });

    console.log('Revisión creada con éxito:', newReview);
    return { success: true, review: newReview };
  } catch (error) {
    console.error('Error al crear la revisión:', error);
    return { success: false, error: 'Error al crear la revisión.' };
  }
}

module.exports = { getReviews, createReview };