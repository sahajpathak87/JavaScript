// Q2: Sum, difference, product and division of two numbers
const a = 20;
const b = 5;

console.log(`Sum        : ${a} + ${b} = ${a + b}`);
console.log(`Difference : ${a} - ${b} = ${a - b}`);
console.log(`Product    : ${a} * ${b} = ${a * b}`);
if (b !== 0) {
  console.log(`Division   : ${a} / ${b} = ${a / b}`);
} else {
  console.log("Division   : Cannot divide by zero");
}
