var john = {
	fullName: 'John Smith',
	mass: 80,
	height: 1.7,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height)
		return this.bmi;
	}
}

var mark = {
	fullName: 'Mark Johnson',
	mass: 70,
	height: 1.7,
	calcBMI: function(){
		this.bmi = this.mass / (this.height * this.height)
		return this.bmi;
	}
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi){
	console.log(john.fullName + ' has higher BMI than ' + mark.fullName);
}else if(mark.calcBMI() > john.calcBMI()){
	console.log(mark.fullName + ' has higher BMI than ' + john.fullName);
}else {
	console.log('Same BMI')
}