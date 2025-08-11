const fibonacciDiv = document.getElementById('fibonacci-series');
const fibTerms = 10; // Number of terms
let fibSequence = [0, 1];
for (let i = 2; i < fibTerms; i++) {
  fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
}
fibonacciDiv.textContent = `First ${fibTerms} terms of Fibonacci series: ${fibSequence.join(', ')}`;