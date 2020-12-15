app.factory('countFailure', ['$http', function($http) {
		var res = {};
	res.failureList = function (x) {
		return $http.get('http://localhost:5000/testservice')
		.success(function(data) {
			return data;
		});
	}
return res;
	}
]);	