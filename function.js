// function - a section of reusable code

const { isValidElement } = require("react");

/*function test(username,age){
    console.log("test");
    console.log("test");
    console.log(`test ${username}`);
    console.log(`test ${age}`)
}
test("Hendrik",25);*/

function add(x,y){
    let result = x + y;
    return result;
}

console.log(add(2,3))

function add(x,y){
    let result = x - y;
    return result;
}

console.log(add(2,3))

function add(x,y){
    let result = x * y;
    return result;
}

console.log(add(2,3))

function add(x,y){
    let result = x / y;
    return result;
}

console.log(add(2,3))

function iseven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
    return email.includes("@") ? true : false;
}