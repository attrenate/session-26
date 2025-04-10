// 1. The Sorting Hat (Harry Potter)
const students = ['Harry', 'Ron', 'Hermione', 'Draco'];
const house = students.map((name, index) => {
    return `{index + 'Griffindor'}`;
});
console.log(house);