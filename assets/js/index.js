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

console.log("==================================================");

// 3. Реконструкція парку: Розрахунок матеріалів.
const areaCube = function calculateCubeArea(param1) {
  return Math.pow(6 * param1, 2);
};

const areaCylinder = function calculateCylinderArea(param1, param2) {
  return 2 * 3.14 * param1 * (param1 + param2);
};

const S = function calculateSurfaceArea(shapeType, param1, param2) {
  const shapeTypeLower = shapeType.toLowerCase();
  if (
    (shapeTypeLower !== "cube" && shapeTypeLower !== "cylinder") ||
    param1 < 0 ||
    param2 < 0
  ) {
    return 0;
  } else if (shapeTypeLower === "cube") {
    return areaCube(param1);
  } else {
    return areaCylinder(param1, param2).toFixed(1);
  }
};

const shapeType = prompt("Enter shape type:");
const param1 = prompt("Enter first number:");
const param2 = prompt("Enter second number:");
const area = S(shapeType, param1, param2);

if (area === 0) {
  console.log("Incorrect entered data");
} else {
  console.log("S = ", area);
}
