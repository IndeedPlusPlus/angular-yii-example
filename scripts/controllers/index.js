App.controller('IndexController', function ($scope, $http) {
    $scope.contributors = [];
    $http.get('api/web/index.php?r=example/contributors').success(function (data) {
        $scope.contributors = data;
    });

});