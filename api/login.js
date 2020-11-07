const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const { body } = req;
    if (body.email && body.password) {
      if (Math.random() >= 0.5)
        res.status(200).send({
          message: "Succesful",
          details: "Login Succesful"
        });
      else
        res.status(500).send({
          message: "Failed",
          details: "Login Failed"
        });
    } else throw "Email or password missing";
  } catch (err) {
    res.status(500).send({
      status: "Failed",
      message: err
    });
  }
};
