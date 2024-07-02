function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    throw new Error("Invalid input");
  }

  const bmi = weight / (height ** 2);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 24.9) {
    return "Normal weight";
  } else if (bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

console.log(calculateBMI(40, 1.50)); 