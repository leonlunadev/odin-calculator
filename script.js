let firstNumber = "";
let currentNumber = "";
let operator = "";
let numberHasDecimal = false;
let currentValue = 0.0;

const screen = document.querySelector(".screen");

function operate() {
  if (firstNumber !== "" && operator !== "" && currentNumber !== "") {
    evaluate();
    firstNumber = currentValue.toString();
    currentNumber = "";
    numberHasDecimal = false;
    screen.textContent = firstNumber;
    operator = "";
  }
}

function clear() {
  firstNumber = "";
  currentNumber = "";
  numberHasDecimal = false;
  currentValue = 0;
  operator = "";
  screen.textContent = "";
}

function backspace() {}

function add() {}

function subtract() {}

function multiply() {}

function divide() {}

function handleDigit(e) {
  currentNumber += e.target.textContent;
  screen.textContent += e.target.textContent;
}

function evaluate() {
  switch (operator) {
    case "+":
      currentValue = parseFloat(firstNumber) + parseFloat(currentNumber);
      break;
    case "-":
      currentValue = parseFloat(firstNumber) - parseFloat(currentNumber);
      break;
    case "*":
      currentValue = parseFloat(firstNumber) * parseFloat(currentNumber);
      break;
    case "/":
      currentValue = parseFloat(firstNumber) / parseFloat(currentNumber);
      break;
  }
}

function handleOperator(e) {
  if (currentNumber !== "" && operator === "") {
    operator = e.target.textContent;
    firstNumber = currentNumber;
    currentNumber = "";
    numberHasDecimal = false;
    screen.textContent += operator;
  } else if (firstNumber !== "" && operator === "" && currentNumber === "") {
    operator = e.target.textContent;
    numberHasDecimal = false;
    screen.textContent += operator;
  } else if (currentNumber === "" && operator !== "" && firstNumber !== "") {
    operator = e.target.textContent;
    screen.target.textContent[-1] = operator;
  } else if (currentNumber !== "" && operator !== "" && firstNumber !== "") {
    evaluate();
    operator = e.target.textContent;
    firstNumber = currentValue.toString();
    currentNumber = "";
    numberHasDecimal = false;
    screen.textContent = firstNumber;
  }
}

function handleDecimal(e) {
  if (!numberHasDecimal) {
    currentNumber += ".";
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

equals.addEventListener("click", operate);

decimal.addEventListener("click", handleDecimal);

numbers.forEach((number) => {
  number.addEventListener("click", handleDigit);
});

operators.forEach((operator) => {
  operator.addEventListener("click", handleOperator);
});

clearButton.addEventListener("click", clear);
