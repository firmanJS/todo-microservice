const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const router = require("./router");


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

router(app);

app.listen(8001, () => {
  console.log("listen port 8001");
});
