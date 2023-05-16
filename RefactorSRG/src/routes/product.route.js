const { Router } = require("express");
const { validateNewProduct, validateUpdateProduct } = require("../middlewares");
const { healthCheck, welcomePage } = require("../controllers/app.controller");
const controller = require("../controllers/product.controller");

const productsRouter = new Router();
const BASE_PRODUCTS = "/api/v1/products";

productsRouter.get("/", welcomePage);
productsRouter.get("/health", healthCheck);
productsRouter.get(BASE_PRODUCTS, controller.getAllProducts);
productsRouter.post(BASE_PRODUCTS, validateNewProduct, controller.addProduct);
productsRouter.patch(
  `${BASE_PRODUCTS}/:productId`,
  validateUpdateProduct,
  controller.updateProduct
);
productsRouter.delete(`${BASE_PRODUCTS}/:productId`, controller.deleteProduct);

module.exports = productsRouter;
