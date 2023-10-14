


// Practice exercise 2.1
// What are the types of these variables listed below? Verify this with typeof and 
// output the result to the console:
let str1 = 'Laurence';   
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log(typeof str1);   //string
console.log(typeof str2);   //string
console.log(typeof val1);   //undefined
console.log(typeof val2);   //object
console.log(typeof myNum);  //number

// Practice exercise 2.2
// Create a variable for your name, another one for your age, and another one for 
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are 
// variables: 
let name= "layba";
let age=21;
let IconCode = true
console.log(`Hello, my name is ${name}, I am ${age} years old and I can code JavaScript: ${IconCode}`) ;
// Hello, my name is layba, I am 21 years old and I can code JavaScript: true

// Practice exercise 2.3
// Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
// theorem when given the values of the other two sides. The theorem specifies that the 
// relation between the sides of a right-angled triangle is a2+ b2 = c2
// You can use prompt() to get the value for a and b. Write code to get the value from 
// the user for a and b. Then square the values of both a and b before adding them 
// together and finding the square root. Print your answer to the console
let a =Number( prompt("value-of-a"))
console.log(`The value of a= ${a}`);
console.log(` The square of a=${a**2}`);
let  valueA=a**2
let b =Number( prompt("value-of-b"));
console.log(`The value of b= ${b}`);
console.log(` The square of b=${b**2}`);
let valueB =b**2
console.log (`The sum of a and b = ${valueA + valueB}`);
let square = Math.sqrt( valueA+valueB);
console.log(`The square root of a and b = ${square}`)
console.log(`the value of c = ${square}`);

// Practice exercise 2.4
//  Update these variables with the 
// following actions using the assignment operators:
// • Replace the value of c with the modulus of c and b

// Create variables for three numbers: a, b, and c.
let numA =Number( prompt("value-of-num1"))  // sopse user give value 10
let numB =Number( prompt("value-of-num2"))   //suppose user give value 11
let numC =Number( prompt("value-of-num3"))  // suppose user give value 12
// • Add b to a
let sum = numB+numA
console.log( `the sum of a and b  =${sum}`);
// Divide a by c
 let divide = numA / numC;
console.log( `the divide a by c =${divide}`);


// print all three values
console.log( `Value a =${numA}`);


console.log( `Value b =${numB}`);

console.log( `Value c =${numC}`);


// Chapter project
// Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the 
// value in kilometers in the following format:

// take value for User in miles
let value = prompt("Enter value in miles: ")

// conversion factor
const factor = 1.609344;

// calculate kilometer
const kilometer = value * factor

console.log(`${value} miles is equal to ${kilometer} kilometer.`);
// 2.2 miles is equal to 3.5405568000000005 kilometer.

// BMI calculator
// Set values for height in inches and weight in pounds, then convert the values to 
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
// divided by squared height (in meters). Output the results to the console
let height= 24;//inches
let weight= 20;// pounds
 const number=2.54;
 const number2=0.454;
 // calculate height in centimeter
const centi = height * number
console.log(`${height} inches is equal to ${centi} centimeter`)
// calculate the weight in kilo
const kilo = weight * number2
console.log(`${weight} pound is equal to ${kilo} kilo`);
//convert height into meter
const number3=0.01;
const meter = centi * number3
console.log(`${centi} centimeter is equal to ${meter} meter`)
let newheight=meter;
let newweight=kilo;
// Then, calculate and log the BMI: this is equal to weight (in kilos) 
// divided by squared height (in meters). Output the results to the console.
let BMI= (newweight)/ (newheight* newheight);
console.log(` The body mass index (BMI) is ${BMI}`);
