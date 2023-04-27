const { Product } = require("../models/models");

// GET Method
const getAllProducts = async (_, res) => {
  console.log("I am in a GET Method");
  const allProducts = await Product.find();
  res.json(allProducts);
};

// POST Method
const addProduct = async (req, res, next) => {
  console.log("I am in a POST Method");
  try {
    const newProduct = new Product({ ...req.body, id: crypto.randomUUID() });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

// PATCH Method
const updateProduct = async (req, res) => {
  console.log("I am in a PATCH Method");
  const { productId } = req.params;
  const product = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  res.json(product);
};

// DELETE Method
const deleteProduct = async (req, res) => {
  console.log("I am in a DELETE Method");
  const { productId } = req.params;
  const deletedProduct = await Product.findByIdAndRemove(productId);
  res.json({
    message: `El producto denominado ${deletedProduct.name} fue eliminado`,
  });
};

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
