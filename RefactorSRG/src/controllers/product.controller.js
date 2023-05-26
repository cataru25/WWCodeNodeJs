const { Product } = require("../models/product.model");

// GET Method
const getAllProducts = async (_, res, next) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

// GET Method by ID
const getProductId = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const productById = await Product.find({ _id: productId });
    if (Product.length === 0) {
      res.status(404).json({
        status: 404,
        message: "ID not found. The product does not exist",
      });
    } else {
    }
    res.status(200).json(productById);
  } catch (error) {
    next(error);
  }
};

// POST Method
const addProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

// PATCH Method
const updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (product === null) {
      res.status(404).json({
        status: 404,
        message: "ID not found. The product does not exist",
      });
    } else {
      res.json(product);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE Method
const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (deletedProduct === null) {
      res.status(404).json({
        status: 404,
        message: "ID not found. The product does not exist",
      });
    } else {
    }
    res.status(200).json({
      status: 200,
      message: `${deletedProduct?.name} has been deleted`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct,
};
