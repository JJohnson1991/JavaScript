const key = 'J0VvAMgA4dNcvtIAbiDXDCAPHG3RKvHd'; //change me lolol

//get weather information 
const getWeather = async (id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);

    const data = await response.json();
    return data[0];
}


//async function returns a promise
//get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query =`?apikey=${key}&q=${city}`;

    //fetch returns a promise
    const response = await fetch(base + query);

    //Json method returns a promise
    const data = await response.json();

    return data[0];
}


//because this returns a promise we can use the .then method
