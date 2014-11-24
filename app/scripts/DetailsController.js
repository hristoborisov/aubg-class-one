var DetailsController = function ($scope, $stateParams) {
    var cityId = $stateParams.cityId;

    var el = new Everlive('dWptWt003Qfq3c0i');
    var query = new Everlive.Query();

    //TODO1: Filter this query using the ID, so that you return only the result you need
    query.expand({ "Picture": true });

    var data = el.data('Cities');
    data.get(query)
        .then(function (data) {
            //TODO2: Bind the result of this function to a variable and display it in details.html
        },
        function (error) {
            alert(JSON.stringify(error));
        });
};

app.controller("DetailsController", DetailsController);