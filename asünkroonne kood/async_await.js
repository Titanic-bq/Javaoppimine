
function walkDog(){

}
function cleanKitchen(){

}

function takeOutTrash(){

}

async function doChores(){

    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await walkDog();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await walkDog();
    console.log(takeOutTrashResult);

    console.log("You finished the chores");
}
catch(error){
    console.error(error);
}
}

