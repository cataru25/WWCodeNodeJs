// Controlar todas las exportaciones desde el index.js
const { errorHandler, notFoundHandler } = require("./errorHandler");
const { validateNewProduct, validateUpdateProduct } = require("./validations");

exports.errorHandler = errorHandler;
exports.notFoundHandler = notFoundHandler;
exports.validateNewProduct = validateNewProduct;
exports.validateUpdateProduct = validateUpdateProduct;
