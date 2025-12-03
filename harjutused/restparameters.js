// spread= expands an array
//rest = bundles seperate elements
/*
function openFridge(...foods){
    console.log(foods);
}
function getfood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "ham";
const food3 = "sushi";
const food4 = "mayo";
const food5 = "strawberry";

//openFridge(food1,food2,food3,food4,food5);
const foods = getfood(food1,food2,food3,food4,food5);

console.log(foods); */

/*

const total = sum (1,2,3,4,5);

console.log(`Your total is $${total}`)*/

/*function get Average(...numbers){

    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result / numbers.lenght;
}

const total = getAvrage(75,100,85,90,50);*/

function combineStrings(...strings){
    return strings.join (" ");
}

const fullName = combineStrings("Mr.","Spongebob", "Square","111")

console.log(fullName);