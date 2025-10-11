// Array Declaration - Array Litreal Method
let fruits = ["apple", "banana", "mango"];
console.log(fruits);

// Array Declaration - Array Constructor Method
let cars = new Array("BMW", "Audi", "Mercedes");

console.log(fruits[2]);

fruits[0] = "orange"; // valid
console.log(fruits);
// fruits[0]= 100; // invalid

let numbersArray = [180,100,10, 20,75,30, 40];
numbersArray.push(50); // Add an element at the end
console.log(numbersArray);
numbersArray.pop(); // Remove the last element
console.log(numbersArray);

numbersArray.unshift(5); // Add an element at the beginning
console.log(numbersArray);
numbersArray.shift(); // Remove the first element
console.log(numbersArray);

numbersArray = numbersArray.toSorted((a, b) => a - b);
// console.log(numbersArray.toSorted((a, b) => b - a));

let slicedArray = numbersArray.slice(0,3);
console.log(slicedArray);

let filteredArray = numbersArray.filter((temp)=> temp>=100);
console.log(filteredArray);
console.log(numbersArray);