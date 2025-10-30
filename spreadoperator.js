


let numbers = [1,2,3,4,5]; //
let maximum = Math.max(...numbers); //...numbers võtab sulud ära 1...5
let minimum = Math.min(...numbers); //töötab ühtemoodi
console.log(maximum); //Näitab maksimaalselt tulemust
console.log(minimum);

let username = "Hendrik";
let letters = [...username].join("-"); // join paneb kokku

console.log(letters);

let fruits = ["apple","banana","orange"];
let vegetables = ["carrot","cabbage","potatoe"]
let foods = [...fruits, ...vegetables, "eggs","milk"]; //Liidab kokku fruits, vegetables, lisaks eggs ja milk

console.log(foods);