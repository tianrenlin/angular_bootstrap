angular.module('app', ['ngRoute'])
// .controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
.config( function ($routeProvider,$locationProvider) {
   
    $routeProvider.
    when('/', {
        templateUrl: 'html/index.html'
        // controller: 'HomeController'
    }).
    when('/one', {
        templateUrl: 'html/one.html'
    }).
    when('/two', {
        templateUrl: 'html/two.html'
    }).
    when('/three', {
        templateUrl: 'html/three.html'
    }).
    when('/four', {
        templateUrl: 'html/four.html'
    }).
    when('/five', {
        templateUrl: 'html/five.html'
    }).
    otherwise({
        redirectTo: '/' //重定向回到首页 
    });
});




 
  



