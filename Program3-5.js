const factorialOutput = document.getElementById('factorial-output');
const factorialNum = 6; // Change this number as needed
let factorial = 1;
for (let i = 1; i <= factorialNum; i++) {
  factorial *= i;
}
factorialOutput.textContent = `Factorial of ${factorialNum} is ${factorial}`;