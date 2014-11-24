var app = angular.module("Photos", ["ionic", "ngRoute"]);


app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller:"MainController"
    }).state('details', {
        url: "/details/:cityId",
        templateUrl: "views/details.html",
        controller: "DetailsController"
    });
    //TODO4: Register a new state called newCity, register its URL, template and Controller

    $urlRouterProvider.otherwise("/home");
});