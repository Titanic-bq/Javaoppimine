


let age = window.prompt("sisesta oma vanus");
 if(age>=7 && age<=16){
    window.alert("Sinu söömis aeg on 10:00");
}
else if (age>=17 && age<=20){
    window.alert("Sinu söömis aeg on 11:00");
}
else if (age>=20 && age<=99){
    window.alert("Sinu söömis aeg on 12:00");
}
else{
    window.alert("See ei ole vanus või  on ebareaalne vanus kooli standardil.");
}