//NaN - Not a Number
console.log(parseInt("abc"));   // NaN
const type = typeof NaN;
console.log(type);              // number - прикольно

console.log('**************')

const num1 = "javascript";
const num2 = "22";
let result = isNaN(num1);
console.log(result); // true - num1 не является числом
     
result = isNaN(num2);
console.log(result); //  false - num2 - это число

