
//Async and await
//Async function always returns a promise
//ANY FUNCTION with async infront of it returns a promise
const getTodos = async () => {

  const response = await fetch('luigdi.json');

  if(response.status !== 200){
      throw new Error('Cannnot fetch the data');
  }
  //.json method returns a promise
  const data = await response.json();
  return data;

};
console.log(1);
console.log(2);
getTodos()
     .then(data => console.log('resolved', data))
     .catch(error => console.log('rejected', error, error.message)); //can also do error.message


console.log(3);
console.log(4);


//fetch


// fetch('luigi.json').then( (response)=> {
    
//     console.log('resolved', response);
//     //returns a promise
//     return response.json(); 
// }).then((data) =>{//allows us to add a then 
//     console.log(data);
// }).catch((error) => {
//     console.log('rejeced', error);
// });


