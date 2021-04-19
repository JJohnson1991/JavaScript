
//find Method 
//returns the value of the first element inside an array 
//that passes a certain test in a call back functions

const scores = [10,5,0,40,60,10,20,70];


const FirstHighScore = scores.find((score) => {
    return  score > 50;
});
//one line
//const FirstHighScore = scores.find( score => score > 50);

console.log(FirstHighScore); //should return 60