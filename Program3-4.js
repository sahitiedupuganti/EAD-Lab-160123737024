const evenNumbersDiv = document.getElementById('even-numbers');
let evens = [];
for (let i = 2; i <= 50; i += 2) {
  evens.push(i);
}
evenNumbersDiv.textContent = evens.join(', ')