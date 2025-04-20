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

// 