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
        photo: picture || '',
        password:"", // Si picture no está presente, se asigna una cadena vacía
      }
    });
    if(user){
      const emailInfo = {
        name: user.name,      
        email: user.email,
        subject: "Registro Exitoso",
        html: `¡Bienvenido! Te has registrado exitosamente en Animalia. ¡Esperamos que disfrutes de tu experiencia!`,
        link: "https://tiendota.vercel.app/",
      };

      if (
        !emailInfo.name ||
        !emailInfo.email ||
        !emailInfo.subject ||
        !emailInfo.html ||
        !emailInfo.link
      ) {
        return res.status(404).json("Incomplete data");
      }
      const emailResponse = await mailTo({ body: emailInfo });
      if (!emailResponse.messageId) {
        return res
          .status(409)
          .json({ message: "la notificacion no fue aprobada" });
      } else {
        console.log("Email sent successfully");
      }
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUsersC,
};