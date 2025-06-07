/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (number) => {
  if (number >= 18) {
    return 'Adult';
  } else {
    return 'Minor';
  }
}

// isAdult(21);
console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
  // return name + '@' + domain;
  return `${name}@${domain}`;

  };




console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
const greetUser =(name, evening) => {
  return `${name} + ${evening}`;
}


console.log('Exercise 5 Result:', greetUser("Cris", "evening"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (num1, num2, num3) => {
  //return 
   if (num1 > num2 || num1 > num3) {
        return num1;
    } else if (num2 > num1 || num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

//ternary operator study
// const maxOfThree = (num1, num2, num3) => {
//   return num1 >= num2 
//   ? (num1 >= num3 ? num1 : num3) 
//   // ? = if : = else
//   : (num2 >= num3 ? num2 : num3);
// };


console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
 const calculateTip = (billAmount, tipPercent) => {
  return billAmount * (tipPercent / 100);
 };


console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
 const convertTemperature = (temp, scale) => {
  if (scale === 'C') {
return (temp * 1.8) + 32; // Celsius to Fahrenheit
   } else if (scale === 'F') {
return (temp - 32) / 1.8; // Fahrenheit to Cesius
} else {
return "Invalid scale";
};

/* NOTES:

scale === 'C'   
 -- you don't need "return" in one-liner "implicit return
 -- JS assumes you're returning result of expression directly

? (temp * 9 / 5) +32  // ALTERNATE temp calc
： scale === 'F'
? (temp - 32) * 5 / 9
: "Invalid scale";

 ==================TERNARY OPERATOR NOTES==================

  ? = "if"    : = "else"
 condition ? -- valueIfTrue : valueIfFalse

 scale === 'C'
? (temp * 1.8) +32                   // Celsius to Fahrenheit
                       
： scale === 'F'
? (temp - 32) / 1.8                  // Fahrenheit to Cesius
: "Invalid scale";
*/
  
}


 console.log('Exercise 8 Result:', convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (n1, n2, operation) => {
  if (operation === 'add') {
    return n1 + n2; 
      } else if (operation === 'subtract') {
        return n1 - n2;
      } else if (operation === 'multiply') {
        return n1 * n2; 
      } else if (operation === 'divide')   {
        return n1 / n2 ;
      } else {
        return 'no dice';
    }
    };


console.log('Exercise 9 Result (I used "divide", instead):', basicCalculator(560, 5, "divide"));


/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
   if (score >= 90) {
    return 'A';
   } else if(score >= 80) {
    return 'B';
   } else if(score >= 70) {
    return 'C';
   } else if(score >= 60) {
    return 'D';
   } else {
    return 'F'
   }
   };

 // ====================TERNARY OPERATOR STUDY========================

//  score >= 90 ? 'A' :       //if true, return 'A'
//  score >= 80 ? 'B' :       //if true return 'B'
//  score >= 70 ? 'C' :       //if true, return 'C'
//  score >= 60 ? 'D' : 'F';  //if true, return 'D'... else return 'F'

 console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/
 const createUsername = (firstName, lastName) => {
     const firstTriad = firstName.slice(0,3); 
    // .slice()-cuts out section starting @ index 0, stops @ 2 (Pab)
     const lastTriad = lastName.slice(0,3);
    //cuts out section starting @ index 0, stops @ index 2 (Cor)
     const namelength = firstName.length + lastName.length;
     //calculates total length of first and last name as whole
     const username = firstTriad + lastTriad + namelength;
     // variable definition concatenates the previous variable assignments
     return username;
     // returns the calculation
 }


 console.log('Exercise 11 Result:', createUsername("Pablo", "Cordero"));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/
const numArgs = (...args) => { // rest parameter that collects all arguments passed into a function into an array
  let count = 0;
  for(let i = 0; i < args.length; i++) {
    if (args[i] != undefined) {
      count++;
    }
}
   return count;
};



console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
