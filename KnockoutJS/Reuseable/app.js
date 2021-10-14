function ItemsListViewModel() {
    var self = this;
 
    self.items = ko.observableArray([
       //Starts empty...
       //"Example Item 1", "Example Item 2"
    ]);

    self.fetchItems = function() {
        console.log("fetch items");
    }
    
 }
 
 ko.components.register("loading-button",{
    //  template: '<button> <span></button>'
    template:[
        '<button  data-bind="click: onClick" class=LoadingButton>',
            '<span data-bind="text: buttonText">Get Items </span>',
        '</button>'

    ].join(''),
    viewModel: function(params){
        var self = this;
        self.buttonText = ko.observable(params.buttonText)

        self.onClick = function(){
            params.action();
        }
    }

 });

 const knockoutApp = document.querySelector("#knockout-app");
 ko.applyBindings(new ItemsListViewModel(), knockoutApp);
 
 