// function expressions = a way to define functions as values or variables

/*const hello = function(){
    console.log("Hello");
}

hello();*/



/*setTimeout(function(){
    console.log("Hello");
},3000);*/


const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
});


console.log(squares);

