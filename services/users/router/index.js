
module.exports = (app, { User }) => {
  app.get("/api", (req, res) => {
    res.send({
      module: "users-services"
    });
  });
  app.post("/api/users/create", async (req, res) => {
    const { user } = req.body;
    const newUser = await new User(user).save();

    res.send({
      data: {
        user: newUser
      },
      module: "users-create"
    });
  });
  app.get("/api/users/find", async (req, res) => {
    const theUser = await User.find();
    res.send({
      data: {
        user: theUser
      },
      module: "users-find"
    });
  });
};
