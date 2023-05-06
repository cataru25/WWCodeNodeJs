require("dotenv").config();

const express = require("express"),
  PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

// Cambiar la importación usando el index.js que se creó en el folder de middleware
const { errorHandler, notFoundHandler } = require("./middlewares/index");
// const { sequelize } = require("./models/clientModel");
const sequelize = require("./utils/postgresql");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Estoy llamando V1
app.use("/", require("./routes"));
app.use(notFoundHandler);
app.use(errorHandler);

console.log("Mongo: ", process.env.MONGODB_CONNECTION);

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
