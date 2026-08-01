//  1. Перевірка працездатного віку
function isWorkingAgePerson(age) {
  if (age >= 16 && age <= 64) {
    return true;
  }
  return false;
}

const age = Number(prompt("Enter your age: "));

if (isWorkingAgePerson()) {
  console.log("Verificated");
} else {
  console.log("Don`t verificated");
}
