

/*const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cube = numbers.map(cube);
console.log(elements);

function square(element){
return Math.pow(element,2)
}*/

/*const students = ["a","b","c","d"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);
console.log(elements);

function upperCase(element){
    return element.toUpperCase();
}

function upperCase(element){
    return element.toLowerCase();
}*/

const dates = ["05.06.2025","06.04.2026","10.09.2027"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(elements){
    const parts = elements.split(".");
    return`${parts[1]}/${parts[2]}/${parts[0]}`;
}