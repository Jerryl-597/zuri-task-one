const numberOne = parseInt(prompt("Enter first number"));
const numberTwo = parseInt(prompt("Enter second number"));
const operator = prompt("Choose an operator: *, /, +, -");

let calculate;

if (operator === "+") {
  calculate = numberOne + numberTwo;
} else if (operator === "-") {
  calculate = numberOne - numberTwo;
} else if (operator === "/") {
  calculate = numberOne / numberTwo;
} else if (operator === "*") {
  calculate = numberOne * numberTwo;
}

const result = prompt(`Your answer is: ${calculate}`);
