app.factory('totalSuccess', ['$http', function($http) { 
  return $http.get('http://localhost:8084/?batchStatus=SUCCESS') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);