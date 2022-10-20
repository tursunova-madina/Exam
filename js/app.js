"use strict";

let billInput = document.querySelector(".bill-input");
let btns = document.querySelectorAll(".button");
let custom = document.querySelector(".custom_tip");
let personTotal = document.querySelector(".bill-input-number");
let tip = document.querySelector(".tP");
let totalBill = document.querySelector(".tp");
let resetBtn = document.querySelector(".reset");

for (let i = 0; i < btns.length; i++) {
  let btnValue = Number(btns[i].value);

  btns[i].addEventListener("click", () => {
    let billInputValue = Number(billInput.value);
    let personTotalValue = Number(personTotal.value);
    if (personTotalValue==  0 || personTotalValue < 0) {
     alert("We can not calculate it!")
    } else {
      let tipResult = (billInputValue * (btnValue / 100)) / personTotalValue;
      tip.textContent = ` $ ${tipResult.toFixed(2)}`;
      // console.log(tipResult);
      // console.log(billInputValue);

      let totalPeople =
        (billInputValue * (btnValue / 100) + billInputValue) / personTotalValue;
      totalBill.textContent = ` $ ${totalPeople.toFixed(2)}`;


    }
  });
}

custom.addEventListener("change", () => {
  let customValue = Number(custom.value);
  let billInputValue = Number(billInput.value);
  let personTotalValue = Number(personTotal.value);
  let tipResult = (billInputValue * (customValue / 100)) / personTotalValue;
  tip.textContent = ` $ ${tipResult.toFixed(2)}`;
  console.log(tipResult);
  console.log(billInputValue);

  let totalPeople =
    (billInputValue * (customValue / 100) + billInputValue) / personTotalValue;
  totalBill.textContent = ` $ ${totalPeople.toFixed(2)}`;
});

resetBtn.addEventListener("click", () => {
  tip.textContent = "000";
  totalBill.textContent = "000";
  billInput.value = "";
  personTotal.value = "";
  custom.value = "";
});
