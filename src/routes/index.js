const { Router } = require("express");
const { createOrderH } = require("../handlers/createOrderH");
const { getOrderDetailH } = require("../handlers/getOrderDetailH");
const { updateProductH } = require("../handlers/updateProductH");
const { getAllProductsH } = require("../handlers/getAllProductsH");
const { getProductByTitleH } = require("../handlers/getProductByTitleH");
const { deleteProductStockH } = require("../handlers/deleteProductStockH");
const { getProductByIdH } = require("../handlers/getProductByIdH");
const { createCategoriesH } = require("../handlers/createCategoriesH");
const { getAllCategoriesH } = require("../handlers/getAllCategoriesH");
const { createProductH } = require("../handlers/createProductH");
const { uploadImageH } = require("../handlers/uploadImageH");
const { deleteProduct } = require("../Dashboard/deleteProduct");
const { deleteCategories } = require("../Dashboard/deleteCategories");
const { createUsersH } = require("../handlers/createUsersH");
// review
const { 
    handleCreateReview, 
    handleGetReviews 
} = require("../handlers/reviewH");

const router = Router();

router.put("/products/:productId", updateProductH);
router.put("/products/:productId/delete", deleteProductStockH);
router.get("/products", getAllProductsH);
router.get("/products/title/:title", getProductByTitleH);
router.get("/products/:productId", getProductByIdH);
router.get("/categories", getAllCategoriesH);
router.get("/order/:orderId", getOrderDetailH);
router.post("/categories/create", createCategoriesH);
router.post("/createProduct", createProductH); //
router.post("/createOrder", createOrderH);
router.post("/uploadImage", uploadImageH);
router.delete("/deleteProduct/:productId", deleteProduct);
router.delete("/deleteCategories/:category", deleteCategories);
router.post("/users", createUsersH);

//reviews
router.get("/review", handleGetReviews);
router.post("/upreview" , handleCreateReview );


module.exports = router;