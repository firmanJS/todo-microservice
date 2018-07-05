const {
  UserController

} = require("../controller");


module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send({
      module: "server"
    });
  });

  app.get("/users", UserController.initialize);

  app.post("/users/create", UserController.create);

  app.get("/users/find", UserController.find);
};
