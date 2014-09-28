var app = app || {};


(function (scope) {

    scope.addPerson = kendo.observable({
        name: '',
        isParty: false,
        musicType: $("#addMusicType").val(),
        save: function (ev) {


            var partyValue = this.get('isParty') == true ? "PartyGuy" : "kkk";
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
