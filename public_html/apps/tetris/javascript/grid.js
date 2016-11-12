var grid; var score = 0;

var initGrid = function(){
	grid = [];
	for(var i = 0; i < 10; i++){
		grid[i] = [];
	}

	for(var x = 0; x < 10; x++){
		for(var y = 0; y < 24; y++){
			//grid[x][y] = Math.floor(Math.random()*8);
			grid[x][y] = 0;
		}
	}
};

var drawGrid = function(){
	gfx.save();
	gfx.translate(edgeWidth,0);
	for(var x in grid){
		for(var y in grid[x]){
			setColor(colors[grid[x][y]]);
			box(x*cwidth/20,y*cheight/24,cwidth/20,cheight/24,true);
		}
	}
	gfx.restore();
};

var isEmpty = function(x,y){
	return grid[x][y] == 0;
};

checkLose = function(){
	if(grid[3][0] !== 0){ return true; }
	if(grid[4][0] !== 0){ return true; }
	if(grid[5][0] !== 0){ return true; }
	if(grid[6][0] !== 0){ return true; }
	return false;
};

checkLines = function(){
	for(var y = 0; y < grid[0].length; y++){
		var total = 0;
		for(var x = 0; x < grid.length; x++){
			if(grid[x][y] !== 0){ total++; }
		}
		if(total == 10){
			clearLine(y);
		}
	}
};

clearLine = function(y){
	score++;
	for(var i = y-1; i > 0; i--){ lineDown(i); }
};

lineDown = function(y){
	for(var x in grid){
		grid[x][y+1] = grid[x][y];
	}
};