var MainController = function ($scope) {

    var el = new Everlive('dWptWt003Qfq3c0i');
    var data = el.data('Cities');

    data.get().then(function (data) {
             $scope.cities = data.result;
             $scope.$apply();
        },
        function (error) {
            alert(JSON.stringify(error));
        });
};

app.controller("MainController", MainController);