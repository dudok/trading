var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("https://api.coinmarketcap.com/v1/ticker/?limit=100")
        .then(function mySuccess(response) {
        $scope.data = response.data;
    }, function myError(response) {
        $scope.error = response.error;
    });
});

