var canvas; var gfx;
var cwidth; var cheight;

var gridSize = 20;
var tileSize;

var letters = [];
var reserved = [];

var wordList = [
	'cat',
	'dog',
	'bird',
	'fish',
	'spider',
	'emu',
	'whale'
];

var submitButton;
var wordBox; var sizeBox;
var show; var backward;
var diagonal; var cross;

window.onresize = function(){
	cwidth = cheight = canvas.width = canvas.height = window.innerHeight*.8;
	tileSize = cwidth/gridSize;
}

window.onload = function(){
	canvas = document.getElementById('mycanvas');
	cwidth = cheight = canvas.width = canvas.height = window.innerHeight*.8;
	gfx = canvas.getContext('2d');

	tileSize = cwidth/gridSize;


	submitButton = document.getElementById('submit');
	wordBox = document.getElementById('wordbox');
	sizeBox = document.getElementById('sizebox');
	cross = document.getElementById('cross');
	show = document.getElementById('show');
	backward = document.getElementById('backward');
	diagonal = document.getElementById('diagonal');

	submitButton.onclick = function(){ parse(); }

	init();
	setInterval(render,1000/60);
}

parse = function(){
	var raw = wordBox.value;
	raw = raw.replace(/ /g,'');
	wordList = raw.split(',');
	gridSize = sizebox.value;
	tileSize = cwidth/gridSize;
	init();
}

init = function(){
	for(var i = 0; i < gridSize; i++){
		letters[i] = [];
		reserved[i] = [];
		for(var j = 0; j < gridSize; j++){
			var temp = Math.floor(Math.random()*26);
			var chr = String.fromCharCode(97 + temp);
			letters[i][j] = ''+chr;
			reserved[i][j] = false;
		}
	}

	for(var w in wordList){
		var rnd = Math.random();

		while(!diagonal.checked && rnd > .5){ rnd = Math.random(); }

		if(backward.checked && Math.random() > .5){
			wordList[w] = wordList[w].split("").reverse().join("");
		}

		if(rnd < .25){
			placeVert(wordList[w]);
		}else if(rnd > .25 && rnd < .5){
			placeHoriz(wordList[w]);
		}else if(rnd > .5 && rnd < .75){
			placeDiagD(wordList[w]);
		}else{
			placeDiagU(wordList[w]);
		}
	}
}

render = function(){
	// clear
	gfx.fillStyle = 'grey';
	gfx.fillRect(0,0,cwidth,cheight);

	// grid
	gfx.fillStyle = gfx.strokeStyle = 'black';
	gfx.save();
	gfx.lineWidth = 2;
	for(var i = 1; i < gridSize; i++){
		line(0,i*cheight/gridSize,cwidth,i*cheight/gridSize); // horizontal
		line(i*cwidth/gridSize,0,i*cwidth/gridSize,cheight); // vertical
	}
	gfx.restore();

	// letters and reserved
	gfx.font = '24px verdana';
	gfx.save();
	gfx.translate(tileSize/2-6,tileSize/2+6);
	for(var x = 0; x < gridSize; x++){
		for(var y = 0; y < gridSize; y++){
			if(reserved[x][y] && show.checked){
				gfx.fillStyle = gfx.strokeStyle = 'red';
				gfx.fillRect(
					x*tileSize-tileSize/2+6,
					y*tileSize-tileSize/2-6,
					tileSize,tileSize
				);
			}
			gfx.fillStyle = gfx.strokeStyle = 'black';
			gfx.fillText(''+letters[x][y],x*tileSize,y*tileSize);
		}
	}
	gfx.restore();

}

placeHoriz = function(word){
	var len = word.length;
	var chrs = word.split('');

	// choose random start point
	var sx = Math.floor(Math.random()*gridSize);
	var sy = Math.floor(Math.random()*gridSize);

	// make sure word won't run off right side of grid
	while(gridSize-sx < len){
		sx = Math.floor(Math.random()*gridSize);
	}
	
	// make sure no reserved spaces are crossed
	for(var c in chrs){
		if(reserved[parseInt(sx)+parseInt(c)][sy]){
			placeHoriz(word);
			return;
		}
	}

	// add letters to grid and mark reserved
	for(var c in chrs){
		letters[parseInt(sx)+parseInt(c)][sy] = chrs[c];
		reserved[parseInt(sx)+parseInt(c)][sy] = true;
	}
}

