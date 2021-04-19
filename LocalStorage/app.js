const todos = [
    {text: 'play marioKart', author: 'Jordan'},
    {text: 'Buy some milk', author: 'Mario'},
    {text: 'play some bread', author: 'Jordan'},
];
//transforming javaScript Objects into a JSON String
//console.log(JSON.stringify(todos));
localStorage.setItem('todos',JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));