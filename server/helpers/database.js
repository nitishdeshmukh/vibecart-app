const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Failed");
      console.error(error);
      process.exit(1);
    });
};
