let firstNumber = "";

let operator = "";
let numberHasDecimal = false;
let currentValue = 0.0;
let secondNumber = "";
let isSecondNumber = false;

const screen = document.querySelector(".screen");

function operate() {
  if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
    evaluate();
    firstNumber = currentValue.toString();
    secondNumber = "";
    numberHasDecimal = false;
    isSecondNumber = false;
    screen.textContent = firstNumber;
    operator = "";
  }
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  numberHasDecimal = false;
  isSecondNumber = false;
  currentValue = 0;
  operator = "";
  screen.textContent = "";
}

function backspace() {
  let slicedString = screen.textContent;
  slicedString = slicedString.slice(0, -1);
  screen.textContent = slicedString;
}

function add() {}

function subtract() {}

function multiply() {}

function divide() {}

function handleDigit(e) {
  if (!isSecondNumber) {
    firstNumber += e.target.textContent;
    screen.textContent += e.target.textContent;
  } else {
    secondNumber += e.target.textContent;
    screen.textContent += e.target.textContent;
  }
}

function evaluate() {
  switch (operator) {
    case "+":
      currentValue = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      currentValue = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      currentValue = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      currentValue = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }
}

function handleOperator(e) {
  if (firstNumber !== "" && operator === "" && secondNumber === "") {
    operator = e.target.textContent;
    isSecondNumber = true;
    screen.textContent += e.target.textContent;
    numberHasDecimal = false;
  } else if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
    evaluate();
    firstNumber = currentValue.toString();
    screen.textContent = firstNumber;
    secondNumber = "";
    operator = e.target.textContent;
    screen.textContent += operator;
    isSecondNumber = true;
    numberHasDecimal = false;
  } else if (firstNumber !== "" && operator !== "" && secondNumber === "") {
    screen.textContent[-1] = e.target.textContent;
    operator = e.target.textContent;
  }
}

function handleDecimal(e) {
  if (!numberHasDecimal) {
    if (!isSecondNumber) {
      firstNumber += ".";
    } else {
      secondNumber += ".";
    }
    screen.textContent += ".";
    numberHasDecimal = true;
  }
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const back = document.querySelector("#back");
const clearButton = document.querySelector("#clear");
const decimal = document.querySelector("#decimalpoint");
const equals = document.querySelector("#equals");

back.addEventListener("click", backspace);

equals.addEventListener("click", operate);

decimal.addEventListener("click", handleDecimal);

numbers.forEach((number) => {
  number.addEventListener("click", handleDigit);
});

operators.forEach((operator) => {
  operator.addEventListener("click", handleOperator);
});

clearButton.addEventListener("click", clear);
