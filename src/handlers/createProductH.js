const { createProductC } = require("../controllers/createProductC");

const createProductH = async (req, res) => {
  try {
    const data = req.body;

    const result = await createProductC(data);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { createProductH };
