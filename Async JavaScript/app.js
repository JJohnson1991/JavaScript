

const getTodos =(resource, callback) =>{

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
    //fires everytime there is a state change 4 in total
        request.addEventListener('readystatechange', () =>{
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            //callback(undefined, data);//1st paramater is error data is the second parameter

            resolve(data);
        }else if(request.readyState === 4 ){
            //callback('could not fetch data', undefined);
            reject('error getting resource');
        }
    });
    //request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.open('GET',resource);
    request.send();
    });


    
};

getTodos('jordan.json').then(data => {
    console.log('Promise 1 resoloved: ', data);
    return getTodos('mario.json');
}).then((data) => {
    console.log('Promise 2 resolved:', data);
    return getTodos('luigi.json');
}).then((data) => {
    console.log('Promise 3 resolved:',data);
}).catch(error  => {
    console.log('promise rejected:', error)
});





//promise example
// const getSomething = () =>{

//     return new Promise((resolve, reject) =>{
//         //fetch something make a network requestion
//         //resolve('Some data');
//         reject('Some error');
//     });
//};

// getSomething().then((data) => {
//     console.log(data);
// }, (error) =>{
//     console.log(error);
// });

// getSomething().then( data =>{
//     console.log(data);
// }).catch(error =>{
//     console.log(error);
// });













// getTodos('luigi.json',(error, data) =>{
//     console.log(data);
//     getTodos('mario.json',(error, data) =>{
//         console.log(data);
//         getTodos('jordan.json', (error, data) => {
//             console.log(data);
//         })
//     })
   
// });


// getTodos('luigi.json',(error, data) =>{
//     console.log("call back fired");
    
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// });
