const sumOutput = document.getElementById('sum-output');
const n = 10;

const sum = (n * (n + 1)) / 2;

sumOutput.textContent = `The sum of numbers from 1 to ${n} is ${sum}.`;
