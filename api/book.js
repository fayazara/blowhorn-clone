const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const { body } = req;
    if (body.city && body.pickup && body.drop) {
      const { data } = await axios.post(
        "https://jsonbox.io/box_bcbed7702974818a29b3",
        body
      );
      res.status(200).send({
        message: "Succesful",
        details: "Your truck is booked"
      });
    } else throw "Missing Data";
  } catch (err) {
    res.status(500).send({
      status: "Failed",
      message: err
    });
  }
};
