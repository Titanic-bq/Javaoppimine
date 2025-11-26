/*class rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
    if (newWidth > 0){
        this._width = newWidth;
    }
    else{
        console.error ("Must be positive");
    }
    }

    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }
        else{
            console.error("height must be positive");
        }
    }

    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }

    get area (){
        return this._area.toFixed(1);
    }
}

const rectangle = new rectangle(3,4);

rectangle.width= 9;
rectangle.height= 9;

console.log(rectangle.width);
console.log(rectangle.height);*/

class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    set firstname(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
           this._firstname = newFirstName;
        }
            
        else{
            console.error("Last name must be a non empty string");
        }
    }
    set lastname(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
          this._lastname = newLastName; 
        }
        else{
            console.error("Last name must be a non empty string");
        }
    }


    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this.age = newAge;
        }
        else{
            console.error("Age must be a non negative number")
        }
    }

    get firstname(){
    return this._firstname
    }
    get lastname(){
        return this._lastname
    }

    get fullname(){
        return this._fullname

    }
    get age(){
        return this._age
    }
}

const person = new Person(420,69,"pizza");

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);