const { Router } = require("express");
const { getAllProductsH } = require("../handlers/getAllProductsH");
const { getProductByTitleH } = require("../handlers/getProductByTitleH");
const { getProductByIdH } = require("../handlers/getProductByIdH");
const { postUserH } = require("../handlers/postUserH");

const router = Router();

router.get("/products", getAllProductsH);
router.get("/products/title/:title", getProductByTitleH);
router.get("/products/:productId", getProductByIdH);
router.post("/users", postUserH);


module.exports = router;
