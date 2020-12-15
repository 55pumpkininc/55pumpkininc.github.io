app.factory('countSuccess', ['$http', function($http) {
		var res = {};
	res.successList = function (x) {
		return $http.get('http://localhost:5000/testservice')
		.success(function(data) {
			return data;
		});
	}
return res;
	}
]);	