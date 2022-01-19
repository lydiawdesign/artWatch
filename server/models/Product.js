const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  startBid: {
    type: Number,
    required: true,
    min: 0.99
  },
  category: {
    type: String,
  }
}, {timestamp: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
