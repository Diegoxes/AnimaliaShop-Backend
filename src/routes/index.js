const { Router } = require("express");
const { getAllProductsH } = require("../handlers/getAllProductsH");
const { getProductByIdH } = require("../handlers/getProductByIdH");

const router = Router();

router.get("/products", getAllProductsH);
router.get("/products/:productId", getProductByIdH);

module.exports = router;
