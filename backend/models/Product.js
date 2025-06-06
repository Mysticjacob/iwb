const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
