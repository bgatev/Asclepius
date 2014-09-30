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

            if (this.name == '' || this.name == null || this.name == undefined) {
                navigator.notification.alert("You must enter your username!");
            }
            else if (this.musicType == undefined) {
                navigator.notification.alert("You must enter your music genre preference!");
            }
            else if (this.phone == '' || this.phone == null || this.phone == undefined) {
                navigator.notification.alert("You must enter your phone number!");
            }
            else {
                var self = this;
                navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

                function onGetPositionSuccess(position) {

                    self.geoPosition = {
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude
                    };

                    var data = window.everlife.data('PartyUsers');

                    data.create({
                        Name: self.name,
                        MusicType: self.musicType,
                        Phone: self.phone,
                        Geolocation: self.geoPosition
                    }, function () {

                        window.navigator.vibrate(200);
                        $("#userMusicType").hide();
                        $("#userData").hide();
                        navigator.notification.alert('You are in the Party People Network!');

                    },
                        function (error) {
                            console.log(error);
                        }
                    );

                }

                function onGetPositionError(error) {
                    console.log(error);
                }
            }
        }
    });
}(app))

