const axios = require("axios");

const { userConfig } = require("../config");

module.exports = {
  async initialize(req, res) {
    try {
      const response = await axios.get(`${userConfig.URL}/api`);
      console.log(response.data);
      return res.send({
        data: response.data
      });
    } catch (err) {
      return res.send({
        err
      });
    }
  },
  async create(req, res) {
    const { user } = req.body;
    try {
      const response = await axios.post(`${userConfig.URL}/api/users/create`, {
        user
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data);
      return res.send({
        data: response.data
      });
    } catch (err) {
      return res.send({
        err
      });
    }
  },
  async find(req, res) {
    try {
      const response = await axios.get(`${userConfig.URL}/api/users/find`);
      console.log(response.data);
      return res.send({
        data: response.data
      });
    } catch (err) {
      return res.send({
        err
      });
    }
  }
};
