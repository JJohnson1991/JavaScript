function CounterViewModel(){
    var self = this;

    //takes its intial state
    self.firstName = ko.observable("Jordan");

    self.count = ko.observable(0);
    //update observerables
    // self.firstName("George");
    // self.firstName() // George

    self.increase = function(){
        //console.log("Method called");
        let currentValue = self.count();
        //setting the value
        self.count(currentValue + 1);
        
    }
    self.decrease = function(){
        let currentValue = self.count();
        //setting the value
        if(currentValue > 0){
            self.count(currentValue - 1);
        }
       
    }

    //
    self.dogStatus = ko.computed(function(){
        if(self.count() === 1){
            return 'UNDERWHELMED.';
        }
        if(self.count() === 2){
            return 'LISTENING...';
        }
        if(self.count() >= 3){
            return 'EXCITED!!';
        }
        return "UPSET";
    });

}
const knockAppID = document.querySelector('#knockout-app');
//window leveled called ko
ko.applyBindings(new CounterViewModel(), knockAppID);