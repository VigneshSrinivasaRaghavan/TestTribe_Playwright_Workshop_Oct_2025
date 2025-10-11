// Arithmetic Operators
let x = 10;
let y = 5;
let sum = x + y; // 15
let difference = x - y; // 5
let product = x * y; // 50
let quotient = x / y; // 2 --> This is the quotient
let remainder = x % y; // 0 --> This is the remainder

// Comparison Operators
let isEqual = x == y; // false
let isStrictEqual = x === y; // false
let isNotEqual = x != y; // true
let isStrictNotEqual = x !== y; // true
let isGreater = x > y; // true
let isLess = x < y; // false
let isGreaterOrEqual = x >= y; // true
let isLessOrEqual = x <= y; // false

// Logical Operators --> Giving input in boolean form
let a = true;
let b = false;
let andResult = a && b; // false
let orResult = a || b; // true
let notResult = !a; // false

// Assignment Operators --> Combining arithmetic with assignment
let z = 20;
z += 5; // z = z + 5; // 25
z -= 5; // z = z - 5; // 20
z *= 2; // z = z * 2; // 40
z /= 4; // z = z / 4; // 10
z %= 3; // z = z % 3; // 1

// Ternary Operator
let studentAge = 10;
let isMajorOrMinor = studentAge >=18 ? "Major" : "Minor";
console.log(isMajorOrMinor);