var app = angular.module("Photos", ["ionic","ngRoute"]);

var MainController = function ($scope) 
{
    $scope.cities = [
      {  
          "IsCapital":true,
          "Name":"Sofia",
          "Population":2000000,
          "Picture":"2e17b340-702a-11e4-8370-5f09c71bb06c",
      },
      {  
          "IsCapital":false,
          "Name":"Blagoevgrad",
          "Population":80000,
          "Picture":"3c847ad0-702a-11e4-b64a-9d49c8a901f0",
      },
      {  
          "IsCapital":false,
          "Name":"Varna",
          "Population":600000,
          "Picture":"45f8fb40-702a-11e4-b1e7-3f849ce065bb",
      },
      {  
          "IsCapital":false,
          "Name":"Plovdiv",
          "Population":350000,
          "Picture":"4f20bb40-702a-11e4-b1e7-3f849ce065bb",
      }
    ];
}