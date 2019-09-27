
// IF / Else statements


// var firstName = 'John';
// var status = 'married';

// if(status == 'married'){
// 	console.log(firstName + ' is married');
// }else{
// 	console.log(firstName + ' will hopefully merried')
// }

// var isMarried = false;

// if(isMarried){
// 	console.log(firstName + ' is married')
// }else{
// 	console.log(firstName + ' will hopefully married')
// }

// =====================================


// Bolean Logic (AND, OR, NOT)


// var firstName = 'John';
// var age = 20;

// if(age < 13){
// 	console.log(firstName + ' is a boy');
// }else if(age >= 13 && age < 20){
// 	console.log(firstName + ' is a teenager');
// }else if(age >= 20 && age < 30 ){
// 	console.log(firstName + ' is a youngMan');
// }else{
// 	console.log(firstName + ' is a man');
// }

// ==============================

// The ternary Operator and Switch statements

// var firstName = 'John';
// var age = 9;

// ternary Operator

// age >= 10 ? console.log(firstName + ' drinks juices') : console.log(firstName + ' drinks milk');

// if(age >= 10){
// 	console.log(firstName + ' drinks juices');
// }else{
// 	console.log(firstName + ' drinks milk');
// }

// var drink = age >= 10 ? 'juice' : 'milk';
// console.log(drink);

// ==============================

// Switch Statement

// var firstName = 'John'
// var job = 'instructor';

// switch(job){
// 	case 'teacher':
// 	console.log(firstName + ' is a teacher and instructor');
// 	break;
// 	case 'driver':
// 	console.log(firstName + ' is a driverr');
// 	break;
// 	case 'designer':
// 	console.log(firstName + ' is a designer');
// 	break;
// 	default:
// 	console.log(firstName + ' does something else');
// }

// age = 50;
// switch(true){
// 	case age < 13:
// 		console.log(firstName + ' is a boy');
// 		break;
// 	case age >=13 && age < 20:
// 		console.log(firstName + ' is a teenager');
// 		break;
// 	case age >= 20 && age < 30:
// 		console.log(firstName + ' is a youngman');
// 		break;
// 	default:
// 		console.log(firstName + ' is a man');
// }

//
// Function 
// DRY (Don't Repeat Yourself)
//

// function calculateAge(birthdayYear){
// 	return 2019 - birthdayYear;
// }

// var ageEnji = calculateAge(1999);
// var ageIman = calculateAge(1887);
// var ageIan = calculateAge(1987);
// console.log(ageEnji, ageIman, ageIan);

// function yearUntilRetirement(year, firstName){
// 	var age = calculateAge(year);
// 	var retirement = 60 - age;
// 	if(retirement > 0){
// 		console.log(firstName + ' retire in ' + retirement + ' year.' );
// 	}else{
// 		console.log(firstName + ' is already retire. ');
// 	}
// }

// yearUntilRetirement(1977, 'John');
// yearUntilRetirement(1929, 'Enji');
// yearUntilRetirement(1999, 'Meki');

//
// Function Statement and Expression
//

//
// function delaction
// function whatDoYouDo (job, firstName);

// function expression
// var whatDoYouDo = function(job, firstName){
// 	switch(job){
// 		case 'teacher':
// 			return firstName + ' is a teacher.';
// 		case 'driver':
// 			return firstName + ' is a driver.';
// 		case 'designer':
// 			return firstName + ' is a designer.';
// 		default:
// 			return firstName + ' does something else.';
// 	}
// }

// console.log(whatDoYouDo('teacher','John'));
// console.log(whatDoYouDo('BCA','Ajus'));
// console.log(whatDoYouDo('driver','Mudi'));

//
// Array
//

//Initialize Array
// var names = ['John', 'Mark', 'Jane']; 	 // < cara pertama
// var years = new Array(1990, 1969, 1948);  // < cara kedua

// console.log(names[1]);
// console.log(names.length)

//Mutate Array Data
// names[0] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

//Different Data Types
// var john = ['John', 'Smith' , 1990, 'designer', false];
//console.log(john); 

// john.push('blue'); 	// < Input elemen pling akhir
// john.unshift('Mr');	// < Input elemen pling depan

// john.pop(); 		// < hapus elemen paling akhir
// john.pop();
// john.shift(); 	// < hapus elemen paling depan
// console.log(john);

/*

	Object and Properties

*/

// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthdayYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false
// }

// console.log(john.firstName);
// console.log(john.family[3]);
// console.log(john.isMarried);

// var x = 'birthdayYear';
// console.log(john[x]);

// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = '1999';
// jane['lastName'] = 'Smith';
// console.log(jane);

/*

Object and Methods

*/

// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false,
// 	calcAge: function(){
// 		this.age = 2019 - this.birthYear;
// 	}
// }

// john.calcAge();
// console.log(john);

/*

Loop And Interaction

*/

// For Loop

// for (var i=0; i<10; i+=2) {
// 	console.log(i);
// }

// var john = ['John', 'Smith', 1999, 'designer', false, 'blue'];

// for(var i=0; i<john.length; i++){
// 	console.log(john[i]);
// }

// var name = 'John';
// console.log(name[3] + name [2]);

// // While Loop

// var i = 0;
// while(i<john.length){
// 	console.log(john[i]);
// 	i++;
// }

// Continue and Break Statement


var john = ['John', 'Smith', 1999, 'designer', false, 'blue'];

for(var i=0; i<john.length; i++){
	if(typeof john[i] !== 'string'){
		continue;
	}
	console.log(john[i]);
}

for(var i=0; i<john.length; i++){
	if(typeof john[i] !== 'string'){
		break;
	}
	console.log(john[i]);
}


// Looping Backward

for(var i=john.length-1; i>=0; i--){
	console.log(john[i]);
}































