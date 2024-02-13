// src/handlers/reviewHandler.js
const { getReviews, createReview } = require('../controllers/reviewC');

async function handleGetReviews(req, res) {
  try {
    const reviews = await getReviews();

    if (reviews.success) {
      return res.status(200).json(reviews.reviews);
    } else {
      return res.status(500).json({ error: reviews.error });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

async function handleCreateReview(req, res) {
  const { content, score } = req.body;

  // Ajusta userId según cómo estás manejando las sesiones y la autenticación
  const userId = req.userId;

  const reviewData = { content, score, userId };

  const result = await createReview(reviewData);

  if (result.success) {
    return res.status(201).json(result);
  } else {
    return res.status(500).json(result);
  }
}
//hola

module.exports = { handleGetReviews, handleCreateReview };
