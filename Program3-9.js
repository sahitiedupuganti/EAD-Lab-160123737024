const reverseStringDiv = document.getElementById('reverse-string');
const strToReverse = "Hello World"; // Change this string
let reversedStr = "";
for (let i = strToReverse.length - 1; i >= 0; i--) {
  reversedStr += strToReverse[i];
}
reverseStringDiv.textContent = `Reverse of "${strToReverse}" is "${reversedStr}"`;
