var app = angular.module("Photos", ["ionic","ngRoute"]);

var MainController = function ($scope) 
{
    $scope.cities = [
      {  
          "IsCapital":true,
          "Name":"Sofia",
          "Population":2000000
      },
      {  
          "IsCapital":false,
          "Name":"Blagoevgrad",
          "Population":80000
      },
      {  
          "IsCapital":false,
          "Name":"Varna",
          "Population":600000
      },
      {  
          "IsCapital":false,
          "Name":"Plovdiv",
          "Population":350000
      }
    ];
}