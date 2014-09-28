var app = app || {};


(function (scope) {
    
    scope.addPerson = kendo.observable({
        name: '',
        isParty: false,
        musicType: '',
        save: function (ev) {
           
            console.log(this.musicType);
            var partyValue = this.get('isParty') == true ? "PartyGuy" : "kkk";
            console.log(partyValue);

            var person = navigator.contacts.create({
                displayName: this.get('name'),
                
                categories: [
                  new ContactField(this.get('musicType'), this.get('musicType'), false),
                  new ContactField(partyValue, partyValue, false),
                ]
            });
            person.save();

            console.log('saved');
            kendo.bind($("select"), addPerson);
        }

    });
    
}(app))
