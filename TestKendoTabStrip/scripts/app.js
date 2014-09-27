
(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    // create an object to store the models for each view
    window.APP = {
      models: {
        home: {
          title: 'Home'
        },
        settings: {
          title: 'Settings'
        },
        contacts: {
          title: 'Contacts',
          ds: new kendo.data.DataSource({
            data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
          }),
          alert: function(e) {
            alert(e.data.name);
          }
        }
      }
    };

    function onFindConctactsSuccess(contacts) {
        //filter contacts
        console.dir(contacts);
    }

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {


       

        window.contacts = [];
        navigator.splashscreen.hide();


        
        app = new kendo.mobile.Application(document.body, {
        
        // you can change the default transition (slide, zoom or fade)
        transition: 'fade',
        
        // the application needs to know which view to load first
        initial: 'views/home.html'
        });
        var map = new GoogleMap();
        map.initialize();
      

    }, false);


}());