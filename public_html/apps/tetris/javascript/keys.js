var downKeys = {};
var upKeys = {};

var leftBuffer = 0;
var rightBuffer = 0;
var downBuffer = 0;
var rotBuffer = 0;


window.onkeydown = function(e){
	downKeys[''+e.which] = true;
};

window.onkeyup = function(e){
	upKeys[''+e.which] = true;
	if(e.which == 87){ // w
		if(!swapLock){
			var temp = holdP;
			holdP = curP;
			curP = temp;
			curY = 2;
			swapLock = true;
		}
	}
	if(e.which == 65){ // a
		leftBuffer++;
	}
	if(e.which == 83){ // s
		downBuffer++;
	}
	if(e.which == 68){ // d
		rightBuffer++;
	}
	if(e.which == 32){ // space
		rotBuffer++;
	}
	if(e.which == 80){ // p
		play = !play;
	}
	if(e.which == 82){ resetGame(); } // r
};