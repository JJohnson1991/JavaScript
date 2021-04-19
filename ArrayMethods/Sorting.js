//sort
const names = ['mario','shaun', 'chun-li', 'yoshi', 'luigi'];

//names.sort();
names.reverse();
console.log(names);


//sorting numbers
const scores = [10,50,20,5,35,70,45];








//sorting objects
const players = [
    {name: 'mario', score:20},
    {name: 'luigi', score:10},
    {name: 'chun-li', score:50},
    {name: 'yoshi', score:30},
    {name: 'shaun', score:70}

];

players.sort((a,b)=>{
    return b.score - a.score;
})
console.log(players);