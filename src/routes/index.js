const { Router } = require("express");
const { getAllProductsH } = require("../handlers/getAllProductsH");

const router = Router();

router.get("/products", getAllProductsH);


module.exports = router;