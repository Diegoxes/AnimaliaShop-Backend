const { Users } = require("../db");

const createUsersC = async (req) => {
  try {
    const { email, name, picture } = req.body;

    if (!email) {
      throw new Error("Datos incompletos");
    }

    const [user] = await Users.findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        name: name || '', // Si name no está presente, se asigna una cadena vacía
        photo: picture || '' // Si picture no está presente, se asigna una cadena vacía
      }
    });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUsersC,
};