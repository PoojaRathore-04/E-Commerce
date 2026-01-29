const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.json([]));
router.get('/', async (req, res) => {
  const search = req.query.search;

  const products = await Product.find({
    name: { $regex: search, $options: 'i' }
  });

  res.json(products);
});

module.exports = router;