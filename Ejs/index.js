const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productController = require("./Controllers/productController");
const Product = require("./models/Product");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.post("/productos", productController.uploadProduct);
app.get("/productos", productController.getProducts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
