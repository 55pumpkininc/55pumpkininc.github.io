app.factory('googleService', ['$http', function($http) {
		var res = {};
	res.linksList = function (x) {
		return $http.get('http://localhost:5000/googleSearch?entity='+x)
		.success(function(data) {
			return data;
		});
	}
return res;
	}
]);	