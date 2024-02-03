const { Router } = require("express");
const { createOrderH } = require("../handlers/createOrderH");
const { getOrderDetailH } = require("../handlers/getOrderDetailH");
const { updateProductH } = require("../handlers/updateProductH");
const { getAllProductsH } = require("../handlers/getAllProductsH");
const { getProductByTitleH } = require("../handlers/getProductByTitleH");
const { deleteProductH } = require("../handlers/deleteProductH");
const { getProductByIdH } = require("../handlers/getProductByIdH");
const { createCategoriesH } = require("../handlers/createCategoriesH");
const { getAllCategoriesH } = require("../handlers/getAllCategoriesH");
const { createProductH } = require("../handlers/createProductH");
const { uploadImageH } = require("../handlers/uploadImageH");

const router = Router();

router.put("/products/:productId", updateProductH);
router.put("/products/:productId/delete", deleteProductH);
router.get("/products", getAllProductsH);
router.get("/products/title/:title", getProductByTitleH);
router.get("/products/:productId", getProductByIdH);
router.get("/categories", getAllCategoriesH);
router.get("/order/:orderId", getOrderDetailH);
router.post("/categories/create", createCategoriesH);
router.post("/createProduct", createProductH);
router.post("/createOrder", createOrderH);
router.post("/uploadImage", uploadImageH);
module.exports = router;
