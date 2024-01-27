const { Router } = require("express");
const { getAllProductsH } = require("../handlers/getAllProductsH");
const { getProductByTitleH } = require("../handlers/getProductByTitleH");

const router = Router();

router.get("/products", getAllProductsH);
router.get("/products/title/:title", getProductByTitleH);

module.exports = router;
