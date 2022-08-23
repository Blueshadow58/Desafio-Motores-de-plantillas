const Product = require("../models/Product");

exports.uploadProduct = (req, res, next) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    res.render("index");
  } else {
    Product.addProduct(name, price, image);
    res.render("index");
  }
};

exports.getProducts = (req, res, next) => {
  res.render("products", {
    emptyList: !Product.getAll().length,
    products: Product.getAll(),
  });
};

exports.getProductById = (req, res, next) => {
  res.send(Product.getProductById(req.params.id));
};

exports.deleteById = (req, res, next) => {
  res.send(Product.deleteById(req.params.id));
};

exports.updateById = (req, res, next) => {
  const id = req.params.id;
  const { name, price } = req.body;
  const { image } = req;

  if (!Product.getProductById(id)) {
    res.send("no existe");
  } else {
    res.send(Product.updateById(id, name, price, image));
  }
};
