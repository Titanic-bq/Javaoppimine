// class = edasi ehitatud konstruktor, klass ehitati edasi, saab rohkem tegevusi. Ei kirjuta funktsion,
//  vaid klassina.


class Product{
 constructor(name,price){
    this.name = name;
    this.price = price;
 }

 displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
 }

 calculateTotal(salesTax){
    return this.price + (this.price *salesTax);
 }
}

const salesTax = 0.05;

const product1= new Product("Shirt", 20.11);
const product2= new Product("Cowboy hat", 70.99);
const product3= new Product("Trousers", 50.22);

product2.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax):$${total.toFixed(2)}`)