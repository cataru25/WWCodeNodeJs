const express = require("express");
const controller = require("../controllers/product.controller");
const { healthCheck, welcomePage } = require("../controllers/app.controller");
const productsRouter = express.Router();
const {
  validateNewProduct,
  validateUpdateProduct,
} = require("../middlewares/validations");

productsRouter.get("/", welcomePage);
productsRouter.get("/health", healthCheck);
productsRouter.get("/api/v1/products", controller.getAllProducts);
productsRouter.post(
  "/api/v1/products",
  validateNewProduct,
  controller.addProduct
);
productsRouter.patch(
  "/api/v1/products/:productId",
  validateUpdateProduct,
  controller.updateProduct
);
productsRouter.delete("/api/v1/products/:productId", controller.deleteProduct);

module.exports = productsRouter;
