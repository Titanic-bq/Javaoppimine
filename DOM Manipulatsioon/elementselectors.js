/*const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";*/


const fruits = document.getElementsByClassName("fruits");

/*fruits[2].style.backgroundColour = "yellow";*/

Array.from(fruits).forEach(Fruit => {
    fruit.style.backgroundColour = "yellow";
})