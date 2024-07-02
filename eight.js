function checkTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error("Invalid input");
  }

  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || b === c || a === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}
console.log(checkTriangle(5, 5, 5));
console.log(checkTriangle(3, 3, 4));