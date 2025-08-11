const multiplicationOutput = document.getElementById('multiplication-output');
const number = 5;  // Fixed number 5

for (let i = 1; i <= 10; i++) {
  const p = document.createElement('p');
  p.textContent = `${number} x ${i} = ${number * i}`;
  multiplicationOutput.appendChild(p);
}