const crypto = require("crypto");
const { Product } = require("../models/models");

// GET Method
const getAllProducts = async (_, res) => {
  const allProducts = await Product.find();
  res.json(allProducts);
};

// POST Method
const addProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

// PATCH Method
const updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// DELETE Method
const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndRemove(productId);
    res.json({
      message: `El producto denominado ${deletedProduct?.name} fue eliminado`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
