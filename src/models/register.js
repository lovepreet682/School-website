const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String,
    required: true
  },
});

const UserAdd = new mongoose.model("details" , registerSchema);

module.exports = UserAdd;
