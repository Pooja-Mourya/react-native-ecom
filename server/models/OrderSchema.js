const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
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
    address: {type: String, require: true},
    amount: {type: Number, require: true},
    status: {type: String, default: 'pending'},
  },
  {timestamps: true},
);

module.exports = mongoose.model('order', OrderSchema);
