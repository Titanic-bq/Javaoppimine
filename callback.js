// callback a function that is passad as an argument to another function.
//if you read this file, then display it

/*hello(wait);

function hello(callback) {
  console.log("Hello!");
  callback();
}

function wait() {
  console.log("wait");
}

function leave() {
  console.log("leave");
}
function goodbye() {
  console.log("Goodbye.");
}*/

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}