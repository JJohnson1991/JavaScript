const pokeForm = document.querySelector('form');
const pokeDetails = document.querySelector('.pokeDetails');
const card = document.querySelector('.card');
const updateUI = (pokemon) =>{

    pokeDetails.innerHTML =`
    <h5>${pokemon.name}</h5>
    <img class="pokemon" src="${pokemon.sprites.other.dream_world.front_default}" alt="">
    `
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}


//add event listenr to from

pokeForm.addEventListener('submit', e => {
    e.preventDefault();
    const pokemonNumber = pokeForm.pokemonNumber.value.trim();
    pokeForm.reset();

    getPokemon(pokemonNumber)
    .then(pokemon => updateUI(pokemon))
    .catch(error => console.log('Could not find pokemon',error))
})