//function GoogleMap() {

//    this.initialize = function () {
//        var map = showMap();
//        addMarkersToMap(map);
//        google.maps.event.trigger(map, 'resize');
//    }

//    var addMarkersToMap = function (map) {


//        var mapBounds = new google.maps.LatLngBounds();

//        var latitudeAndLongitudeOne = new google.maps.LatLng('-2.890542', '15.274856');

//        var markerOne = new google.maps.Marker({
//            position: latitudeAndLongitudeOne,
//            map: map
//        });

//        var latitudeAndLongitudeTwo = new google.maps.LatLng('57.77828', '14.17200');

//        var markerOne = new google.maps.Marker({
//            position: latitudeAndLongitudeTwo,
//            map: map
//        });

//        mapBounds.extend(latitudeAndLongitudeOne);
//        mapBounds.extend(latitudeAndLongitudeTwo);

//        map.fitBounds(mapBounds);
//    }



//    var showMap = function () {
//        var mapOptions = {
//            mapTypeId: google.maps.MapTypeId.ROADMAP,
//            scale: 0.2,
//            size: "10x50"
//        }

//        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//        return map;
//    }
//}

var app = app || {};

(function (scope) {

    scope.login = kendo.observable({
        name: '',
        musicType: $("#userMusicType").val(),
        geoPosition: '',
        phone: '',
        login: function (ev) {

            navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

            function onGetPositionSuccess(position) {
                
                this.geoPosition = new Object ({
                    longitude: position.coords.longitude,
                    latitude:position.coords.latitude
                });

                
                
            }

            function onGetPositionError(error) {
                console.log(error);
            }

            var data = window.everlife.data('PartyUsers');
            console.log(JSON.stringify(this.geoPosition));

            //data.create({
            //    Name: this.name,
            //    MusicType: this.musicType,
            //    Phone: this.phone,
            //    Geolocation: this.geoPosition
            //}, function () {

            //    window.navigator.vibrate(200);
                
            //    alert('You are in the Party People Network!');
            //    window.location.replace("views/nearestPartyPeople.html");
            //},
            //    function (error) {
            //        console.log(error);
            //    }
            //);
        }


    });
}(app))

