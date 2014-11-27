var NewCityController = function ($scope, $stateParams) {
    //TODO6: Create new record in the database based on your new view using the city variable
    
    $scope.onSave = function(){
        alert(city.Name);
    }
};

app.controller("NewCityController", NewCityController);