class Product{
constructor(id,title,price,catergory){
    this.id = id;
    this.title = title;
    this.price = price;
    this.catergory= catergory;
}
 displayLaptop(){
    const laptop = new Product(1,`Sülearvuti`, 78.50,`Elektroonika`);

console.log(laptop.describe());

console.log(Product.discountedPrice(laptop.price,10)); 
 }
}