placeVert = function(word){
	var len = word.length;
	var chrs = word.split('');

	// choose random start point
	var sx = Math.floor(Math.random()*gridSize);
	var sy = Math.floor(Math.random()*gridSize);

	// make sure word won't run off bottom of grid
	while(gridSize-sy < len){
		sy = Math.floor(Math.random()*gridSize);
	}
	
	// make sure no reserved spaces are crossed
	for(var c in chrs){
		if(reserved[sx][parseInt(sy)+parseInt(c)]){
			placeVert(word);
			return;
		}
	}

	// add letters to grid and mark reserved
	for(var c in chrs){
		letters[sx][parseInt(sy)+parseInt(c)] = chrs[c];
		reserved[sx][parseInt(sy)+parseInt(c)] = true;
	}	
}

placeDiagD = function(word){
	var len = word.length;
	var chrs = word.split('');

	// choose random start point
	var sx = Math.floor(Math.random()*gridSize);
	var sy = Math.floor(Math.random()*gridSize);

	// make sure word won't run off bottom of grid
	while(gridSize-sy < len){
		sy = Math.floor(Math.random()*gridSize);
	}

	// make sure word won't run off right side of grid
	while(gridSize-sx < len){
		sx = Math.floor(Math.random()*gridSize);
	}
	
	// make sure no reserved spaces are crossed
	for(var c in chrs){
		if(reserved[parseInt(sx)+parseInt(c)][parseInt(sy)+parseInt(c)]){
			placeDiagD(word);
			return;
		}
	}

	// add letters to grid and mark reserved
	for(var c in chrs){
		letters[parseInt(sx)+parseInt(c)][parseInt(sy)+parseInt(c)] = chrs[c];
		reserved[parseInt(sx)+parseInt(c)][parseInt(sy)+parseInt(c)] = true;
	}	
}

placeDiagU = function(word){
	var len = word.length;
	var chrs = word.split('');

	// choose random start point
	var sx = Math.floor(Math.random()*gridSize);
	var sy = Math.floor(Math.random()*gridSize);

	// make sure word won't run off top of grid
	while(sy < len){
		sy = Math.floor(Math.random()*gridSize);
	}

	// make sure word won't run off right side of grid
	while(gridSize-sx < len){
		sx = Math.floor(Math.random()*gridSize);
	}
	
	// make sure no reserved spaces are crossed
	for(var c in chrs){
		if(reserved[parseInt(sx)+parseInt(c)][parseInt(sy)-parseInt(c)]){
			placeDiagU(word);
			return;
		}
	}

	// add letters to grid and mark reserved
	for(var c in chrs){
		letters[parseInt(sx)+parseInt(c)][parseInt(sy)-parseInt(c)] = chrs[c];
		reserved[parseInt(sx)+parseInt(c)][parseInt(sy)-parseInt(c)] = true;
	}	
}

/*placeVertCross = function(word){} // TODO
placeHorizCross = function(word){} // TODO
placeDiagDCross = function(word){} // TODO
placeDiagUCross = function(word){} // TODO*/

line = function(x1,y1,x2,y2){
	gfx.beginPath();
	gfx.moveTo(x1,y1);
	gfx.lineTo(x2,y2);
	gfx.stroke();
}

lerp = function(oldMin,oldMax,oldVal,newMin,newMax){
	return (oldVal-oldMin)/(oldMax-oldMin)*(newMax-newMin)+newMin;
}

vec2 = function(x,y){ this.x = x; this.y = y; }
add = function(v1, v2){ return new vec2(v1.x+v2.x, v1.y+v2.y); }
sub = function(v1, v2){ return new vec2(v1.x-v2.x, v1.y-v2.y); }
neg = function(v){ return new vec2(-v.x, -v.y); }
mag = function(v){ return Math.sqrt(Math.pow(v.x,2) + Math.pow(v.y,2)); }
dot = function(v1,v2){ return v1.x*v2.x + v1.y*v2.y; }
unit = function(v){ return new vec2(v.x/mag(v), v.y/mag(v)); }
mult = function(v,s){ return new vec2(v.x*s, v.y*s); }

rot = function(v,r){
	return new vec2(
		v.x*Math.cos(r) - v.y*Math.sin(r),
		v.x*Math.sin(r) + v.y*Math.cos(r)
	);
}