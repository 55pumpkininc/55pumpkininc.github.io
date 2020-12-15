app.factory('articleService', ['$http', function($http) {
		var res = {};
	res.articleList = function (x) {
		return $http.get('http://localhost:5000/newspaper?url='+x)
		.success(function(data) {
			return data;
		});
	}
return res;
	}
]);	