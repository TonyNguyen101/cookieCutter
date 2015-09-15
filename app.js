var express 					= require('express'),
    app 							= express(),
    bodyParser 				= require('body-parser'),
    methodOverride 		= require("method-override"),
    session 					= require("cookie-session"),
    morgan 						= require("morgan"),
    db 								= require("./models");
    // loginMiddleware 	= require("./middleware/loginHelper"),
    // routeMiddleware 	= require("./middleware/routeHelper");

app.set('view engine', 'ejs');
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




//ROOT
//INDEX
//NEW
//CREATE
//SHOW
//EDIT
//UPDATE
//DESTROY

//ERROR
app.get('*', function(req,res){
  res.render('errors/404');
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});