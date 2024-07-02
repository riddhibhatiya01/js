function calculateBill(units) {
  if (units <= 0) {
    throw new Error("Invalid input");
  }

  let bill = 0;

  if (units <= 100) {
    bill = units * 0.5;
  } else if (units <= 200) {
    bill = 100 * 0.5 + (units - 100) * 0.75;
  } else if (units <= 400) {
    bill = 100 * 0.5 + 100 * 0.75 + (units - 200) * 1.20;
  } else {
    bill = 100 * 0.5 + 100 * 0.75 + 200 * 1.20 + (units - 400) * 1.50;
  }

  return bill;
}
console.log(calculateBill(300)); 
