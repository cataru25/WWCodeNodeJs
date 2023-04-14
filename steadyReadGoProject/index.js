// Ejercicio

// Para practicar lo que llevamos del curso la idea es tomar todo lo que han hecho.
// 1. Vamos a crear una API REST con express en donde se implementan los
// métodos GET, POST, PATCH, DELETE de una lista de productos.

// Importaciones
const fs = require("fs");
const crypto = require("crypto");
const express = require("express");

// Instancias
const app = express();

// Declaraciones y asignaciones
app.use(express.json());
const PORT = 3000;
const productsDB = JSON.parse(fs.readFileSync(`${__dirname}/productsDB.txt`));

// Funciones requeridas en la implementación

// Error logger
const errorLogger = (err, req, res, next) => {
  console.log(err);
  next(err);
};

// Error handler
const errorHandler = (err, req, res, next) => {
  res.status(400).json({
    message: err.message,
  });
};

const saveProductsDB = (products) => {
  const productList = JSON.stringify(products);
  fs.writeFile("productsDB.txt", productList, (err) => {
    if (err) {
      console.error(
        "Error al guardar o modificar producto(s) en la base de datos",
        err
      );
    } else {
      console.log(
        "Producto(s) guardado(s) o modificado(s) con éxito en la base de datos"
      );
    }
  });
};

// Método GET
app.get("/api/v1/products", (req, res, next) => {
  res.json(productsDB);
});

// Método POST
app.post("/api/v1/products", (req, res) => {
  let newProduct = { ...req.body, id: crypto.randomUUID() };
  productsDB.push(newProduct);
  saveProductsDB(productsDB);
  res.json(newProduct);
});

// Método PATCH
app.patch("/api/v1/products/:productId", (req, res) => {
  const { productId } = req.params;
  const updatedProduct = productsDB.find((product) => product.id === productId);
  if (!updatedProduct) {
    return res.status(404).json("El ID que ha ingresado es inválido");
  }
  updatedProduct.price = req.body.price;
  saveProductsDB(productsDB);
  res.json(updatedProduct);
});

// Método DELETE
app.delete("/api/v1/products/:productId", (req, res) => {
  const { productId } = req.params;
  const deletedProductIndex = productsDB.findIndex(
    (product) => product.id === productId
  );
  if (deletedProductIndex < 0) {
    return res.status(404).json("El ID que ha ingresado es inválido");
  }
  const deletedProductName = productsDB[deletedProductIndex].name;
  productsDB.splice(deletedProductIndex, 1);
  saveProductsDB(productsDB);
  res.json(`El producto denominado ${deletedProductName} fue eliminado`);
});

// Logger config
app.use(errorLogger);
app.use(errorHandler);

// Suscripción para escuchar los cambios
app.listen(PORT, () => {
  console.log("@Listening in localhost: ", `http://localhost:${PORT}`);
});

// 2. Internamente los productos se deben guardar en un archivo .txt para
// asegurar una persistencia de los datos, incluso si se reinicia la aplicación.

// Este requisito queda cubierto por la implementación
