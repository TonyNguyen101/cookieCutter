app.filter('kebab', function () {
	return function(input){
		if (typeof(input) === "number"){
			return input;
		} else {
			return input.replace("_", "-");
		}
	};
});

app.filter('camel', function(){
	return function(input){
		if (typeof(input) === "number"){
			return input;
		} else {
			return input.replace(/(_|-)([a-z])/g, function(m){
				return m[1].toUpperCase();
			});
		}
	};
});

app.filter('redact', function () {
	return function (input, word) {
		return input.replace(word, "REDACTED");
	};
});

app.filter('chopObject', function () {
	return function (input) {
		return input.replace('object:','_');
	};
});