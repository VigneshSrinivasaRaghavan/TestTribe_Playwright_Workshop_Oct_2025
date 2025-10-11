/*
For Loop
Syntax:
for (initialization; condition; increment/decrement) {
    // code to be executed
}
*/
for(let i=1;i<=10;i++){
    console.log(i);
}

/* While loop --> By default it will keep on executing until the condition is false
Syntax:
while (condition) {
    // code to be executed
}
*/
let j = 1;
while(j<10){
    console.log(j);
    j++;
}

// Loop Control Statements

// Break Statement
for(let i=1;i<=10;i++){
    console.log(i);
    if(i==5){
        break; // It will terminate the loop when i is 5
    }
}

// Continue Statement
for(let i=1;i<=10;i++){
    if(i==5){
        continue; // It will skip the current iteration when i is 5
    }
    console.log(i);
}