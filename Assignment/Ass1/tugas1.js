var massMark, MassJohn, heightMark, heightJohn;

massMark = 80;
massJohn = 68;
heightMark = 1.6;
heightJohn = 1.8;

var bmiMark = massMark/(heightMark*heightMark);
var bmiJohn = massJohn/(heightJohn*heightJohn);

var isHigher = bmiMark>bmiJohn;

console.log("Mark's mass = " + massMark);
console.log("John's mass = " + massJohn);
console.log("Mark's height = " + heightMark);
console.log("John's height = " + heightJohn);

console.log("Mark's BMI = " + bmiMark);
console.log("John's BMI = " + bmiJohn);

console.log("Is Mark's BMI higher than john's? " + isHigher);

// Ternary Operator

bmiMark > bmiJohn ? console.log("Mark BMI is higher than John BMI") : console.log(" John BMI is higher than Mark BMI ");