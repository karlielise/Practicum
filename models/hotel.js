const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  currentDate: {
    required: true,
    type: Date,
  },
  depatureDate: {
    required: true,
    type: Date,
    },
    adults: {
        type: Number,
        required: true,
    },
    children: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("User", hotelSchema);