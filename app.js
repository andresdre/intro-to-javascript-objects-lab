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
    // Exercise 3
    difficulty: ['Easy', 'Medium', 'Hard'],
  }
 
// Exercise 1
// console.dir(pokemon, { maxArrayLength: null })
console.log(pokemon[59])

// Exercise 2
//console.log(game)

// Exercise 4
let starterPokemon = pokemon.find(p => p.starter === true);
game.party.push(starterPokemon)
console.log('Game Party', game.party)

// Exercise 5
const attributePokemon = [
  pokemon.find(p => p.type === 'fire'),
  pokemon.find(p => p.hp === 20),
  pokemon.find(p => p.number === 36),
];

game.party.push(attributePokemon)
console.log('Game Party', game.party)

// Exercise 6
// let gyms = game.gyms;

// gyms.forEach(gym => {
//   if (gym.difficulty <= 3){
//   gym.completed = true;
//   }
// })

console.log(game)

// Exercise 7
function evolvePokemon(pokemonList) {
  pokemonList.forEach(pkmn => {
    if (pkmn.level >= 16 && pkmn.evolvesTo && pkmn.name !== pkmn.evolvesTo){
      console.log(`${pkmn.name} has evolved into ${pkmn.evolvesTo}`);
      pkmn.name = pkmn.evolvesTo;
      pkmn.hp += 20;
      pkmn.level = 36;
    }
  });
}

evolvePokemon(pokemon);

console.log(pokemon)

// Exercise 8
function printName(pokemon){
  for (let i = 0; i < pokemon.length; i++){
    console.log(pokemon[i].name)
  }
}

printName(pokemon)

// Exercise 9
const printStarterPokemon = () => {
  pokemon.forEach(pkmn => {
    if (pkmn.starter) {
      console.log(pkmn.name);
    }
  });
}

printStarterPokemon();

//Exercise 10
game.catchPokemon = function(pokemonObj){
  this.party.push(pokemonObj);
}
game.catchPokemon(pokemon[0]);

console.log(game.party)

// Exercise 11
game.catchPokemon = function(pokemonObj) {
  const pokeballItem = game.items("pokeball"); 
  
  if (pokeballItem && pokeballItem.quantity > 0) { 
    game.party.push(pokemonObj); 
    pokeballItem.quantity--;
    console.log(`${pokemonObj.name} has been caught! Remaining pokeballs: ${pokeballItem.quantity}`);
  } else {
    console.log("No pokeballs left to catch Pokémon!");
  }
};

game.catchPokemon(pokemon[0]);

console.log(game.party);
console.log(item.items); 

//Exercise 12
let gyms = game.gyms;

gyms.forEach(gym => {
  if (gym.difficulty <= 6){
  gym.completed = true;
  }
})

console.log(game)

//Exercise 13
function gymStatus() {
  const gymTally = {
    completed: 0,
    incomplete: 0
  };

  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });

  console.log(gymTally);
};


game.gymStatus();

//Exercise 14
function partyCount(){
  return this.party.length;
}
console.log(game.partyCount());
