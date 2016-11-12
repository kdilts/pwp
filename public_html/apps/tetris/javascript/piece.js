/*var piece = function(){
	this.type;
	this.x;
	this.y;
}*/

var genRand = function(){
	return Math.floor(Math.random()*7);
};

/*var pixToGrid = function(x,y){
	return [
		Math.floor(x/(cwidth/20)),
		Math.floor(y/(cheight/24))
	];
};*/

var gridToPix = function(x,y){
	return [
		x*(cwidth/20),
		y*(cheight/24)
	];
};

var xyToi = function(x,y){ return y*4+x; };
var iToxy = function(i){ return [i%4,Math.floor(i/4)]; };

var toGrid = function(p){
	var ans = [[],[],[],[]];
	for(var x = 0; x < 4; x++){
		for(var y = 0; y < 4; y++){
			ans[x][y] = types[p][xyToi(x,y)];
		}
	}
	return ans;
};

var fromGrid = function(g){
	var ans = '';
	for(var x in g){
		for(var y in g[x]){
			ans += g[x][y];
		}
	}
	return ans;
};

var rotate = function(p,r){
	var ans = toGrid(p);
	var temp = [[],[],[],[]];

	for(var i = 0; i < r; i++){ // number of rotations

		// rotate matrix
		for(var x in ans){ // transpose
			for(var y in ans[x]){
				temp[y][x] = ans[x][y];
			}
		}

		for(x in ans){ // change columns
			for(y in ans[x]){
				ans[x][y] = temp[(ans.length-1)-x][y];
			}
		}

	}

	return fromGrid(ans);
};

var types = [
	'****............', // i block
	'**..**..........', // square
	'*...**..*.......', // t block
	'**...**.........', // z block
	'.**.**..........', // s block
	'.*...*..**......', // j block
	'*...*...**......' // L block
];

var colors = [
	'black', // empty
	'rgb(0,250,250)', // i
	'yellow', // sq
	'rgb(250,0,250)', // t
	'red', // z
	'green', // s
	'blue', // j
	'rgb(250,125,0)'  // L
];