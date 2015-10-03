app.filter('chopObject', function () {
	return function (input) {
		return input.replace('object:','');
	};
});