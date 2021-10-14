function CreateAccountViewModel() {
    var self = this;

    self.firstName = ko.observable("").extend({
        validation:{
            message: "Please enter a least 2 charactes",
            validator: function(value){
                return value.length > 1
            }
        }
    });
    
    self.emailAddress = ko.observable("").extend({
        email:true
    });

    self.handleSubmit = function() {
        console.log('Form Submitted')
        var payload = {
            fistName: self.firstName()
        };
        console.log(payload);
    }
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new CreateAccountViewModel(), knockoutApp);