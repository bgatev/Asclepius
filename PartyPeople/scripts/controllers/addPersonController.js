/// <reference path="listPeopleController.js" />

var app = app || {};

function onSuccessHandShake(acceleration) {
    if (acceleration.x > 2 && acceleration.y > 2 && acceleration.z > 2) {
        if (my_media) my_media.stop(); 
    }
}

function onErrorHandShake() {
    alert('Can not stop the music. Please shake your phone');
}

(function (scope) {
    //navigator.accelerometer.getCurrentAcceleration(onSuccessHandShake, onErrorHandShake);

    scope.addPerson = kendo.observable({
        name: '',
        isParty: false,
        musicType: $("#addMusicType").val(),
        phone: '',
        save: function (ev) {
            
            if (this.musicType == undefined) {
                navigator.notification.alert("You must choose the contacts' music genre preference!")
            }
            else if (this.name == '' || this.name == null || this.name == undefined) {
                navigator.notification.alert("You must enter the contact\s name");
            }
            else {
                var partyValue = this.get('isParty') == true ? "PartyGuy" : false;
                //console.log(this.musicType);
                //console.log(partyValue);
                var phones = [];
               // phones[0] = new ContactField('work', this.get('phone'), false);
                phones[0] = new ContactField('work', '111-222-3333', false);

                var person = navigator.contacts.create({
                    displayName: this.get('name'),
                    categories: [
                      new ContactField(this.get('musicType'), this.get('musicType'), false),
                      new ContactField(partyValue, partyValue, false),
                    ],
                    phoneNumbers: phones
                });
                document.getElementById('addusername').innerHTML = "";
                //$("#addusername").html(" ");
                this.set('name', '');
                this.set('musicType', 'false');
                this.set('isParty', 'checked:false');
                this.set('phone', '');
                person.save();
                console.log('saved');
            }
        }

    });
    
}(app))
