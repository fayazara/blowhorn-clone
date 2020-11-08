const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const { body } = req;
    if (body.email && body.password) {
      if (body.email === "admin@test.com" && body.password === "password")
        res.status(200).send({
          message: "Succesful",
          details: "Login Succesful"
        });
      else
        res.status(500).send({
          message: "Failed",
          details: "Invalid Username or Password"
        });
    } else throw "Email or password missing";
  } catch (err) {
    res.status(500).send({
      status: "Failed",
      message: err
    });
  }
};
