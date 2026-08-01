//  1. Перевірка працездатного віку
function isWorkingAgePerson(age) {
  if (age >= 16 && age <= 64) {
    return true;
  }
  return false;
}

const age = Number(prompt("Enter your age: "));

if (isWorkingAgePerson(age)) {
  console.log(`${age} is verificated working age`);
} else {
  console.log(`${age} is not verificated working age`);
}

console.log("==================================================");

// 2. Перевірка кратності чисел
function checkMultiplicity(number1, number2) {
  if (number1 % number2 === 0) {
    return true;
  }
  return false;
}

const number1 = Number(prompt("Enter first number: "));
const number2 = Number(prompt("Enter second number: "));

if (checkMultiplicity(number1, number2)) {
  console.log(`${number1} is divided ${number2}`);
} else {
  console.log(`${number1} is not divided ${number2}`);
}
