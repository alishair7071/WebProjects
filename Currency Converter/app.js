import { countryList } from "./codes.js";
const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let dropdowns = document.querySelectorAll(".dropdown select");
let btn=document.querySelector("button");
let fromSel= document.querySelector(".from select");
let toSel= document.querySelector(".to select");
let msg= document.querySelector(".msg");



//making dropdowns dynamically
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name == "from" && currCode == "USD") {
      newOption.selected = "selected";
    } else if (select.name == "to" && currCode == "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt)=>{
       updataFlag(evt.target);
  });
}

//updata flags according to selected option in drowdowns
const updataFlag= (element)=>{
    let currCode=element.value;
    let countryCode= countryList[currCode];
    let newSrc= `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src= newSrc;
}


//update result msg on initial page load and on btn click
const updataPage= async ()=>{
    let amount = document.querySelector(".amount input");
    let amountVal= amount.value;
 
    if(amountVal=="" || amountVal < 1){
        amountVal= 1;
        amount.value=1;
    }

    console.log(fromSel.value.toLowerCase(), toSel.value);

    let URL= `${BASE_URL}/${fromSel.value.toLowerCase()}.json`;
    let response= await fetch(URL);
    let data= await response.json();
    console.log(data);

    let rate= data[`${fromSel.value.toLowerCase()}`][`${toSel.value.toLowerCase()}`];
    let finalAmount= amountVal*rate;
    let roundedAmount = parseFloat(finalAmount.toFixed(6));

    msg.innerText=`${amountVal} ${fromSel.value} = ${roundedAmount} ${toSel.value}`;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updataPage();
});

window.addEventListener("load", ()=>{
    updataPage();
});


