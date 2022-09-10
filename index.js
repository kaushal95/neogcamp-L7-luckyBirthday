const dobInput = document.querySelector("#date-input");
const numInput = document.querySelector("#number-input");
const btn = document.querySelector(".btn");
const outputElement = document.querySelector(".output");

btn.addEventListener("click", () => {
  hideOutputElement();
  let dob = dobInput.value;
  dob = dob.replaceAll("-", "");

  const number = Number(numInput.value);
  console.log(dob, number);
  if (dob && number) {
    checkLuckyNumber(dob, number);
  } else {
    showOutputElement("Please Enter Valid Values 🙄");
  }
});

function checkLuckyNumber(dob, number) {
  outputElement.classList.remove("celebrate");

  let sumOfDob = 0;
  for (let i = 0; i < dob.length; i++) {
    sumOfDob += Number(dob[i]);
  }
  if (sumOfDob % number === 0) {
    outputElement.classList.add("celebrate");
    showOutputElement("hurray 🥳!! Your Birthday is Lucky..🤞");
  } else {
    showOutputElement("😑 Not so lucky!!");
  }
}
function showOutputElement(msg) {
  outputElement.style.display = "block";
  outputElement.innerText = msg;
}
function hideOutputElement() {
  outputElement.style.display = "none";
}
