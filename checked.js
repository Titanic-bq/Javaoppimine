//checked

const myCheckBox = document.getElementById("myCheckBox")
const subResult = document.getElementById("subResult");
const payPalBtn = document.getElementById("payPalBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const visaBtn = document.getElementById("visaBtn");
const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent =` You are not subscribed`;
    }


if(visaBtn.checked){
        paymentResult.textContent=`You are signed in with Visa`
}
else if(mastercardBtn.checked){
    paymentResult.textContent=`You are paying with Mastercard`
}
else if(payPalBtn.checked){
    paymentResult.textContent=`You are paying with Paypal`
}
else{
    paymentResult.textContent=`You must select a payment type`
}


}