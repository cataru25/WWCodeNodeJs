require("dotenv").config();

const express = require("express"),
  PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

const app = express();

console.log("Mongo: ", process.env.MONGODB_CONNECTION);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log("Aplicación corriendo en el puerto ", PORT);
    });
  } catch (error) {
    console.error(error);
    // Cualquier error diferente de 0 porque este valor representa éxito
    process.exit(1);
  }
};

start();
