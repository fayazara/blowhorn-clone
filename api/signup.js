const axios = require("axios");

const schema = {
  name: value => (value ? true : false),
  phone: value => /^[1-9][0-9]{9}/.test(value),
  email: value => /(.+)@(.+){2,}\.(.+){2,}/.test(value),
  password: value => (value.length > 6 ? true : false)
};

const validate = (body, schema) =>
  Object.keys(schema)
    .filter(key => !schema[key](object[key]))
    .map(key => new Error(`${key} is invalid.`));

module.exports = async (req, res) => {
  try {
    const { body } = req;
    const errors = validate(body, schema);
    if (errors.length > 0) {
      const abc = {
        message: "Succesful",
        details: body
      };
      res.status(200).send(abc);
    } else throw errors;
  } catch (err) {
    res.status(500).send({
      status: "Failed",
      message: err
    });
  }
};
