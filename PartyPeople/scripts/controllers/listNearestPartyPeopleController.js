var app = app || {};

function generateOutput(data) {

    var template = kendo.template($("#partypeople-list-template").html());

    var result = template(data);

    $("#party-list-output").html(result);
}

(function (scope) {
    
    scope.partyPeopleList = function (e) {

        var currentUserMusicType = $("#userMusicType").val();

        //TODO: implement logic for non registered user

        navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

        function onGetPositionSuccess(position) {
            console.log(position.coords);
            var query = new Everlive.Query();
            query
                .where()
                    .nearSphere('Geolocation', [position.coords.longitude, position.coords.latitude], 1, 'km')
                    .eq('MusicType', currentUserMusicType);

            var data = window.everlife.data('PartyUsers');
            data.get(query)
            .then(function (data) {

                generateOutput(data);
            },
            function (error) {
                console.log(error);
            });

        }

        function onGetPositionError(error) {
            console.log(error);
        }
        
    }

}(app))
