/* 
	1. Let and const
*/

//ES5
// //console.log(firstName5);
// var firstName5 = 'John';

//ES6
//console.log(firstName6)
// let firstName6 = 'Jane'; 	// nilai bisa dirubah
// firstName = 'Kyle'
// console.log(firstName6);
// const birthdayYear = 1990;	// nilai tidak bisa dirubah
// console.log(firstName6, birthdayYear);

// Scope ES5 : global scope & function scope

// let showData = function(birthYear){
// 	var birthdayYear = 1990;
// 	if (birthdayYear = 1990)
//	{
// 		var firstName = 'John';
// 	}
// 		console.log('firstName : ' + firstName);
// 		console.log('Birth Year : ' + birthdayYear);
// }
// showData(1991);

// Scope ES6 : block scope  

// let showData6 = function(birthYear){

// 	if (birthdayYear == 1990)
// 	{
// 		var firstName = 'John';
// 	}
// 		console.log('firstName : ' + firstName);
// 		console.log('Birth Year : ' + birthdayYear);
// }
// showData6(1991);


/* 
	2. Block and IIFES(Immediately Invoked Function Expression)
*/

//ES5
// (function(){
// 	var x = 5;
// 	var y = 10;
// 	console.log(x, y);
// })();

//ES6
// {
// 	let x = 15;
// 	let y = 30;
// 	console.log(x, y);
// }

/* 
	3. String
*/

//ES5
var firstName = 'John';
var lastName = 'Smith';
var birthYear = 1990;

var calcAge = function(birthYear){
	return 2019 - birthYear;
}

console.log(firstName + ' ' + lastName + ', birthYear = ' + birthYear + ', Age = ' + calcAge(birthYear));

//ES6
console.log(` ${firstName} ${lastName}, birthYear = ${birthYear}, Age = ${calcAge(birthYear)}`);

//Simbol =>
//No Parameter
//ES5
// var showData5 = function(){
// 	return('Good bye World');
// }
// console.log(showData5());

// //ES6
// let showData6 = () => 'Good bye World';
// console.log(showData6());

// One Parameter
var showData5 = function(firstName){
	return (`Hello ${firstName}`);
}
console.log(showData5('John'));

//ES6
var showData6 = firstName => `Hello ${firstName}`;
console.log(showData6('Marry'));

//Two Parameters
//ES5

var add5 = function (x, y ){
	return x + y;
}
console.log(add5(5,7));

//ES6
let add6 = (x, y) => x + y;
console.log(add6(8,9));

//Object Literal Syntax
//ES5

var johnData5 = function(id, name){
	return {
		id: 2,
		name: 'John'
	}
}
console.log(2, 'john');

//ES6
var johnData6 = (id, name) => ({id, name});
console.log(johnData6(2, 'john'));