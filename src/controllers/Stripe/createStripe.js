const stripe = require("stripe")(process.env.STRIPE_SECRET);

const createStripe = async (req, res) => {
  const { products } = req.body;

  console.log("products", products);

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "USD",
      product_data: {
        name: product.title,
        images: [product.image],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://final-tau-virid.vercel.app/success",
    cancel_url: "https://final-tau-virid.vercel.app/cancel",
  });
  res.json({ id: session.id });
};

module.exports = { createStripe };
