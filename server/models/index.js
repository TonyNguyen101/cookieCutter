var mongoose = require("mongoose");
// TODO: change name of db?
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/user-db");

mongoose.set("debug", true);

module.exports.User 				= require("./user");
module.exports.Recipe 			= require("./recipe");
module.exports.Comment 			= require("./comment");
// module.exports.Ingredient 	= require("./ingredient");