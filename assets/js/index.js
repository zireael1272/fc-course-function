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
