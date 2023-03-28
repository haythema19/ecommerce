const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGOOSE);
    console.log("Database connection");
  } catch (error) {
    console.log("Database connection error");
  }
};

module.exports = dbConnect;