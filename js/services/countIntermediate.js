app.factory('countIntermediate', ['$http', function($http) {
		var res = {};
	res.intermediateList = function (x) {
		return $http.get('http://localhost:5000/testservice')
		.success(function(data) {
			return data;
		});
	}
return res;
	}
]);	