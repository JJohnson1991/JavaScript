function InventoryViewModel() {
    let self = this;
    var iconsTypes = [
        {icon: "icon-bone", text: "Bone"},
        {icon: "icon-ball", text: "Ball"},
        {icon: "icon-circle", text: "Circle"},
        {icon: "icon-rabbit", text: "Rabbit"},
    ]

    self.inventory = ko.observableArray([
        
    ]);

    self.addItem = function() {
        var index = Math.floor(Math.random() * iconsTypes.length);
        //this is an obserable array we can use .push to update the array

        self.inventory.push(iconsTypes[index]);//does not re-render whole list
    }
    self.removeItem = function(data, event){
        var itemToRemove = event.target.getAttribute('item-index');//grabs an attribute from element on html ()
        self.inventory.splice(itemToRemove, 1); //removing only one item 

    }
};



const knockoutApp = document.querySelector('#knockout-app');
ko.applyBindings(new InventoryViewModel(), knockoutApp);
