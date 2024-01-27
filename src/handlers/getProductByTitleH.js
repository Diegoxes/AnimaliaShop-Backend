const { getProductByTitleC } = require("../controllers/getProductByTitleC");

const getProductByTitleH = async (req, res) => {
  console.log("Inside getProductByTitleH2");
  try {
    const { title } = req.params;

    if (!title) {
      res.status(400).json({ error: "Missing title parameter" });
      return;
    }
    const products = await getProductByTitleC(title);

    res.status(200).json(products);
    console.log("End of getProductByTitleH");
  } catch (error) {
    console.error("Error in getProductByTitleH:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getProductByTitleH };
