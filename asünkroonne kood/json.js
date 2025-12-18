
/*const names = ["Bob", "Mart", "Annel" ];
const people = [{
    "nimi": "Bob",
    "vanus": "30",
    "töö" : true
},
{
    "nimi": "Mart",
    "vanus": "50",
    "töö" : true
},
{
    "nimi": "Annel",
    "vanus": "20",
    "töö" : false
}
];

const jsonString = JSON.stringify(people);

console.log(jsonString)
 */


fetch("people.json")
 .then(response => response.json())
 .then(values => values.forEach(value => console.log(value.isTöö)));