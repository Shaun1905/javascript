//strings
const myVariable = "Mathematics is fun!";

//length property
console.log(myVariable.length); // Outputs: 11

const myVar= "school na scam";
console.log("i have a large cow in my backyard".length); // Outputs: 13
// string methods
console.log(myVariable.charAt(12));
console.log(myVariable.toUpperCase()); // Outputs: MATHEMATICS IS FUN!
console.log(myVar.indexOf("na")); // Outputs: 10 the first occurence of "na"
console.log(myVar.lastIndexOf("na")); // Outputs: 10 the last occurence
console.log(myVariable.slice(2, 5)); // Outputs: the characters from index 2 to 5
console.log(myVariable.replace("fun", "awesome")); // Outputs: Mathematics is awesome!
console.log(myVar.split(" ")); // Outputs: [ 'school', 'na', 'scam' ]
console.log("abe,dave,shaun".split(",")); // Outputs: [ 'abe', 'dave', 'shaun' ]


// numbers and number variables
const myNumber = 42;

console.log(myNumber);

//a number with a decimal point is a float
const myFloat = 42.01;
console.log(myFloat);

const myString= "42"
console.log(myString);

console.log(myNumber === myFloat);
//we can change a string datatype to a number using the Number() function
console.log(Number(myString));
console.log(myString);

console.log(myNumber === Number(myString));

console.log(myString + 7); // Outputs: 427 (string concatenation)
console.log(Number(myString) + 7); // Outputs: 49 (number addition)
console.log(myFloat === Number(myString));

//NUMBER METHODS
//The Number.isInteger() method checks if a value is an integer
// The Number.parseFloat()method parses a string and returns a floating-point number meaning it removes non integer values

console.log(Number.isInteger(myString));

const myNumberString = "42.509diggg";
console.log(Number.parseFloat(myNumberString)); //.tofixed() outputs to the number of decimals you input
console.log(Number.parseFloat(myNumberString).toFixed(2)); // Outputs: 42 this method returns string data type not a number
console.log(Number.parseInt(myFloat)); // Outputs: 42 this method returns a number data type

//toString() method converts a number to a string
console.log(typeof Number.parseFloat(myString));
//chaining = using several methods on a single line
console.log(Number.parseFloat("67.78ffg").toFixed(2). toString())

//the global isNaN() function checks if a value is NaN (Not a Number)
console.log(isNaN("dave")); // Outputs: true
console.log(isNaN(42)); // Outputs: false