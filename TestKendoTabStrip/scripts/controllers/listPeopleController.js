var app = app || {};

function onSuccess(contacts) {
    var filtered = contacts;

    $("#rock-btn").click(function () {
        //clear the array
        filtered = [];

        for (var i = 0; i < contacts.length; i++) {
            //console.log(typeof (contacts[i].categories[0].type));

            if (typeof (contacts[i].categories[0].type) == 'string' || (contacts[i].categories[0].type) instanceof String
                && typeof (contacts[i].categories[1].type) == 'string' || (contacts[i].categories[1].type) instanceof String) {

                if (contacts[i].categories[0].type == "Rock" && contacts[i].categories[1].type == "PartyGuy") {

                    filtered.push(contacts[i]);
                }
            }
            else {
                continue;
            }
        }
        var template = kendo.template($("#contacts-list-template").html());

        var result = template(filtered);

        $("#contacts-output").html(result);

    })

    $("#chalga-btn").click(function () {
        //clear the array
        filtered = [];

        for (var i = 0; i < contacts.length; i++) {
            //console.log(typeof (contacts[i].categories[0].type));

            if (typeof (contacts[i].categories[0].type) == 'string' || (contacts[i].categories[0].type) instanceof String
                && typeof (contacts[i].categories[1].type) == 'string' || (contacts[i].categories[1].type) instanceof String) {

                if (contacts[i].categories[0].type == "Chalga" && contacts[i].categories[1].type == "PartyGuy") {

                    filtered.push(contacts[i]);
                }
            }
            else {
                continue;
            }
        }
        var template = kendo.template($("#contacts-list-template").html());

        var result = template(filtered);

        $("#contacts-output").html(result);

    })

    $("#retro-btn").click(function () {
        //clear the array
        filtered = [];

        for (var i = 0; i < contacts.length; i++) {
            //console.log(typeof (contacts[i].categories[0].type));

            if (typeof (contacts[i].categories[0].type) == 'string' || (contacts[i].categories[0].type) instanceof String
                && typeof (contacts[i].categories[1].type) == 'string' || (contacts[i].categories[1].type) instanceof String) {

                if (contacts[i].categories[0].type == "Retro" && contacts[i].categories[1].type == "PartyGuy") {

                    filtered.push(contacts[i]);
                }
            }
            else {
                continue;
            }
        }
        var template = kendo.template($("#contacts-list-template").html());

        var result = template(filtered);

        $("#contacts-output").html(result);

    })

    $("#dance-btn").click(function () {
        //clear the array
        filtered = [];

        for (var i = 0; i < contacts.length; i++) {
            //console.log(typeof (contacts[i].categories[0].type));

            if (typeof (contacts[i].categories[0].type) == 'string' || (contacts[i].categories[0].type) instanceof String
                && typeof (contacts[i].categories[1].type) == 'string' || (contacts[i].categories[1].type) instanceof String) {

                if (contacts[i].categories[0].type == "Dance" && contacts[i].categories[1].type == "PartyGuy") {

                    filtered.push(contacts[i]);
                }
            }
            else {
                continue;
            }
        }
        var template = kendo.template($("#contacts-list-template").html());

        var result = template(filtered);

        $("#contacts-output").html(result);

    })

    var template = kendo.template($("#contacts-list-template").html());

    var result = template(filtered);

    $("#contacts-output").html(result);
};

function onError(contactError) {
    alert('onError!');
};
(function (scope) {

    scope.contacts = function (e) {

        var options = new ContactFindOptions();
        options.multiple = true;
        var fields = [
            navigator.contacts.fieldType.displayName,
            navigator.contacts.fieldType.categories
        ];

        var vm = kendo.observable({
            name: 'Contacts',
            contacts: navigator.contacts.find(fields, onSuccess, onError, options)
        });
        
        kendo.bind(e.view.element, vm);
    }
   
}(app))