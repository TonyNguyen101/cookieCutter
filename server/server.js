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

//ROOT
app.get('/', function (req, res) {
	// console.log("this is the __dirname " + __dirname);
	// console.log('this is the rootDir ' + rootDir);
	res.sendFile(rootDir + '/server/views/index.html');
	// res.render('index');
});

app.use('/api', apiRouter);
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
//Index
.get(function (req, res) {
	db.Recipe.find({}, function (error, response) {
		// need error handling
		res.json(response);
	});
})
.post(function (req, res) {
	// Update a recipe
	if (req.body._id) {
		var findThisId = req.body._id;
		delete req.body._id;
		db.Recipe.update({_id: findThisId}, req.body, function (err, recipe) {
		// TODO add user auth
			if (err) {
				res.status(404);
				res.send(err);
			} else {
				res.json({message: "recipe updated!"});
			}
		});
	} else {
		// Create new recipe
		db.Recipe.create(req.body, function (err, recipe) {
			// console.log("This is the saved recipe!: " + recipe);
			res.json({message: "recipe created!", _id: recipe._id});			
		});
	}
});

//Show
apiRouter.route('/recipe/:recipeId')
.get(function (req, res) {
	db.Recipe.findById(req.params.recipeId, function (error, response) {
		res.json(response);
	});
}) //Delete Recipe
.delete(function (req, res) {
	db.Recipe.remove({_id:req.params.recipeId}, function (error, recipe) {
		if (error) return res.send(error);
		res.json({message: 'Recipe Bleleted!'});
	});
});

//ERROR
app.get('*', function(req,res){
  res.sendFile(rootDir + '/server/views/errors/404.ejs');
  // res.render('errors/404.ejs');
});

app.listen(process.env.PORT || 3001, function(){
  console.log("Server is listening on port 3001");
});