function tipCalculator(bill){
	var percentage;
	if(bill < 50){
		percentage = 0.2;
	}else if(bill > 50 && bill < 200){
		percentage = 0.15;
	}else{
		percentage = 0.1;
	}
	return percentage * bill;
}

console.log(' Tip $' + tipCalculator(50));

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
			tipCalculator(bills[1]),
			tipCalculator(bills[2])];

var total = [bills[0] + tips[0],
			 bills[1] + tips[1],
			 bills[2] + tips[2]];

console.log('Tip : '+tips, 'Total Bill : ' +total);