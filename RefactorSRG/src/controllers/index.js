const { healthCheck, welcomePage } = require("./app.controller");
const Product = require("./product.controller");
const User = require("./user.controller");
const { login, restrictedView } = require("./auth.controller");

module.exports = {
  healthCheck,
  welcomePage,
  Product,
  User,
  login,
  restrictedView,
};
