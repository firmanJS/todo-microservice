
module.exports = (app, { Post }) => {
  app.get("/api", (req, res) => {
    res.send({
      module: "posts-services"
    });
  });
};
