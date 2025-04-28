const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  

  // Exercise 1

  console.dir(pokemon, { maxArrayLength: null })

 // Exercise 2

  console.log(game)

 // Exercise 3

  game.difficulty = "Med";

   // Exercise 4


  const starterPokemon = pokemon.find(pokemon => pokemon.starter === true);


  game.party.push(starterPokemon);

// Exercise 5

const grassTypePokemon = pokemon.find(pokemon => pokemon.type === 'grass');
const fireTypePokemon = pokemon.find(pokemon => pokemon.type === 'fire');
const waterTypePokemon = pokemon.find(pokemon => pokemon.type === 'water');


game.party.push(grassTypePokemon, fireTypePokemon, waterTypePokemon);
