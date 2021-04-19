const getPokemon = async(id) =>{
    const base ='https://pokeapi.co/api/v2/pokemon/'
    const query =`${id}`;
    const response = await fetch(base +query);
    const data = await response.json();
    console.log(data);
    return data;
}

