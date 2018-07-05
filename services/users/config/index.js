const dev = require("./dev");
const prod = require("./prod");

/*
Check the environment of the current
runtime moment wether is it production or development
*/

const env = process.env.NODE_ENV;

if (env === "production") {
  module.exports = prod;
} else {
  module.exports = dev;
}
