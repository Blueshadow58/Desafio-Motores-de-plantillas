class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }

  static productos = [];
  static globalCount = 0;

  static addProduct = (name, price, image) => {
    Product.count();
    const data = new Product(name, price, image);
    data.id = Product.globalCount;

    Product.productos.push(data);
  };

  static count = () => {
    Product.globalCount++;
  };

  static getAll = () => {
    return Product.productos;
  };

  static getProductById = (id) => {
    const productos = Product.productos;
    const producto = productos.find((x) => x.id === parseInt(id));
    return producto;
  };

  static updateById = (id, name, price, image) => {
    Product.productos[id - 1].name = name;
    Product.productos[id - 1].price = price;
    Product.productos[id - 1].image = image;

    return this.getAll();
  };

  static deleteById = (id) => {
    const productos = Product.productos;
    const producto = productos.splice(id - 1, 1);
    // delete producto;

    return "Producto eliminado";
  };
}

module.exports = Product;
