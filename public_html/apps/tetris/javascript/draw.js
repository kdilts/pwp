setColor = function(c){ gfx.fillStyle = gfx.strokeStyle = c; }
fillStyle = function(c){ gfx.fillStyle = c; }
strokeStyle = function(c){ gfx.strokeStyle = c; }

arc = function(x,y,r,f){
	gfx.beginPath();
	gfx.arc(x,y,r,0,Math.PI*2);
	if(f){ gfx.fill(); }
	gfx.stroke();
}

line = function(x1,y1,x2,y2){
	gfx.beginPath();
	gfx.moveTo(x1,y1);
	gfx.lineTo(x2,y2);
	gfx.stroke();
}

box = function(x,y,w,h,f){
	if(f){
		gfx.fillRect(x,y,w,h);
	}else{
		gfx.strokeRect(x,y,w,h);
	}
}

text = function(str,x,y){ gfx.fillText(str,x,y); }