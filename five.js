function classifyNumber(num) {
  if (num === 0) {
    return "Zero";
  } else if (num > 0) {
    if (num % 2 === 0) {
      return "Positive Even";
    } else {
      return "Positive Odd";
    }
  } else {
    if (num % 2 === 0) {
      return "Negative Even";
    } else {
      return "Negative Odd";
    }
  }
}
console.log(classifyNumber(0)); 
console.log(classifyNumber(4)); 
console.log(classifyNumber(3)); 
console.log(classifyNumber(-2));
console.log(classifyNumber(-5));