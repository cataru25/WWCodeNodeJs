const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: false },
  price: { type: Number, require: true, default: 0 },
  availableQuantity: { type: Number, require: true },
  category: { type: String, require: true },
});

exports.Product = mongoose.model("products", ProductsSchema);
