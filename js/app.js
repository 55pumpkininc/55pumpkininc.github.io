	var app = angular.module("myApp", ['chart.js', 'angularUtils.directives.dirPagination', 'zingchart-angularjs']);
	app.filter('html', ['$sce', function ($sce) { 
    return function (text) {
        return $sce.trustAsHtml(text);
    };    
}])
//var charting = angular.module("myModule", ['chart.js']);