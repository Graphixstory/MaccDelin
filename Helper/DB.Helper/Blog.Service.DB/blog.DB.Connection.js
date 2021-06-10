const mongoose = require("mongoose");

const adminDB = mongoose.createConnection(
  "mongodb://localhost/MaccDelin-blog",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
module.exports = adminDB;
