const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  message: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feed", feedSchema);