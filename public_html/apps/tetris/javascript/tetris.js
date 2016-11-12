var canvas; var gfx;
var cwidth; var cheight;
var play = true; var lose = false;
var edgeWidth;
var holdP = genRand();
var nextP = genRand();

var curX = 2; var curY = 5; var curP = genRand(); var curR = 2;

var stepCounter = 35; var maxSteps = 35;

var hitBottom = false; var swapLock = false;

window.onload = function(){
	canvas = document.getElementById('mycanvas');
	gfx = canvas.getContext('2d');
	cwidth = canvas.width = 800;
	cheight = canvas.height = 800;

	edgeWidth = cwidth/4;

	gfx.font = '18px verdana';

	initGrid();

	setInterval(render,1000/60);
}

resetGame = function(){
	initGrid();
	score = 0;
	spawn();
	nextP = genRand();
	holdP = genRand();
	lose = false;
	play = true;
}

render = function(){
	clear();
	drawGrid();
	drawCurrentPiece();
	drawGridLines();

	if(lose){
		gfx.save();
		gfx.font = '32px verdana';
		setColor('red');
		text('LOSE',20,500);
		gfx.restore();
	}

	if(!play){
		gfx.save();
		gfx.font = '32px verdana';
		setColor('yellow');
		text('PAUSE',20,700);
		gfx.restore();		
	}

	stepCounter--;
	if(stepCounter == 0){
		stepCounter = maxSteps;
		step();
	}
}

step = function(){
	// if pause do nothing
	if(!play){return;}

	// update current piece
	hitBottom = false;

	// update input buffers
	for(var i = 0; i < 2; i++){
		if(rotBuffer > 0){ rotBuffer--; attemptRotate(); }
		if(leftBuffer > 0){ leftBuffer--; attemptMove('left'); }
		if(rightBuffer > 0){ rightBuffer--; attemptMove('right'); }
		if(downBuffer > 0){ downBuffer--; attemptMove('down'); }
	}

	// move current piece down
	attemptMove('down');

	// detect when piece has stopped and drop new one
	if(hitBottom){
		addToGrid();
		spawn();
		checkLines();
		if(checkLose()){
			play = false;
			lose = true;
		}
	}
}

addToGrid = function(){
	var p = rotate(curP,curR);
	for(var i = 0; i < 16; i++){
		if(p[i] == '*'){
			var coords = iToxy(i);
			coords[0] += curX;
			coords[1] += curY;
			grid[coords[0]][coords[1]] = curP+1;
		}
	}
}

spawn = function(){
	curP = nextP;
	nextP = Math.floor(Math.random()*7);
	curX = 5;
	curY = 0;
	curR = 0;
	swapLock = false;
}

attemptMove = function(dir){
	if(dir == 'left'){
		if(isValid(curX-1,curY)){ curX--; }
	}
	else if(dir == 'right'){
		if(isValid(curX+1,curY)){ curX++; }
	}else if(dir == 'down'){
		if(isValid(curX,curY+1)){ curY++; }
		else{ hitBottom = true; }
	}
}

attemptRotate = function(){
	curR++;
	curR %= 4;
	if(!isValid(curX,curY)){ curR--; if(curR < 0){ curR = 3; } }
}

isValid = function(x,y){
	var p = rotate(curP,curR);
	for(var i = 0; i < 16; i++){
		if(p[i] == '*'){
			var coords = iToxy(i);
			coords[0] += x;
			coords[1] += y;
			if(coords[0] < 0 || coords[1] < 0){ return false; }
			if(coords[0] > 9 || coords[1] > 23){ return false; }
			if(!isEmpty(coords[0],coords[1])){ return false; }
		}
	}
	return true;
}

drawCurrentPiece = function(){
	var offset = gridToPix(curX,curY);
	gfx.save();
	gfx.translate(edgeWidth+offset[0],offset[1]);

	setColor(colors[curP+1]);

	var tempPeice = rotate(curP,curR);
	for(var i = 0; i < 16; i++){
		if(tempPeice[i] == '*'){
			var coords = iToxy(i);
			coords = gridToPix(coords[0],coords[1]);
			box(coords[0],coords[1],cwidth/20,cheight/24,true);
		}
	}
	
	// show control point
	//setColor('pink');
	//box(0,0,20,20,true);

	gfx.restore();
}

drawGridLines = function(){
	gfx.lineWidth = 2;
	for(var i = 0; i < 10; i++){
		line(edgeWidth+i*(cwidth/20),0,
			edgeWidth+i*(cwidth/20),cheight);
	}

	for(var i = 0; i < 24; i++){
		line(edgeWidth,i*cheight/24,cwidth-edgeWidth,i*cheight/24);
	}
	gfx.lineWidth = 1;
}

clear = function(){
	setColor('black');
	box(0,0,cwidth,cheight,true);

	// left and right  borders
	setColor('grey');
	box(0,0,edgeWidth,cheight,true);
	box(cwidth*3/4,0,edgeWidth,cheight,true);

	// hold and next boxes
	setColor('yellow');
	text('HOLD',60,20);
	text('NEXT',cwidth-120,20);
	text('SCORE: ' + score,20,250);

	setColor('black');
	box(20,40,edgeWidth-40,edgeWidth-40,true);
	box(cwidth-20,40,-(edgeWidth-40),edgeWidth-40,true);

	// hold and next box grids
	setColor('grey');
	littleGrid(20,40,holdP);
	littleGrid(cwidth-20-(edgeWidth-40),40,nextP);

}

littleGrid = function(x,y,p){
	gfx.save();
	gfx.translate(x,y);
	// piece
	for(var i = 0; i < 16; i++){
		if(types[p][i] == '*'){
			setColor(colors[p+1]);
		}else{
			setColor('black');
		}

		var coords = iToxy(i);
		box(
			coords[1]*(edgeWidth-40)/4,
			coords[0]*(edgeWidth-40)/4,
			(edgeWidth-40)/4,(edgeWidth-40)/4,
			true
		);
	}

	// grid
	setColor('grey');
	gfx.lineWidth = 2;
	for(var i = 0; i < 4; i++){
		line( // horizontal
			0,i*(edgeWidth-40)/4,
			edgeWidth-40,i*(edgeWidth-40)/4
		);

		line( // vertical
			i*(edgeWidth-40)/4,0,
			i*(edgeWidth-40)/4,edgeWidth-40
		);
	}

	gfx.restore();
}