//if statements

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number (age);
if(age>=100){
    resultElement.textContent= "Sa oled liiga vana, et veebilehte siseneda";
}
else if(age == 0){
resultElement.textContent= "Ei saa siseneda, sest sa just sündisid";

}
else if(age< 0){
    resultElement.textContent= "vanus ei saa olla alla nulli";
}
else if(age>=18){
    resultElement.textContent="Oled piisavalt vana, et siseneda";
}
else if (age<0){
    resultElement.textContent= "Sinu vanus ei saa olla alla 0"
}
else{
    resultElement.textContent= "Sa pead olema 18+, et siseneda veebilehte"
}

}
 


/*aeg
let time = 9;

if(time < 12){
  console.log("Good morning")  
}
    else{
        console.log("Good afternoon")
    }
        */
/*
    let isStudent=false;

    if (isStudent){
        console.log("Sa oled tudeng!");
    }
    else{
        console.log("Sa ei ole tudeng!");
    }

    let age= 18;
    let haslicense= true;

    if(age>=16){
        console.log("Sa oled piisavalt vana lubade taotlemiseks");

        if(haslicense){
            console.log("Sul on juhiload");
        }
        else{
            console.log("Sul ei ole juhiload");
        }
    }
    else{
        console.log("Sa pole piisavalt vana, et taotleda juhilubasi");
    }
*/

