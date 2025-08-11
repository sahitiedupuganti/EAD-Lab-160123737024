const numbersOutput = document.getElementById('numbers-output');
for (let i = 1; i <= 10; i++) {
  const p = document.createElement('p');
  p.textContent = i;
  numbersOutput.appendChild(p);
}
