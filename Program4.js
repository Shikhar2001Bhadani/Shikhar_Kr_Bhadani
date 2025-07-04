function countMultiples(arr) {
  const count = {};
  for (let i = 1; i <= 9; i++) count[i] = 0;

  for (const num of arr) {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) count[i]++;
    }
  }

  return count;
}

const inputArr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(inputArr));