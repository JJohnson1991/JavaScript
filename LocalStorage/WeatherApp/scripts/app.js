const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) =>{
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;


    //Destructure properties (must be the same name as the objects)
    const {cityDetails, weather} = data;



    //update details template (name, weather, temperture)
    details.innerHTML = `
    
        <h5 class="my-3">${cityDetails.EnglishName}, ${cityDetails.Country.LocalizedName}</h5>
        <div class="my-3">${weather.WeatherText} </div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
        </div>
    `

    //update the night/day and Icon Images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);




    let timeScr = weather.IsDayTime ? 'img/day.svg': 'img/night.svg';
    // if(weather.IsDayTime){
    //     timeScr = 'img/day.svg';
    // }else{
    //     timeScr ='img/night.svg';
    // }
    time.setAttribute('src', timeScr);
    




    //remove the d-none class is present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) =>{

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return{
        cityDetails: cityDetails,
        weather: weather
    };
    //Object short hand notation
    //return city { Details, weather};
};




cityForm.addEventListener('submit', e => {
    //prevent default action that is page refresh
    e.preventDefault();


    //get city value
    //the name city comes from the name on the input field 
    const city = cityForm.city.value.trim();
    cityForm.reset();


    //update the UI with new City 
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


    //set local storage 
    localStorage.setItem('city', city);
});

//get item returns a string
//a string with any value is truthy 
if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then( data => {
        updateUI(data);
    }).catch(err => console.log(err))
}

