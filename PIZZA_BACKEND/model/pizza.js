const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient', // Reference to the Ingredient model
  }],
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
