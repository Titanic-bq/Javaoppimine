//.filter()= creates new array by filtering out elements

/*let numbers = [1,2,3,4,5,6];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);

function isEven(element){
    return element % 2 ===0;
}

function isOdd(element){
    return element % 2 !== 0;
}*/

/*const ages = [16,17,18,16,60,20,18];
let overAge = ages.filter(isAdult);
let underAge = ages.filter(isChild);

console.log(overAge);

function isAdult(){
    return element  >=18;
}
function isChild(){
    return element  <=18;
}*/

const vegetables = ["carrot","cabbage","potatoe"];
let vegeShort = vegetables.filter(getShortWords);

console.log(vegeShort);

function getShortWords(element){
return element.lenght >= 6;
}