const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const config = require("./config");
const Post = require("./model/Post");
const router = require("./router");

const app = express();

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true
});

app.use(morgan("dev"));

router(app, { Post });

app.listen(config.PORT || 8005, () => {
  console.log(`users-services listen port ${config.PORT || 8005}`);
});
