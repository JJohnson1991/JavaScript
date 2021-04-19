//dates & times
const before = new Date('February 1 2019 7:30:59');
const now = new Date();
console.log(now);
console.log(typeof(now));

//year, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

//Timestamps first of January 1970 in milli seconds 
console.log('time Stamp', now.getTime());


//date string
console.log(now.toDateString());
console.log(now.toLocaleString());


///More time Spaces
