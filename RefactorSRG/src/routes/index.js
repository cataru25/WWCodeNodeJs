const { Router } = require("express");
const { healthCheck, welcomePage } = require("../controllers/app.controller");
// const { Product } = require("./models");

const routes = new Router();
const BASE = "/api/v1/products";
routes
  .get("/", welcomePage)
  //.get("/health", (_, rest) => rest.send("check"))
  .get("/health", healthCheck)
  .use(BASE, async (_, res) => {
    const products = await Product.find();
    res.json(products);
  })
  .use("/api/v1/users", require("./userRoute"));

module.exports = routes;
