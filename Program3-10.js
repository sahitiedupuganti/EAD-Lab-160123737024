const primeCheckDiv = document.getElementById('prime-check');
const primeCheckNum = 29; // Change this number

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

primeCheckDiv.textContent = `${primeCheckNum} is ${isPrime(primeCheckNum) ? 'a prime number' : 'not a prime number'}.`;