// Fundamental backend concepts by Paul
// Session 3, from hero to superhero NODEJS

// ---Theoretical part of the class---

// HTTP
// https://developer.mozilla.org/en-US/docs/Glossary/HTTP

// URL
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL

// How can I check an API?
// Tools: Postman, Insomnia or console

// Using console:
// 1. Open a Git Bash console
// curl --help command
// curl -v "URL"
// The result are related to the process, it also shows the data from the API

// E.g: $ curl -v https://pokeapi.co/api/v2/item

// ---Practical part of the class---

// Protocol imported
const http = require("http");

// Definition of the host and the port that the server will use.
const HOST = "localhost";
const PORT = "8000";

const writeHTMLResponse = (res, htmlCode) => {
  //  Building a header
  res.setHeader("Content-Type", "text/html");
  // The status code that we use when the response is a success
  res.writeHead(200);
  res.end(htmlCode);
};

const writeJSONResponse = (res, json) => {
  //  Building a header
  res.setHeader("Content-Type", "application/json");
  // The status code that we use when the response is a success
  res.writeHead(200);
  // It is waiting an string and products is an array so the converter is needed. JSON.stringify
  res.end(JSON.stringify(json));
};

const products = [
  {
    name: "Reloj",
    price: 100,
    quantity: "2",
  },
  {
    name: "Correa",
    price: 100,
    quantity: "3",
  },
  {
    name: "Sombrero",
    price: 1000,
    quantity: "3",
  },
];

// Create a server
// Request and response are the arguments that the createServer funtion needs
const server = http.createServer(async (req, res) => {
  // Get the url using the req param
  const url = req.url;
  console.log("This is the URL: ", url);

  // Creating a body because it is needed in POST methods and others
  let body = "";

  // req.on is lisening different events
  await req.on("data", (chunk) => {
    body += chunk;
  });

  // A logic example using the URL
  if (url === "/other") {
    writeHTMLResponse(res, "<p>This is other path</p>");
  } else if ("/api/v1/products/") {
    const method = req.method;
    console.log("This is the selected method: ", method);
    if (method === "GET") {
      // Do something
      writeJSONResponse(res, products);
    }
    if (method === "POST") {
      // As we receive a string, we must convert it into an object and then to add it to the array of products
      const product = JSON.parse(body);
      products.push(product);
      writeJSONResponse(res, products);
    }
    if (method === "DELETE") {
      const productInfo = JSON.parse(body);
      const productName = productInfo.name;
      if (productName) {
        const indexOfProduct = products.findIndex(
          (product) => product.name === productName
        );
        console.log("Index of product: ", indexOfProduct);
        if (indexOfProduct !== -1) {
          products.splice(indexOfProduct, 1);
        }
      }
      writeJSONResponse(res, products);
    }
  } else {
    // writeHTMLResponde is a funtion to avoid rewrite the same chunk of code for each status of response
    writeHTMLResponse(res, "<p>This is HTML</p>");
  }
});

// Instance of the server
server.listen(PORT, HOST, () => {
  console.log(`Server is running in http://${HOST}:${PORT}`);
});

// RestFul API is the most popular backend architecture in JS

// Base on the API concept. An API is the piece between the client and the server. It communicates the two parts
// RestFul API Principles:
// 1. Uniform interface: it has its own conventions (GET, POST, etc...)
// 2. Stateless: the responses do not depend on the data from the client side
// 3. Defined operators
// 4. Standardized syntax
// 5. The structure uded is JSON

// HTTP Methods:
// GET: to obtain the resource from the entity
// POST: add new data
// DELETE: Remove data
// Updating data with two methods: PUT and PATCH
// PUT: Change all the attributes of the entity.
// PATH: Modify some atrributes of the entity.
