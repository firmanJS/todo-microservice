const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config");
const User = require("./model/User");
const router = require("./router");

const app = express();

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true
});

app.use(bodyParser.json());

app.use(morgan("dev"));

router(app, { User });

app.listen(config.PORT || 8003, () => {
  console.log(`users-services listen port ${config.PORT || 8003}`);
});
