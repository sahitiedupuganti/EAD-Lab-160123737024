const digitCountDiv = document.getElementById('digit-count');
const digitCountNum = 1234567890; // Change this number
const digitCount = digitCountNum.toString().length;
digitCountDiv.textContent = `Number of digits in ${digitCountNum} is ${digitCount}`;
