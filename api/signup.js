const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const { body } = req;
    if (body.name && body.email && body.mobile && body.password) {
      res.status(200).send({
        message: "Succesful",
        details: "Registration Succesful"
      });
    } else throw "Missing Data";
  } catch (err) {
    res.status(500).send({
      status: "Failed",
      message: err
    });
  }
};
