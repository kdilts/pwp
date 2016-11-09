var canvas;
var gfx;
var gameGrid;

var cwidth;
var cheight;

var playing = false;
var speed; var speedCount = 0;
var wrap = true;

var playButton;
var clearButton;
var randomizeButton;
var wrapButton;
var speedSlider;

window.onload = function(){
	canvas = document.getElementById('mycanvas');
	canvas.width = 600;
	canvas.height = 600;
	cwidth = canvas.width;
	cheight = canvas.height;
	gfx = canvas.getContext('2d');

	gameGrid = new grid(30,30);
	gameGrid.init();
	gameGrid.randomize();

	playButton = document.getElementById('play');
	clearButton = document.getElementById('clear');
	randomizeButton = document.getElementById('randomize');
	wrapButton = document.getElementById('wrap');

	speedSlider = document.getElementById('speed');
	speed = speedSlider.value;

	canvas.onclick = function(e){
		var clickX = e.offsetX;
		var clickY = e.offsetY;

		var tileX = Math.floor(clickX / gameGrid.tileWidth);
		var tileY = Math.floor(clickY / gameGrid.tileHeight);

		gameGrid.toggle(tileX,tileY);
	};

	playButton.onclick = function(){
		if(playing){
			playing = false;
			playButton.value = "Play";
		}else{
			playing = true;
			playButton.value = "Pause";
		}
	};

	clearButton.onclick = function(){ gameGrid.init(); };

	randomizeButton.onclick = function(){ gameGrid.randomize(); };

	wrapButton.onclick = function(){
		if(wrap){
			wrap = false;
			wrapButton.value = "Enable Wrap";
		}else{
			wrap = true;
			wrapButton.value = "Disable Wrap";
		}
	};

	speedSlider.onchange = function(){
		speed = speedSlider.value;
		speedCount = 0;
	};

	setInterval(render, 1000/60);
};



window.onresize = function(){
	cwidth = canvas.width;
	cheight = canvas.height;
};

render = function(){
	gameGrid.draw(gfx,cwidth,cheight);
	if(playing){
		if(speedCount == speed*10){ update(); speedCount = 0; }
		speedCount++;
	}
};

update = function(){
	// <2 neighbors - die
	// 2 or 3 neighbors - live
	// >3 neighbors - die
	// exactly 3 neighbors - come alive
	var killList = [];
	var addList = [];

	for(var i = 0; i < gameGrid.sx; i++){
		for(var j = 0; j < gameGrid.sy; j++){
			var count = gameGrid.getAdj(i,j,wrap);
			if(count < 2 || count > 3){ killList.push([i,j]); }
			if(count == 3){ addList.push([i,j]); }
		}
	}

	for(i in killList){
		gameGrid.set(killList[i][0],killList[i][1],0);
	}

	for(i in addList){
		gameGrid.set(addList[i][0],addList[i][1],1);
	}
};