const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URL, SERVER_PORT } = require("./constant");

const app = express()

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const cors = require("cors")
app.use(cors());

const routes = require("./routes");
app.use('/task/v1', routes);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("----------Connected to the Database successfully----------");
    app.listen(SERVER_PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("----------Cannot connect to the Database----------");
  });
