var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cookie_cutter-db");

mongoose.set("debug", true);

module.exports.User = require("./user");