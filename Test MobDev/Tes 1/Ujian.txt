var johnTip = {

	fullName: 'John Smith',
	billValue: [124, 48, 268, 180, 42],
	tipPaid: [],
	finalPaid: [],
	tipCalc: function(){
		for(var i = 0; i < this.billValue.length; i++) {
			if(this.billValue[i] < 50) {
				this.tipPaid.push((this.billValue[i] / 100) * 20);
			}else if(this.billValue[i] >= 100 && this.billValue[i] <= 300){
				this.tipPaid.push((this.billValue[i] / 100) * 15);
			}else{
				this.tipPaid.push((this.billValue[i] / 100) * 10);
			}
		}
		for(var i = 0; i < this.tipPaid.length; i++){
			this.finalPaid.push(this.tipPaid[i] + this.billValue[i]);
		}
	}
}

johnTip.tipCalc();
console.log('# John');
console.log('all the tip from john: $' +johnTip.tipPaid);
console.log('final paid amounts from john: $' +johnTip.finalPaid);

var markTip = {
	fullName: 'Mark Seker',
	billValue: [77, 375, 110, 45],
	tipPaid: [],
	finalPaid: [],
	tipCalc: function(){
		for(var i = 0; i < this.billValue.length; i++) {
			if(this.billValue[i] < 100) {
				this.tipPaid.push((this.billValue[i] / 100) * 20);
			}else if(this.billValue[i] >= 100 && this.billValue <= 300) {
				this.tipPaid.push((this.billValue[i] / 100) * 10);
			}else{
				this.tipPaid.push((this.billValue[i] / 100) * 25);
			}
		}
		for(var i = 0; i < this.tipPaid.length; i++){
			this.finalPaid.push(this.tipPaid[i] + this.billValue[i]);
		}
	}
}

markTip.tipCalc();
console.log(' ');
console.log('# Mark');
console.log('all the tip from mark: $' +markTip.tipPaid);
console.log('final paid amounts from mark: $' +markTip.finalPaid);
console.log(' ');

function tipAvarage(tip){
	var sum = 0;
	for(var i = 0; i < tip.length; i++){
		sum += tip[i];
	}
	return sum / tip.length;
}

console.log('# Tip avarage: ')
console.log('John avarage tip: $' +tipAvarage(johnTip.tipPaid));
console.log('Mark avarage tip: $' +tipAvarage(markTip.tipPaid));
console.log(' ');
console.log('# Who has the higher tip avarage?? ');

if(tipAvarage(markTip.tipPaid) > tipAvarage(johnTip.tipPaid)){
	console.log('Mark has the higher tips avarage: $'+tipAvarage(markTip.tipPaid));
}else{
	console.log('John has the higher tips avarage: $'+tipAvarage(johnTip.tipPaid));
}