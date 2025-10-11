let person = {
    name: "Vignesh",
    age: 21,
    address: {
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India"
    }
};

console.log(person);
console.log(person.address.country);

let person2: { name: any; age: number} = {
    name: "Vignesh",
    age: 21
};

person2.name = 100; // valid
person2.name = "Kumar"; // valid
person2.name= true; // valid
person.age = 22; // valid
// person2.age = "Twenty Two"; // invalid

type StudentDetailFormat = {
    name: string;
    age: number;
    city: string;
    phoneNumber: number;
}

let student1:StudentDetailFormat = {
    name: "Suganya",
    age: 22,
    city: "Chennai",
    phoneNumber: 9876543210
};

let student2:StudentDetailFormat = {
    name: "Suchithra",
    age: 20,
    city: "Banglore",
    phoneNumber: 8765432109
};