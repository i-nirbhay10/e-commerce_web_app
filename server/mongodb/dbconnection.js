const mongoose = require("mongoose");

const dbconnection = async () => {
  const uri =
    "mongodb+srv://nirbhayverma899:shivamverma@cluster0.djsqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Database is connected now");
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error);
    });
};

module.exports = dbconnection;
