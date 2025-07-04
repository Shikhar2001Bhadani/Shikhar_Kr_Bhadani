const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printOddSeries(x) {
  const result = [];
  for (let i = 0; i < x; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

rl.question('Enter a number: ', (input) => {
  const x = parseInt(input);

  if (isNaN(x) || x < 1) {
    console.log("Please enter a valid positive integer.");
  } else {
    const series = printOddSeries(x);
    console.log(`Output: ${series.join(', ')}`);
  }

  rl.close();
});
