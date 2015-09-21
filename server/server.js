var express 					= require('express'),
    app 							= express(),
    bodyParser 				= require('body-parser'),
    methodOverride 		= require("method-override"),
    session 					= require("cookie-session"),
    morgan 						= require("morgan"),    
    db 								= require("./models"),

    apiRouter 				= express.Router();
    // loginMiddleware 	= require("./middleware/loginHelper"),
    // routeMiddleware 	= require("./middleware/routeHelper");

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(morgan('tiny'));

var oldFolderIndex = __dirname.length - 7;
var rootDir = __dirname.slice(0,oldFolderIndex);
app.use(express.static(rootDir + '/client'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Allow app to handle CORS requests
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested0With,content-type, Authorization');
	next();
});


app.use('/api', apiRouter);
//ROOT
app.get('/', function (req, res) {
	res.render('index');
});

//INDEX
apiRouter.route('/users')
.get(function (req, res) {
	db.User.find({}, function (error, response) {
		res.json(response);
	});
}) //CREATE
.post(function (req, res) {
	db.User.create(req.body, function (error) {
		if (error) return res.json({error:error.message});
		res.json({ message: 'User created!'});
	});
});
//SHOW
apiRouter.route('/users/:userId')
.get(function (req, res) {
	db.User.findById(req.params.userId, function (error, user) {
		if (error) return res.json({message: "Sorry, can't find that user. You will be forever lonely...", error:error});
		res.json(user);
	});
}) //EDIT
.put(function (req, res) {
	db.User.findById(req.params.userId, function (error, user) {
		if (error) return res.json({message: "Sorry, can't find and change that user. You can never change", error:error});
		user.userName = req.body.userName;
		user.password = req.body.password;
		user.userImage = req.body.userImage;
		user.save(function (err) {
			if (err) res.send(err);
			res.json({message: 'User updated!'});
		});
	});
}) //DESTROY
.delete(function (req, res) {
	db.User.remove({_id:req.params.userId}, function (error, user) {
		if (error) return res.send(error);
		res.json({message: 'User Bleleted!'});
	});
});





// Recipe Routes
apiRouter.route('/recipes')
.get(function (req, res) {
	db.Recipe.find({}, function (error, response) {
		res.json(response);
	});
})
.post(function (req, res) {
	if (req.body._id) {
		db.Recipe.update(req.body._id, req.body, function (err, recipe) {
		// TODO add user auth
			res.json({message: "recipe updated!"});
		});
	} else {
		// create new recipe
		db.Recipe.create(req.body, function (err, recipe) {
			console.log("This is the saved recipe!: " + recipe);
			res.json({message: "recipe created!"});			
		});
	}
});

	// var newRecipe = {};
	// for (var i = 0; i < req.body.vessels.length; i++) {
	// 	for (var j = 0; j < req.body.vessels[i].actions.length; j++){
	// 		for (var k = 0; k < req.body.vessels[i].actions[j].ingredients.length; k++){
				// db.Ingredient.create(req.body.vessels[i].actions[j].ingredients[k], function (err, ingredient) {
					// console.log(ingredients[k]);
					// console.log(j);
					// console.log(k);
					// console.log("this is in the ingredients array " + req.body.vessels[i]);
					// req.body.vessels[i].actions[j].ingredients[k] = ingredient._id;
					// console.log(ingredient);
					// ingredient.save();
				// });
			// }
		// }
	// }
	// console.log(req.body);
	// db.Recipe.create(req.body, function (error, recipe) {
	// 	console.log(req.body);
	// 	if (error) return	res.json(error);
	// 	res.json({message: "Recipe created!"});
	// });



//ERROR
app.get('*', function(req,res){
  res.render('errors/404.ejs');
});

app.listen(3001, function(){
  console.log("Server is listening on port 3001");
});