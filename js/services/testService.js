app.factory('testService', ['$http', function($http) {
		var res = {};
	res.resultList = function (batchStatus,batchlookupID,claim,requestDate,batchID) {
		if (requestDate) {
			requestDate = requestDate.toISOString().substring(0, 10);
		}
		else {
			requestDate = '';
		}
		return $http.get('http://localhost:5000/testservice')
		.success(function(data) {
			return data;
		});
	}
return res;
	}
]);	