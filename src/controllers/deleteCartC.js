const { Users, Products, Cart } = require("../db");

const deleteCartC = async (email, id, all) => {
  try {
    if (!email) throw new Error("Data incompleta");
    const user = await Users.findOne({
      where: { email },
      include: {
        model: Products,
        through: { model: Cart },
      },
    });
    if (!user) throw new Error("Usuario no encontrado");
    if (all) {
      await Cart.destroy({
        where: {
          userId: user.id,
        },
      });
    } else {
      const productInCart = user.Products.find(
        (product) => product.id === Number(id)
      );
      await Cart.destroy({
        where: {
          userId: user.id,
          productId: productInCart.id,
        },
      });
    }

    const updateUser = await Users.findOne({
      where: { email },
      include: {
        model: Products,
        through: { model: Cart },
      },
    });
    return updateUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  deleteCartC,
};
