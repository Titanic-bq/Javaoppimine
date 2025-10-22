//Const

const decreaseBtn = document.getElementById("decreaseBTn");
const resetBTn = document.getElementById("resetBTn");
const increaseBTn = document.getElementById("increaseBTn");
const countLabe = document.getElementById("countLabel");
let count = 0;

increaseBTn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;

}

resetBTn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}