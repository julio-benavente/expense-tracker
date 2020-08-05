const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ItemSchema = new Schema({
  createdAt: {
    type: Date,
    expires: "10m",
    default: Date.now,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  note: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
