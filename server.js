
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

// app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Allow app to handle CORS requests
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested0With,content-type, Authorization');
	next();
});






//NEW
//INDEX
//ROOT
//CREATE
apiRouter.route('/users')
.get(function (req, res) {
	db.User.find({}, function (error, response) {
		res.json(response);
	});
})
.post(function (req, res) {
	db.User.create(req.body, function (error) {
		if (error) return res.json({error:error.message});
		res.json({ message: 'User create!'});
	});
});



//SHOW
//EDIT
//DESTROY
apiRouter.route('/users/:userId')
.get(function (req, res) {
	db.User.findById(req.params.userId, function (error, user) {
		if (error) return res.json({message: "Sorry, can't find that user. You will be forever lonely...", error:error});
		res.json(user);
	});
})
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
})
.delete(function (req, res) {
	db.User.remove({_id:req.params.userId}, function (error, user) {
		if (error) return res.send(error);
		res.json({message: 'User Bleleted!'});
	});
});



app.use('/', apiRouter);

//ERROR
app.get('*', function(req,res){
  res.render('errors/404');
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});