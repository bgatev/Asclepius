/// <reference path="listPeopleController.js" />

var app = app || {};

function onSuccessShakePhone(acceleration) {
    if (acceleration.x > 2 && acceleration.y > 2 && acceleration.z > 2) {
		my_media.stop(); 
    }
}

function onError() {
    alert('Can not stop the music. Please shake your phone');
}

(function (scope) {
    if (my_media) navigator.accelerometer.getCurrentAcceleration(onSuccessShakePhone, onError);

    scope.addPerson = kendo.observable({
        name: '',
        isParty: false,
        musicType: $("#addMusicType").val(),
        save: function (ev) {


            var partyValue = this.get('isParty') == true ? "PartyGuy" : false;
            //console.log(this.musicType);
            //console.log(partyValue);

            var person = navigator.contacts.create({
                displayName: this.get('name'),
                categories: [
                  new ContactField(this.get('musicType'), this.get('musicType'), false),
                  new ContactField(partyValue, partyValue, false),
                ]
            });

            person.save();
            console.log('saved');

        }

    });

}(app))
