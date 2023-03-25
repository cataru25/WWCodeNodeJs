// EXPRESS

// Framework from NODE to create the backend in your application using JS
// https://stateofjs.com/en-us/ State of JS is a web site where find some information and ranking about tools related to JS

// How can express create an app?
// Step by step

// npm init -y
// npm install express
// Modify the dev script with the flag --watch
//     "dev": "node --watch index.js"
// Command console: npm run dev

// Local DB
const products = [
  {
    id: 1,
    name: "Reloj",
    price: 100,
    quantity: "2",
  },
  {
    id: 2,
    name: "Correa",
    price: 100,
    quantity: "3",
  },
  {
    id: 3,
    name: "Sombrero",
    price: 1000,
    quantity: "3",
  },
];

// import express
const express = require("express");

// Define the port

const PORT = 3000;

// Instance from express
const app = express();
// When Express detect a json, this line makes the parsing
app.use(express.json());

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

// GET Method
app.get("/", (req, res) => {
  res.send("This is my first app using EXPRESS");
});

app.get("/api/v1/products", (req, res, next) => {
  next();
  res.json(products);
});

// Using query string
app.get("/api/v1/products/:productId", (req, res) => {
  // Destructuring
  const { productId } = req.params;
  // Parsing because id must be an int and it is a string
  const productIdInt = parseInt(productId);
  //   Using the find to obtain the product needed
  const product = products.find((product) => product.id === productIdInt);
  // Error handler
  if (!product) {
    throw new Error("Product is not found");
  }

  //   Return the found product
  res.json(product);
});

// POST Method
app.post("/api/v1/products", (req, res) => {
  const product = req.body;
  //   Using push to add the new product
  products.push(product);
  //   Return the found product
  res.json(products);
});

// Homework: PUT and DELETE Methods

// Logger config
app.use(errorLogger);
app.use(errorHandler);

// Suscription to the changes
app.listen(PORT, () => {
  console.log("@Listening in localhost:", `http://localhost:${PORT}`);
});
