const { Router } = require("express");
const { createOrderH } = require("../handlers/createOrderH");
const { getOrderDetailH } = require("../handlers/getOrderDetailH");
const { updateProductH } = require("../handlers/updateProductH");
const { getAllProductsH } = require("../handlers/getAllProductsH");
const { getProductByTitleH } = require("../handlers/getProductByTitleH");
const { deleteProductH } = require("../handlers/deleteProductH");
const { getProductByIdH } = require("../handlers/getProductByIdH");

const router = Router();

router.get("/products", getAllProductsH);
router.get("/products/title/:title", getProductByTitleH);
router.get("/products/:productId", getProductByIdH);

router.post("/createOrder", createOrderH);
router.get("/order/:orderId", getOrderDetailH);
router.put("/products/:productId", updateProductH);
router.put("/products/:productId/delete", deleteProductH);

module.exports = router;
