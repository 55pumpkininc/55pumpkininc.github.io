app.factory('genericService', ['$http', function($http) {
		var res = {};
	res.output = function (x,y) {
		switch(y) {
		  case 1:
		    return $http.get('http://localhost:5000/newspaper?url='+x)
			.success(function(data) {
				return data;
			});

		  case 2:
		    // code block
		    return $http.get('http://localhost:5000/googleSearch?entity='+x)
			.success(function(data) {
				return data;
			});

			case 3:
			return $http.get('http://localhost:5000/testservice')
			.success(function(data) {
				return data;
			});
		  default:
		    // code block
		}
	}
return res;
	}
]);	