// constructor = special method of defining propertiers and methods of objects

function car(make,model,year,color){
    this.make = make,
    this.mode = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new car("Ford", "Mustang",2024,"red");
const car2 = new car("Chevvy", "Camaro",2025,"blue");
const car3 = new car("Dodge", "Camel",2026,"brown");

car1.drive();
car2.drive();
car3.drive();
