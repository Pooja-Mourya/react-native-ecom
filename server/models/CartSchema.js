const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
  {
    userId: {},
    product: [
      {
        productId: {type: Number},
      },
      {
        category: {type: String, default: 1},
      },
    ],
  },
  {timestamps: true},
);

module.exports = mongoose.model('card', CartSchema);
