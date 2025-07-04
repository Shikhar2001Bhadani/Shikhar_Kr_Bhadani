const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case 'add':
      case '+':
        return this.a + this.b;
      case 'subtract':
      case '-':
        return this.a - this.b;
      case 'multiply':
      case '*':
        return this.a * this.b;
      case 'divide':
      case '/':
        return this.b !== 0 ? this.a / this.b : 'Error: Division by zero';
      default:
        return 'Error: Invalid operation';
    }
  }
}

rl.question('Enter first number: ', (a) => {
  rl.question('Enter second number: ', (b) => {
    rl.question('Enter operation (add, subtract, multiply, divide or +, -, *, /): ', (operation) => {
      const calc = new Calculator(a, b, operation);
      console.log(`Result: ${calc.calculate()}`);
      rl.close();
    });
  });
});
