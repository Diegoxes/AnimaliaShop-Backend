const { Users } = require("../db");

const userBan = async (req, res) => {
  try {
    const { userId } = req.params;
    const { isBanned } = req.body;

    const user = await Users.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    user.isBanned = isBanned;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error("error:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = { userBan };
