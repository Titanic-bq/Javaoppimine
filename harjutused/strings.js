// string laseb manipuleerida teksti

let userName= "BroCode";

console.log(userName.charAt(2));

console.log(userName.indexOf("o"));

console.log(userName.length);

//let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   -Stringi pikkus
//let length = text.length;

/*let text = "HELLO WORLD";
let char = text.charAt(0);     -toob numbrilise asukoha välja stringist 

let text = "HELLO WORLD"; 
let char = text.charCodeAt(0);     -toob UTF-16 koodi välja 0 kuni 65535

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);      -nagu see ütleb, lõikab välja stringist Banana, sest B algab 7 sõnamärgist ning kuni a-ni, sest slice lõppeb 13

let text = "Apple, Banana, Kiwi";
let part = text.slice(7);         - kui aga ainult 7, siis lõikab stringist välja ainult banaani
                                  - kui on sõna arv negatiivne nt -12, siis programm hakkab lugema tagurpidi, nii kaua kui ta on jõudnud -12 ja selles näites lõikab to Apple välja

let text1 = "      Hello World!      ";  Näitab tähemärgi arvu (Lenght text1 näitab Hello World+tühja ruumiga=22) (text 2 näitab Hello Word, mis on 12, sest Hello Word keskel on tühik.
let text2 = text1.trim();

let result = userName.trim      eemaldab tühikud nimest.
*/
 
//phonenumber = phonenumber.replaceAll("-","/")  replaceAll() esimene lünk eemaldab, teine asendab 
