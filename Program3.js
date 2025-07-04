const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printAdjustedOddSeries(x) {
  const count = x % 2 === 0 ? x - 1 : x; // adjust count based on parity
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

rl.question('Enter a number: ', (input) => {
  const x = parseInt(input);

  if (isNaN(x) || x < 1) {
    console.log("Please enter a valid positive integer.");
  } else {
    const series = printAdjustedOddSeries(x);
    console.log(`Output: ${series.join(', ')}`);
  }

  rl.close();
});
