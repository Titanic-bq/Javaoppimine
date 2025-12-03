//DOM= DOCUMENT OBJECT MODEL 
//Object{} that represents the page you see in the web browser and provides
//you with an API to internet to react with it

const username = "Eynard"

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === ""? `Guest` : username; //welcomeMsg + username, kui on tühi, või vale, siis kasutaja on guest, kui on username on Eynard

console.dir(document);