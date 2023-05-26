const { Router } = require("express");
const { validateNewProduct, validateUpdateProduct } = require("../middlewares");
const { healthCheck, welcomePage, Product } = require("../controllers");

const productsRouter = new Router();
const BASE_PRODUCTS = "/api/v1/products";

productsRouter.get("/", welcomePage);
productsRouter.get("/health", healthCheck);
productsRouter.get(BASE_PRODUCTS, Product.getAllProducts);
productsRouter.get(`${BASE_PRODUCTS}/:productId`, Product.getProductId);
productsRouter.post(BASE_PRODUCTS, validateNewProduct, Product.addProduct);
productsRouter.patch(
  `${BASE_PRODUCTS}/:productId`,
  validateUpdateProduct,
  Product.updateProduct
);
productsRouter.delete(`${BASE_PRODUCTS}/:productId`, Product.deleteProduct);

module.exports = productsRouter;
