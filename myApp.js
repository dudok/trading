var app = angular.module('exchangeInfo', []);

app.controller('checkboxCtrl', function($scope) {
    
    $scope.exchanges = ccxt.exchanges;
    $scope.selection = ['coinmarketcap'];
    $scope.toggleSelection = function toggleSelection(exchange) {
        // Toggle selection for a given exchange
        var i = $scope.selection.indexOf(exchange);
        // Is currently selected
        if (i > -1) {
            $scope.selection.splice(i, 1);
        }
        // Is newly selected
        else {
            $scope.selection.push(exchange);
        }
    };
});
    


