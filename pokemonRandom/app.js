let plist = document.getElementById("listPokemon");

function getPokemon(id, num) {
  //For example pickachu's id is 25 so url would be: https://pokeapi.co/api/v2/pokemon/25
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function (response) {
    response.json().then(function (pokemon) {
      //console.log(pokemon.name);
      createPokemon(pokemon, num);
    });
  });
}

function getPokemons() {
  //There are more pokemon than I thought but for this purpose there are 150 pokemons in a pokedex. 
  //Randomly getting 2 ids of pokemon
  let firstId = Math.round(Math.random() * 150);
  let secondId = Math.round(Math.random() * 150);

  getPokemon(firstId, 1);
  getPokemon(secondId, 2);
}

function createPokemon(pokemon, num) {
  let item = plist.querySelector(`#pokemon-${num}`);
  let pimage = item.getElementsByTagName("img")[0];
 
  //For example, Pickachu image is https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
  //pimage.setAttribute("src", pokemon.sprites.front_default);
  //Using what instructors showed us instead of the above with setAttribute
  pimage.src = pokemon.sprites.front_default;

  let pnum = item.getElementsByTagName("p")[0];
  pnum.innerHTML = `<h1>Name: ${pokemon.name}</h1> 
                    <h2> ID: #${pokemon.id}</h2> 
                    <h3> Type: ${pokemon.types[0].type.name} ${pokemon.types[1]? ", "+pokemon.types[1].type.name : " "}<\h3>`;
  //console.log(pokemon.types);
}
