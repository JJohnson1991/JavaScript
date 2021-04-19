//store dat in local storage
localStorage.setItem('name','mario');
localStorage.setItem('age',50)


//get data in local storage
var name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);


//update data in local storage
localStorage.setItem('name', 'Luigi');
localStorage.age = '40';// can use dot notation




name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);


//delete data from local storage
// localStorage.removeItem('name');
// name = localStorage.getItem('name');
// console.log(name); //should be null

// //clears out all of local storage
// localStorage.clear(); 