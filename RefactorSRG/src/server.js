// Setup MongoDB
require("dotenv").config();
const mongoose = require("mongoose");
const sequelize = require("./utils/postgresql");
const express = require("express"),
  PORT = process.env.PORT || 3000;

const { errorHandler, notFoundHandler } = require("./middlewares");
const { Product, User, Login } = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Product);
app.use("/", User);
app.use("/", Login);

app.use(notFoundHandler);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.sync();
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
