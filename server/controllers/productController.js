const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  const data = { name, price, created_at: new Date(), updated_at: new Date() };
  Product.create(data, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Product created successfully', id: results.insertId });
  });
};

exports.updateProduct = (req, res) => {
  const { name, price } = req.body;
  const data = { name, price, updated_at: new Date() };
  Product.update(req.params.id, data, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Product updated successfully' });
  });
};

exports.deleteProduct = (req, res) => {
  Product.delete(req.params.id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  });
};