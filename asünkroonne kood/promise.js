function walkDog(){

 return new Promise((resolve, reject) => {
 setTimeout (() => {
    const dogwalked = true;

    if(dogwalked){
        resolve("You walked the dog");
    }
    else{
        reject("You did not walk the dog");
    }
 }, 1500);
 });
}

function cleanKitchen (callback){
   return new Promise ((resolve,reject) => {
    setTimeout(() => {

        const kitchenCleaned = true;

        if(kitchenCleaned){
            resolve("You cleaned the kitchen");
        }
        else{
            reject("You did not clean the kitchen");
        }
    }, 2500);
   });
}

function takeOutTrash (callback){
   return new Promise ((resolve,reject) => {
    setTimeout(() => {
       
        const trashTakenOut = true;

        if (trashTakenOut){
            resolve("You took out trash");
        }
        else{
            reject("You did not");
        }
    }, 400);
   });
}


walkDog().then(value =>{console.log(value); return cleanKitchen()})
         .then(value =>{console.log(value); return takeOutTrash()})
         .then(value =>{console.log(value); console.log("You finshed all the tasks")})
