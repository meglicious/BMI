const bmi = (heightInM, weightInKg) => {
  return Math.round(weightInKg / (heightInM * heightInM));
};
const person1BMI = bmi(1.79, 83);
const person2BMI = bmi(1.61, 55);

console.log(person1BMI);
console.log(person2BMI);

const add = (number1, number2) => {
  return number1 + number2;
};
const sum = add(4, 8);
console.log(sum);
