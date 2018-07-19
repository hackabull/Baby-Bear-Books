const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  reader: { type: String, required: true }
});

const User = mongoose.model("user", userSchema);

module.exports = User;