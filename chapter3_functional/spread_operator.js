function printPerson(username, age, email) {
    console.log("Name:", username);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("=========================");
}
 
const tom = ["Tom", 39, "tom@example.com"]; 
const bob = ["Bob", 43, "bob@example.com"]; 
 
printPerson(...tom);
printPerson(...bob);
