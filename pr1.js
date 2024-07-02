function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return num1 / num2;
  } else {
    throw new Error("Invalid operator");
  }
}

console.log(calculator(9, 8, '+')); 
console.log(calculator(6, 3, '-')); 
console.log(calculator(9, 3, '*')); 
console.log(calculator(9, 18, '/'));