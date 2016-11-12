pt = function(x,y){
	this.x = x;
	this.y = y;
};

// find point with lowest y value in given list
minY = function(pts){
	var min = null;
	for(var i in pts){
		if(min == null){ min = i; }
		if(pts[i].y < pts[min].y){ min = i; }
	}
	return min;
};

// find point in list with lowest theta value compared to given point
minT = function(list, p){
	var min = null;
	var idx = null;
	for(var i in list){
		var theta = calcT(p,list[i]);
		if(min == null){ min = theta; idx = i; continue; }
		if(theta < min){ min = theta; idx = i; }
	}
	return idx;
};

// find theta between two points
calcT = function(pt1, pt2){
	var diffX = pt1.x-pt2.x;
	var diffY = pt1.y-pt2.y;
	return Math.atan2(diffY,diffX);
};

getT = function(vtx, pt1, pt2){
	var v1 = { x:pt1.x-vtx.x ,y:pt1.y-vtx.y };
	var v2 = { x:pt2.x-vtx.x ,y:pt2.y-vtx.y };

	var dot = v1.x*v2.x + v1.y*v2.y;
	var det = v1.x*v2.y - v2.x*v1.y;

	return Math.atan2(det,dot);
};

var canvas; var gfx;
var cwidth; var cheight;
var points = []; var minYpt;
var tsorted; var hull;
var mx = 0; var my = 0;
var random; var clear; var numbox;

window.onload = function(){
	canvas = document.getElementById('mycanvas');
	gfx = canvas.getContext('2d');
	cwidth = canvas.width = 500;
	cheight = canvas.height = 500;

	canvas.onmousemove = function(e){
		mx = e.offsetX; my = e.offsetY;
	};

	canvas.onmousedown = function(){
		if(mx > 0 && mx < 500){
			if(my > 0 && my < 500){
				points.push(new pt(mx,my));
			}
		}
	};

	random = document.getElementById('random');
	random.onclick = function(){
		clearPoints();
		createPoints(parseInt(numbox.value));
	};

	var clear = document.getElementById('clear');
	clear.onclick = function(){ clearPoints(); };

	var calc = document.getElementById('calc');
	calc.onclick = function(){ calcHull(); };

	numbox = document.getElementById('numbox');

	createPoints(20);

	calcHull();

	setInterval(render,1000/60);
};

calcHull = function(){
	// sort by y value
	var ysorted = [];
	var temp = points.slice();
	var idx;
	while(temp.length !== 0){
		idx = minY(temp);
		ysorted.push(temp[idx]);
		temp.splice(idx,1);
	}
	minYpt = ysorted.splice(0,1)[0]; // point w/ lowest y value

	// sort by theta
	tsorted = [];
	temp = ysorted.slice();
	while(temp.length !== 0){
		idx = minT(temp, minYpt);
		tsorted.push(temp[idx]);
		temp.splice(idx,1);
	}

	// begin constructing convex hull
	hull = [];
	hull.push(minYpt);
	hull.push(tsorted[0]);
	tsorted.splice(0,1);

	tsorted.push(minYpt);

	while(tsorted.length > 0){
		var nextPt = tsorted.splice(0,1)[0];
		while(getT(hull[hull.length-1], hull[hull.length-2], nextPt) > 0){
			hull.pop();
		}
		hull.push(nextPt);
	}
};

createPoints = function(n){
	for(var i = 0; i < n; i++){
		points.push(new pt(
			Math.floor(Math.random()*500),
			Math.floor(Math.random()*500)
		));
	}
};

clearPoints = function(){
	hull = [];
	points = [];
	tsorted = [];
	minYpt = null;
};

render = function(){
		// clear
		gfx.fillStyle = gfx.strokeStyle = 'black';
		gfx.fillRect(0,0,cwidth,cheight);

		// show pts
		gfx.fillStyle = gfx.strokeStyle = 'red';
		for(var i in points){
			gfx.beginPath();
			gfx.arc(points[i].x,points[i].y,5,0,Math.PI*2);
			gfx.fill(); gfx.stroke();
		}

		if(minYpt){
			gfx.fillStyle = gfx.strokeStyle = 'green';
			gfx.beginPath();
			gfx.arc(minYpt.x,minYpt.y,5,0,Math.PI*2);
			gfx.fill(); gfx.stroke();
		}

		// show hull
		gfx.fillStyle = gfx.strokeStyle = 'yellow';
		gfx.lineWidth = 3;
		for(i = 0; i < hull.length-1; i++){
			gfx.beginPath();
			gfx.moveTo(hull[i].x, hull[i].y);
			gfx.lineTo(hull[i+1].x, hull[i+1].y);
			gfx.stroke();
		}
	};