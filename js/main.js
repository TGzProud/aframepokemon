window.onload = () => {

  const resetPokemon = document.getElementById('js--box');
  const pokemonPictureOne = document.getElementById('js--pokemon-picture-one');
  const pokemonTextOne = document.getElementById('js--pokemon-text-one');
  const pokemonPictureTwo = document.getElementById('js--pokemon-picture-two');
  const pokemonTextTwo = document.getElementById('js--pokemon-text-two');
  const pokemonPictureThree = document.getElementById('js--pokemon-picture-three');
  const pokemonTextThree = document.getElementById('js--pokemon-text-three');

  resetPokemon.onmouseenter = (event) => {
    setRandomPokemon();
  }

  function setRandomPokemon() {
    let randomPokemonNumber = Math.floor(Math.random() * 151 + 1);
    let randomPokemonNumberTwo = Math.floor(Math.random() * 151 + 1);
    let randomPokemonNumberThree = Math.floor(Math.random() * 151 + 1);
    getPokemon(randomPokemonNumber);
    getPokemonTwo(randomPokemonNumberTwo);
    getPokemonThree(randomPokemonNumberThree);
    resetPokemon.setAttribute('color', 'red');
  }

  resetPokemon.onmouseleave = (event) => {
    resetPokemon.setAttribute('color', 'green');
  }

  const getPokemon = (numberOfPokemon) => {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(BASE_URL + numberOfPokemon)
    .then( (data) => {
      return data.json();
    })
    .then( (response) => {
      pokemonPictureOne.setAttribute('src', response.sprites.front_default);
      pokemonTextOne.setAttribute('value', response.name);
    });
  }

  const getPokemonTwo = (numberOfPokemon) => {
    console.log(numberOfPokemon);
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(BASE_URL + numberOfPokemon)
    .then( (data) => {
      return data.json();
    })
    .then( (response) => {
      pokemonPictureTwo.setAttribute('src', response.sprites.front_default);
      pokemonTextTwo.setAttribute('value', response.name);
    });
  }

  const getPokemonThree = (numberOfPokemon) => {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(BASE_URL + numberOfPokemon)
    .then( (data) => {
      return data.json();
    })
    .then( (response) => {
      pokemonPictureThree.setAttribute('src', response.sprites.front_default);
      pokemonTextThree.setAttribute('value', response.name);
    });
  }

}
