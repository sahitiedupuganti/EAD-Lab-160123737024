const reverseNumberDiv = document.getElementById('reverse-number');
const numToReverse = 12345; // Change this number
const reversedNum = parseInt(numToReverse.toString().split('').reverse().join(''));
reverseNumberDiv.textContent = `Reverse of ${numToReverse} is ${reversedNum}`;
