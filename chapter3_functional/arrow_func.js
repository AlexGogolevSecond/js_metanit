/*
const hello = () => console.log("Hello");
hello();

const print = (mes) => console.log(mes);
 
print("Hello Metanit.com");
print("Welcome to JavaScript");
*/
/*
const sum = (x, y) => console.log("Sum =", x + y);
sum(1, 3);
sum(100, 5)
*/
/*
const sum = (x, y) => x + y;
 
console.log(sum(1, 2));
*/

const user = (userName, userAge) => ({name: userName, age: userAge});  // возвращается объект
 
let tom = user("Tom", 34);
let bob = user("Bob", 25);
 
console.log(tom.name, tom.age);     // "Tom", 34
console.log(bob.name, bob.age);     // "Bob", 25

const square = n => {
    const result = n * n;
    console.log(result);
}
  
square(5);     // 25
square(6);     // 36

const perimeter = (...numbers) => {
    let sum = 0;
    for (num of numbers) {
        sum += num;
    }
    return sum;
}

console.log('perimeter:' + perimeter(2,3,2,3));
console.log('aaa');