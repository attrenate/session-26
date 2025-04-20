// 1. The Sorting Hat (Harry Potter)
const students = ['Harry', 'Ron', 'Hermione', 'Draco'];
const house = students.map((name, index) => {
    return `{index + 'Griffindor'}`;
});
console.log(house);


// 2. The Pokémon Filter

const pokemons = [{name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900}];
const highest = pokemons.filter(pokemon => pokemon.CP > 500);
console.log(highest);

// 3. Avengers Assemble (Reduce)
const Avengers = [{hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ];
const totalPower = Avengers.reduce((acc, curr) => acc + curr.budget, 0);
console.log(totalPower); // 7000


// 4. The Lost Treasure Map
const pirate = ['left', 'right', 'forward'];
const add = pirate.map(str =>  'Move ' + str);
console.log(add);

// 5. The Jedi Archives
const jedi = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin'];

const found = jedi.find(name => name === 'Yoda');

if (found) {
  console.log('Master found!');
} else {
  console.log('Master not found!');
}


// 6. The One Ring Inventory