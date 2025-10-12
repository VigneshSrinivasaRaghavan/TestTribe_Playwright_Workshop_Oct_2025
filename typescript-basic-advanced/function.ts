/*
Syntax

function functionName(parameters) {
   // Code to be executed
}

*/

// Example 1: Function without parameters

function greet(){
    console.log("Hello Students");
    console.log("Welcome to the TypeScript workshop");
}

greet();

// Example 2: Function with parameters

function add(a: number, b: number) {
    return a+b;
}
let sum = add(15,10);
console.log(sum);

// Example 3: Function with optional parameters

function greeting(name: string, city?:string){
    // console.log("Hello "+name);
    console.log(`Hello ${name}`);
}

greeting("John");
greeting("Jane");

// Example 4: Function with default parameters(Optional parameter in nature)

function greeting2(name: string, city:string="Berlin"){
    // console.log("Hello "+name);
    console.log(`Hello ${name} from ${city}`);
}

greeting2("Angela", "New York");
greeting2("Jane");

// Example 5: Arrow function

// function multiply(a: number, b: number) {
//   return a * b;
// }

/*
Arrow function syntax:

let functionName = (parameters) => {
   // Code to be executed
}
*/

let multiply = (a: number, b: number) => a * b; // Automatic return for single line function

// Multi-line arrow function
let divide = (a: number, b: number) => {
    console.log("Inside divide function");
    return a / b;
}

console.log(multiply(5, 4));