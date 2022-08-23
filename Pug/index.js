const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const pug = require("pug");
const productController = require("./Controllers/productController");
const Product = require("./models/Product");

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { message: "lel" });
});

app.post("/productos", productController.uploadProduct);
app.get("/productos", productController.getProducts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
