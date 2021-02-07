let plist = document.getElementById("listPokemon");

function getPokemon(id, num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function (response) {
    response.json().then(function (pokemon) {
      //console.log(pokemon.name);
      createPokemon(pokemon, num);
    });
  });
}

function getPokemons() {
  let firstId = Math.round(Math.random() * 150);
  let secondId = Math.round(Math.random() * 150);

  getPokemon(firstId, 1);
  getPokemon(secondId, 2);
}

function createPokemon(pokemon, num) {
  let item = plist.querySelector(`#pokemon-${num}`);
  let pimage = item.getElementsByTagName("img")[0];
  pimage.setAttribute("src", pokemon.sprites.front_default);

  let pnum = item.getElementsByTagName("p")[0];
  pnum.innerHTML = `<h1>Name: ${pokemon.name}</h1> <h2> ID: #${pokemon.id}</h2> <h3> Type: ${pokemon.types[0].type.name} ${pokemon.types[1]? ", "+pokemon.types[1].type.name : " "}<\h3>`;
  console.log(pokemon.types[0].type.name);
}
