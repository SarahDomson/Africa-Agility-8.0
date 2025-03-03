// 1. Declare variables and check their types
let firstName = "Sarah";
let lastName = "Domson";
let country = "Ghana";
let city = "Accra";
let age = 30;
let isMarried = false;
let year = 2025;


console.log(typeof firstName); 
console.log(typeof lastName);  
console.log(typeof country);   
console.log(typeof city);      
console.log(typeof age);       
console.log(typeof isMarried); 
console.log(typeof year);      

// 2.
console.log('10' === 10);  
console.log('10' == 10); 


// 3. 
console.log(parseInt('9.8') === 10);


// 4.
// 4a Three truthy values
console.log(Boolean(1));         
console.log(Boolean("hello"));    
console.log(Boolean([]));         

// 4b Three falsy values
console.log(Boolean(0));          
console.log(Boolean(""));         
console.log(Boolean(null));       

// 5.
// 5a
console.log(4 > 3 && 10 < 12);    
// 5b
console.log(4 > 3 && 10 > 12);    
// 5c
console.log(4 > 3 || 10 < 12);    
// 5d
console.log(4 > 3 || 10 > 12);    
// 5e
console.log(!(4 > 3));            
// 5f
console.log(!(4 < 3));            
// 5g
console.log(!(false));            
// 5h
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12)); 
// 5i
console.log(!(4 === '4'));        

// 6. Area of a triangle
let base = prompt("Enter base of the triangle:");
let height = prompt("Enter height of the triangle:");
let area = 0.5 * base * height;
console.log("The area of the triangle is " + area);

// 7. 
let birthYear = prompt("Enter birth year:");
let currentYear = 2025; 
let userAge = currentYear - birthYear;

if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive`);
} else {
    let yearsToWait = 18 - userAge;
    console.log(`You are ${userAge}. You will be allowed to drive after ${yearsToWait} years.`);
}

// 8. 
// 8a
let challenge = '30 Days Of JavaScript';

// 8b
console.log(challenge.toUpperCase()); 

// 8c
console.log(challenge.toLowerCase());

// 8d
console.log(challenge.slice(0, 2)); 

// 8e
console.log(challenge.slice(3)); 

// 8f
console.log(challenge.includes('Script')); 

// 8g
console.log(challenge.indexOf('a')); 

// 8h
console.log(challenge.lastIndexOf('a')); 

// 8i
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); 

// 8j
console.log(challenge.startsWith('30')); 

// 8k
console.log(challenge.endsWith('Script')); 

// 8l
console.log(Math.floor(Math.random() * 101));

// 9. Compare a and b
// Using if-else
let a = 15;
let b = 10;

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

// Using ternary operator
console.log(a > b ? 'a is greater than b' : 'a is less than b');

// 10. Grading system
let scores = 85;
let grade;

if (scores >= 80 && scores <= 100) {
    grade = 'A';
} else if (scores >= 70 && scores <= 79) {
    grade = 'B';
} else if (scores >= 60 && scores <= 69) {
    grade = 'C';
} else if (scores >= 50 && scores <= 59) {
    grade = 'D';
} else if (scores >= 0 && scores <= 49) {
    grade = 'F';
} else {
    grade = 'Invalid score';
}

console.log(`Score: ${scores}, Grade: ${grade}`);

