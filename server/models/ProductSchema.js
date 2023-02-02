const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      //   ,
      //   trim: true,
      //   maxLength: [15, 'product max length 15'],
    },
    description: {type: String},
    price: {type: String},
    discountPrice: {type: String},
    color: {type: String},
    size: {type: String},
    ratings: {type: Number},
    images: [
      {
        public_id: {
          type: String,
          // require: true
        },
        url: {
          type: String,
          // require: true
        },
      },
    ],
    category: {
      type: String,
    },
    stock: {
      type: Number,
    },
    numberOfReview: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          //   type: mongoose.Schema.objectId,
          type: String,
          ref: 'User',
          // require: true
        },
        name: {
          type: String,
        },
        rating: {
          type: Number,
        },
        comment: {
          type: String,
        },
        time: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    user: {
      //   type: mongoose.Schema.objectId,
      type: String,
      ref: 'User',
      // require: true
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model('product', ProductSchema);
