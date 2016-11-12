var canvas; var gfx;
var cwidth; var cheight;

var foodList;
var player;

var keyup = false;
var keylf = false; var keyrt = false;
var keyr = false;
var resetlock = false;

window.onkeydown = function(e){
	if(e.which == 37){ keylf = true; }
	if(e.which == 38){ keyup = true; }
	if(e.which == 39){ keyrt = true; }
	if(e.which == 82){ keyr = true; }
};

window.onkeyup = function(e){
	if(e.which == 37){ keylf = false; }
	if(e.which == 38){ keyup = false; }
	if(e.which == 39){ keyrt = false; }
	if(e.which == 82){ keyr = false; resetlock = false; }
};

window.onresize = function(){
	cwidth = canvas.width = window.innerWidth*.8;
	cheight = canvas.height = window.innerHeight*.8;
};

window.onload = function(){
	canvas = document.getElementById('mycanvas');
	cwidth = canvas.width = window.innerWidth*.8;
	cheight = canvas.height = window.innerHeight*.8;
	gfx = canvas.getContext('2d');

	init();

	setInterval(render,1000/60);
};

init = function(){
	player = new snake(cwidth/2, cheight/2);
	player.grow();
	player.grow();
	player.grow();
	player.grow();
	player.grow();
	player.grow();
	player.grow();
	player.grow();

	foodList = [];
	foodList.push(new food(Math.random()*cwidth, Math.random()*cheight));
	foodList.push(new food(Math.random()*cwidth, Math.random()*cheight));
	foodList.push(new food(Math.random()*cwidth, Math.random()*cheight));
	foodList.push(new food(Math.random()*cwidth, Math.random()*cheight));
};

render = function(){
	// reset
	if(keyr && !resetlock){
		resetlock = true;
		init();
	}

	// clear
	gfx.fillStyle = 'grey';
	gfx.fillRect(0,0,cwidth,cheight);

	// food
	for(var i in foodList){
		if(foodList[i].remove){
			foodList.splice(i,1);
			foodList.push(new food(Math.random()*cwidth,Math.random()*cheight));
		}
	}
	for(i in foodList){ foodList[i].draw(); }

	// snake
	player.draw();

	// collisions
	// walls
	if(player.pos.x < 5 || player.pos.x > cwidth-5){ player.vel = new vec2(0,0); }
	if(player.pos.y < 5 || player.pos.y > cheight-5){ player.vel = new vec2(0,0); }

	// food
	for(i in foodList){
		if(mag(sub(new vec2(foodList[i].x,foodList[i].y), player.pos)) < 5){
			foodList[i].eat();
			player.grow();
		}
	}
};

snake = function(x,y){
	this.pos = new vec2(x,y);
	this.vel = new vec2(1,0);
	this.fast = false;
	this.followers = [];

	this.grow = function(){
		var p;
		if(this.followers.length > 0){
			p = this.followers[this.followers.length-1].pos;
		}else{
			p = this.pos;
		}
		this.followers.push(new this.follower(p.x, p.y));
	};

	this.follower = function(x,y){
		this.pos = new vec2(x,y);
		this.adding = true;
		this.c = Math.floor(Math.random()*2);

		this.draw = function(){
			if(this.c == 0){
				gfx.fillStyle = 'yellow';
			}else{
				gfx.fillStyle = 'black';
			}
			gfx.strokeStyle = 'black';

			gfx.beginPath();
			gfx.arc(this.pos.x,this.pos.y,5,0,Math.PI*2);
			gfx.fill(); gfx.stroke();
		}
	};

	this.update = function(){
		// update head position
		this.pos = add(this.pos, this.vel);

		// update follower positions
		for(var i in this.followers){
			if(i == 0){
				var dist = mag(sub(this.followers[i].pos, this.pos));
				if(dist > 12){
					var vel = sub(this.followers[i].pos, this.pos);
					vel = neg(unit(vel));
					if(this.fast){ vel = mult(vel,2); }
					this.followers[i].pos = add(this.followers[i].pos,vel);
					this.followers[i].adding = false;
				}
			}else{
				var dist = mag(sub(this.followers[i].pos, this.followers[i-1].pos));
				if(dist > 12){
					var vel = sub(this.followers[i].pos, this.followers[i-1].pos);
					var vel = neg(unit(vel));
					if(this.fast){ vel = mult(vel,2); }
					this.followers[i].pos = add(this.followers[i].pos,vel);
					this.followers[i].adding = false;
				}
			}
		}

		// check self collision
		for(i in this.followers){
			if(mag(sub(this.pos,this.followers[i].pos)) < 5){
				if(!this.followers[i].adding){
					this.vel = new vec2(0,0);
				}
			}
		}

		// handle keyboard input
		if(keylf){ this.vel = rot(this.vel,-Math.PI/180*2); }
		if(keyrt){ this.vel = rot(this.vel,Math.PI/180*2); }
		if(keyup && !this.fast){
			this.fast = true;
			this.vel = mult(this.vel,2);
		}
		if(!keyup && this.fast){
			this.fast = false;
			this.vel = mult(this.vel,.5);
		}
	};

	this.draw = function(){
		gfx.fillStyle = 'yellow';
		gfx.strokeStyle = 'black';

		// draw head
		gfx.beginPath();
		gfx.arc(this.pos.x,this.pos.y,5,0,Math.PI*2);
		gfx.fill(); gfx.stroke();

		gfx.fillStyle = 'black';
		gfx.save();
		gfx.translate(this.pos.x,this.pos.y);
		var tempV = rot(mult(unit(this.vel),4),Math.PI/2);

		gfx.beginPath();
		gfx.arc(tempV.x,tempV.y,2,0,Math.PI*2);
		gfx.fill(); gfx.stroke();

		gfx.beginPath();
		gfx.arc(-tempV.x,-tempV.y,2,0,Math.PI*2);
		gfx.fill(); gfx.stroke();
		gfx.restore();

		// draw body
		for(var i in this.followers){
			this.followers[i].draw();
		}

		this.update();
	}
};

food = function(x,y){
	this.x = x; this.y = y;
	this.remove = false;

	this.eat = function(){ this.remove = true; };

	this.draw = function(){
		gfx.fillStyle = 'red';
		gfx.strokeStyle = 'black';
		gfx.beginPath();
		gfx.arc(this.x,this.y,5,0,Math.PI*2);
		gfx.fill(); gfx.stroke();
	}
};

lerp = function(oldMin,oldMax,oldVal,newMin,newMax){
	return (oldVal-oldMin)/(oldMax-oldMin)*(newMax-newMin)+newMin;
};

vec2 = function(x,y){ this.x = x; this.y = y; };
add = function(v1, v2){ return new vec2(v1.x+v2.x, v1.y+v2.y); };
sub = function(v1, v2){ return new vec2(v1.x-v2.x, v1.y-v2.y); };
neg = function(v){ return new vec2(-v.x, -v.y); };
mag = function(v){ return Math.sqrt(Math.pow(v.x,2) + Math.pow(v.y,2)); };
dot = function(v1,v2){ return v1.x*v2.x + v1.y*v2.y; };
unit = function(v){ return new vec2(v.x/mag(v), v.y/mag(v)); };
mult = function(v,s){ return new vec2(v.x*s, v.y*s); };

rot = function(v,r){
	return new vec2(
		v.x*Math.cos(r) - v.y*Math.sin(r),
		v.x*Math.sin(r) + v.y*Math.cos(r)
	);
};