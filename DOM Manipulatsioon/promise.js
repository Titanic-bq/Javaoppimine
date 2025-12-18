function walkDog(){

    setTimeout(() => {
        console.log("You walk the dog");
    }, 1500);
}

function cleanKitchen (callback){
   return new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve("You clean the kitchen");
    }, 2500);
   });
}

function takeOutTrash (callback){
   return new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve("You take out trash");
    }, 400);
   });
}


walkDog().then(value =>{console.log(value); return cleanKitchen()})
         .then(value =>{console.log(value); return takeOutTrash()})
         .then(value =>{console.log(value); console.log("You finshed all the tasks")})
