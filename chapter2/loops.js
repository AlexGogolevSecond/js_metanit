//for
for(let i = 0; i<5; i++){
     
    console.log(i);
}
console.log("Конец работы");
/*
0
1
2
3
4
Конец работы
*/
for(let i = 10; i > 5; i--){
      
    console.log(i);
}
/*
10
9
8
7
6
*/
console.log('**************');
const person = {name: "Tom", age: 37};
for (prop in person) {  // for .. in - для перебора объектов
    console.log(prop, person[prop]);
}

console.log('**************');
const s = 'la';
for (ch in s) {
    console.log(ch);
}
console.log('**************');
const text = 'Hello';
for (ch of text) {  // for .. of для перебора наборов данных
    console.log(ch);
}

console.log('**************');
const people = ["Tom", "Sam", "Bob"];
for (const person of people) {
    console.log(person);
}
