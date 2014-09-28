var app = app || {};

function onSuccess(contacts) {

    alert(contacts.length);
    $('#contacts-output').html("<strong>" + contacts.length + "</strong> contacts returned.");
    for (var i = 0; i < contacts.length ; i++) {
        
            $('#contacts-output').append("<br/>Contact " + (i + 1) + " is <strong>" +
                    contacts[i].displayName + "</strong>");
            
        
    }
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