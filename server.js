var apiRouter = express.Router();

apiRouter.route('/users')
.post(function (req, res) {
	db.User.create(req.body, function (error) {
		if (error) return res.json({error:error.message});
		res.json({ message: 'User create!'});
	});
})
.get(function (req, res) {
	db.User.find({}, function (error, response) {
		res.json(response);
	});
});

app.use('/', apiRouter);