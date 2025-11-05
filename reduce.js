// .reduce ()= reduce the elements of array to a single value


/*const prices = [5, 30 , 50, 20, 5, 15, 10];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}*/

const grades = [75,50,90,30,60,55];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum);

function getMax(accumulator,element){
    return Math.max(accumulator,element);
}

function getMin(accumulator,element){
    return Math.max(accumulator,element);
}