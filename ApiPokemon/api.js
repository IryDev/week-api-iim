// pokeapi fetch demo
// https://pokeapi.co/api/v2/pokemon/1/
// https://pokeapi.co/api/v2/pokemon/1/ - GET

// fetch("https://pokeapi.co/api/v2/pokemon/charizard/")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const data = await response.json();
    return data;
};

displayPokemon = async (pokemonName) => {
    const pokemon = await fetchPokemon(pokemonName);
    // display info pokemon in html
    console.log(pokemon);

    // display info in html
    const name = document.getElementById("name");
    const img = document.getElementById("img");
    const type = document.getElementById("type");
    const abilities = document.getElementById("abilities");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    name.innerHTML = pokemon.name;
    img.src = pokemon.sprites.front_default;
    type.innerHTML = pokemon.types[0].type.name;
    abilities.innerHTML = pokemon.abilities[0].ability.name;
    weight.innerHTML = pokemon.weight;
    height.innerHTML = pokemon.height;

    // img.src = pokemon.sprites.front_default;
};

displayPokemon("charizard");
