const express = require('express');
const Product = require('../models/ProductSchema');
const Features = require('../feature/Features');
const IsAuth = require('../middelware/IsAuth');
const AuthorizedAdmin = require('../middelware/AthourizeAdmin');

const router = express.Router();

router.post('/product', IsAuth, AuthorizedAdmin('admin'), (req, res) => {
  //   console.log(req.body);
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then(() => {
      res.status(201).json({
        success: true,
        newProduct,
      });
    })
    .catch(e => {
      console.log(e);
    });
});

router.get('/products', async (req, res) => {
  //   console.log(req.body);

  const resultPerPage = 5;
  //   const productCount = await Product.countDocuments();

  const feature = new Features(Product.find(), req.query)
    .search()
    .filter()
    .paginationPerPage(resultPerPage);
  //   const products = await feature.query;
  const products = await feature;
  res.status(201).json({
    success: true,
    products,
  });
  try {
    const ProductList = await Product.find();
    res.status(201).json({
      success: true,
      ProductList,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get('/product/:id', async (req, res) => {
  //   console.log(req.body)
  const productCount = await Product.countDocuments();

  try {
    const _id = req.params._id;
    const ProductList = await Product.findById(_id);
    res.status(201).json({
      success: true,
      ProductList,
      productCount,
    });
  } catch (error) {
    console.log(error);
  }
});

// router.get('/search/:key', async (req, res) => {
//   //   console.log(req.body)
//   try {
//     const ProductList = await Product.find({
//       $or: [{description: {$regex: req.params.key}}],
//     });
//     res.status(201).json({
//       success: true,
//       ProductList,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

router.patch('/product/:id', async (req, res) => {
  //   console.log(req.body)
  try {
    const _id = req.params.id;
    const ProductList = await Product.findByIdAndUpdate(_id, req.body);
    res.status(201).json({
      success: true,
      ProductList,
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/product/:id', async (req, res) => {
  //   console.log(req.body)
  try {
    const ProductList = await Product.findOneAndDelete();
    res.status(201).json({
      success: true,
      ProductList,
    });
  } catch (error) {
    console.log(error);
  }
});

router.put('/product/:id', async (req, res) => {
  //   console.log(req.body)
  const ProductList = await Product.findById(req.params.id);
  if (!ProductList) {
    return req.status(500).json({
      success: true,
      message: 'user update error',
    });
  } else {
    try {
      const _id = req.params.id;
      const ProductList = await Product.findByIdAndUpdate(_id, req.body, {
        new: true,
        runValidators: true,
        useUndefine: false,
      });
      res.status(201).json({
        success: true,
        ProductList,
      });
    } catch (error) {
      console.log(error);
    }
  }
});
module.exports = router;
