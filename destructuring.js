const emp = {
    firstName: "Subhajeet",
    lastName: "Mohanty",
    age: 25
};

// Destructuring
let { firstName, lastName } = emp;
console.log(firstName + " " + lastName);


const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1+" "+fruit2);

console.log("=====================================================");