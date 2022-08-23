const express = require("express");
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productController = require("./Controllers/productController");
const Product = require("./models/Product");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/productos", productController.uploadProduct);
app.get("/productos", productController.getProducts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
