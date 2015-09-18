var mongoose = require("mongoose");
// TODO: change name of db?
mongoose.connect("mongodb://localhost/user-db");

mongoose.set("debug", true);

module.exports.User 				= require("./user");
module.exports.Recipe 			= require("./recipe");
module.exports.Ingredient 	= require("./ingredient");
module.exports.Comment 			= require("./comment");