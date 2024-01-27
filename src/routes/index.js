const { Router } = require("express");
const {
  getAllProductsH,
  postProductHandler,
} = require("../handlers/ProductHandler");

const router = Router();

router
  .get("/api/products", getAllProductsH)
  .post("/api/products", postProductHandler);
module.exports = router;
