const { Users } = require('../db');
const fs = require("fs").promises; // Importing fs with promises API for async/await
const path = require("path");
const JSONFilePath = path.join(__dirname, "../../api/usuarios.json");

const getAllUsersC = async (req) => {
  try {
    // Verificar si la tabla Users está vacía
    const count = await Users.count();
    if (count === 0) {
      const data = await fs.readFile(JSONFilePath, "utf-8"); // Using promises API for fs.readFile
      const usersData = JSON.parse(data);
      await Users.bulkCreate(usersData);
      console.log('Usuarios precargados correctamente.');
    }

    const users = await Users.findAll({
      order: [['email', 'ASC']], 
    });

    return users;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllUsersC,
}
