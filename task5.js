const calculator = (num1, num2, operator) => {
   if (operator === "+") return num1 + num2;
   else if (operator === "-") return num1 - num2;
   else if (operator === "*") return num1 * num2;
   else if (operator === "/") return num1 / num2;
   else return "operator undefined";
};
console.log(calculator(1, 2, "/"));
