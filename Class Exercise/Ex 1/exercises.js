var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (120 + 94 + 123) / 3;
var scoreMarry = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMarry);

if(scoreJohn > scoreMike){
	console.log('John\'s team win with score ' + scoreJohn);
}else if(scoreMike > scoreJohn){
	console.log('John\'s team win with score ' + scoreMike);
}else{
	console.log('Draw');
}

