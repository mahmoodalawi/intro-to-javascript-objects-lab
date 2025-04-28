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
  console.log(game.difficulty);

   // Exercise 4

   let pokemonNum = 25;
   if (pokemon[pokemonNum - 1].starter === true) {
       const starterPokemon = pokemon[pokemonNum - 1];
       game.party.push(starterPokemon);
       console.log("pokemon is starter", starterPokemon);
   } else {
       console.log("Pokemon is not starter");
   }


// Exercise 5


game.party.push(pokemon[6 - 1]);
game.party.push(pokemon[9 - 1]);
game.party.push(pokemon[39 - 1]);

console.log(game.party);





// Exercise 6
  game.gyms.forEach((gym, i) => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
});
console.log(game.gyms);


// Exercise 7
game.party.splice(0, 1, pokemon[26 - 1]);
console.log(game.party);

// Exercise 8
game.party.forEach((partyObj) => {
    console.log(partyObj.name);
});

// Exercise 9
pokemon.forEach((pokemonObj) => {
    if (pokemonObj.starter === true) {
        console.log(`${pokemonObj.name} is a starter`);
    }
});

// Exercise 10

game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
};
game.catchPokemon(pokemon[44 - 1]);
console.log(game.party[game.party.length - 1]);

// Exercise 11


game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
    game.items[1].quantity = game.items[1].quantity - 1;
    console.log(
        `Pokemone caught! current amount of pokeballs in inventory: ${game.items[1].quantity}`
    );
};
game.catchPokemon(pokemon[100 - 1]);


// Exercise 12

game.gyms.forEach((gym, i) => {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
});
console.log(game.gyms);


// Exercise 13

game.gymStatus = function () {
    const gymTally = {
        completed: 0,
        incomplete: 0,
    };
    game.gyms.forEach((gymObj, i) => {
        if (gymObj.completed === true) {
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    });
    console.log(gymTally);
};
game.gymStatus();

// Exercise 14


game.partyCount = function () {
    let pokemonSum = 0;
    game.party.forEach((partyObj, i) => {
        pokemonSum++;
    });
    console.log(pokemonSum);
};
game.partyCount();
console.log(game.party);



//  Exercise 15

game.gyms.forEach((gym, i) => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
});

//  Exercise 16
console.log(game.gyms);