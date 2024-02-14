// const { createOrderC } = require("../controllers/createOrderC");

// const createOrderH = async (req, res) => {
//   try {
//     const { productsSelected } = req.body;
//     //{
//     //"productsSelected": [
//     //{"productId": 1, "cantidad": 2},
//     //{"productId": 2, "cantidad": 3}
//     //]
//     //}
//     if (!productsSelected || !Array.isArray(productsSelected)) {
//       return res
//         .status(400)
//         .json({
//           error: "La solicitud debe contener 'productsSelected' como un array",
//         });
//     }

//     const orderMessage = await createOrderC(productsSelected);

//     res.status(200).json(orderMessage);
//   } catch (error) {
//     console.error("Error en createOrderH:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = { createOrderH };

const { createOrderC } = require("../controllers/createOrderC.js");

const createOrderH = async (req, res) => {
  const { email, carrito } = req.body;
  try {
    const response = await createOrderC(email, carrito);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "No se envia el orden a la bd!" });
  }
};

module.exports = {
  createOrderH,
};
