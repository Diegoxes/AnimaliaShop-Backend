const { Users } = require("../db");

const userRole = async (req, res) => {
  try {
    const { userId } = req.params;
    const { isAdmin } = req.body;

    const user = await Users.findOne({ where: { id: userId } });
    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
    user.isAdmin = isAdmin;
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el rol del usuario" });
  }
};

module.exports = { userRole };
