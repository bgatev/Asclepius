var app = app || {};


(function (scope) {

    scope.partyPeopleList = function (e) {
        var options = new ContactFindOptions();
        options.multiple = true;

        var fields = [
            "Name",
            "Phone"
        ];

        var query = new Everlive.Query();
        query
            .where()
                .nearSphere('Location', [23.379068, 42.650601], 5, 'km')
                .eq('Author', 'Some text');

        var vm = kendo.observable({
            name: 'PartyPeople',
            contacts: navigator.contacts.find(fields, onSuccess, onError, options)
        });

        kendo.bind(e.view.element, vm);
    }

}(app))
