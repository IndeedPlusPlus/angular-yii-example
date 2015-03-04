/* create the application module */
App = angular.module('example',
    [
        'ngRoute',
        'ui.bootstrap'
    ]);

/* setup routes */
App.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexController'
    });
})
;