app.factory('ticketInfo', ['$http', function($http) {
		var res = {};
	res.resultList = function (status,ticketID,batchID) {
		return $http.get('http://localhost:5000/testservice')
		.success(function(data) {
			return data;
		});
	}
return res;
	}
]);