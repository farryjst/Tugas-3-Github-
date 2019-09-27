function palindrome(kata) {
	var  kta = '';
	for (var i = kata.length-1; i >= 0; i--) {
		kta = kta + kata[i];
	}
	return kta == kata ? true : false;
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('civic'));
console.log(palindrome('mister'));