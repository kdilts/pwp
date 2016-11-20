
// Kevin Dilts 2016
var canvas; var gfx;
var cwidth; var cheight;
var cwidthold = null; var cheightold = null;

var aDownButton; var aUpButton;
var sDownButton; var sUpButton;
var submitButton;
var clearButton;
var pauseButton;
var pulldown1; var pulldown2;
var angleSlider; var separationSlider;

var centerX; var centerY;
var currentTheta;

var graphData = []; var graphIndex = 0;
var frameIntensity = 0; var maxIntensity = -1;

var data = {
	B:[ '28000 K', '4.9 Solar Radii', 'rgb(111,253,245)' ],
	A:[ '10000 K', '3.0 Solar Radii', 'rgb(0,200,246)'  ],
	F:[ '7500 K', '1.5 Solar Radii', 'rgb(39,253,220)'  ],
	G:[ '6000 K', '1.1 Solar Radii', 'rgb(251,253,80)'  ],
	K:[ '5000 K', '0.9 Solar Radii', 'rgb(253,126,32)'  ],
	M:[ '3500 K', '0.8 Solar Radii', 'rgb(253,22,25)'  ]
};

var currentSep = 14; var currentAngle = 0;
var currentStar1 = 'A'; var currentStar2 = 'B';
var currentTheta = 0;  var step = -.02;
var solarRad = 7;

var playing = true;

window.onload = function(){
	canvas = document.createElement('canvas');
	canvas.setAttribute('style','position:absolute; left:0; top:0; z-index:-1');
	cwidth = canvas.width = window.innerWidth;
	cheight = canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	gfx = canvas.getContext('2d');

	pulldown1 = document.getElementById('pulldown1');
	pulldown2 = document.getElementById('pulldown2');

	angleSlider = document.getElementById('angleSlider');
	separationSlider = document.getElementById('separationSlider');

	aDownButton = document.getElementById('aDownButton');
	aUpButton = document.getElementById('aUpButton');

	sDownButton = document.getElementById('sDownButton');
	sUpButton = document.getElementById('sUpButton');

	submitButton = document.getElementById('submitButton');
	pauseButton = document.getElementById('pauseButton');
	clearButton = document.getElementById('clearButton');

	submitButton.onclick = function(){
		currentStar1 = pulldown1.value;
		currentStar2 = pulldown2.value;

		currentAngle = angleSlider.value;
		currentSep = separationSlider.value;
		currentTheta = 0;
		graphData = [];
		graphIndex = 0;
		maxIntensity = -1;
	}

	pauseButton.onclick = function(){
		if(playing){
			playing = false;
			pauseButton.value = "Play";
		}else{
			playing = true;
			pauseButton.value = "Pause";
		}
	}

	clearButton.onclick = function(){
		currentTheta = 0;
		graphData = [];
		graphIndex = 0;
		maxIntensity = -1;
	}

	aDownButton.onclick = function(){ angleSlider.value--; }
	aUpButton.onclick = function(){ angleSlider.value++; }

	sDownButton.onclick = function(){ separationSlider.value--; }
	sUpButton.onclick = function(){ separationSlider.value++; }

	pulldown1.value = 'A';
	angleSlider.value = 0;
	separationSlider.value = 14;

	setInterval(render,1000/60);
}

window.onresize = function(){ render(); }

render = function(){
	// handle window resize
	if(cwidthold){
		if(cwidthold !== cwidth || cheightold !== cheight){
			clearButton.onclick();
		}

		cwidthold = cwidth;
		cheightold = cheight;

		centerX = cwidth*.32+(cwidth*.65/2);
		centerY = cheight*.1+(cheight*.3/2);
	}

	cwidth = canvas.width = window.innerWidth;
	cheight = canvas.height = window.innerHeight;

	if(!cwidthold){
		cwidthold = cwidth;
		cheightold = cheight;
		centerX = cwidth*.32+(cwidth*.65/2);
		centerY = cheight*.1+(cheight*.3/2);
	}

	// clear
	gfx.fillStyle = 'grey';
	gfx.fillRect(0,0,cwidth,cheight);

	// position elements
	var aButtonTop = 12;
	var sButtonTop = 24;
	var pulldownTop = 30;

	// pulldowns
	pulldown1.setAttribute('style','position:absolute; left:'+(cwidth*.02+gfx.measureText('Star 1').width+20)+'; top:'+pulldownTop+'%');
	pulldown2.setAttribute('style','position:absolute; left:'+(cwidth*.14+gfx.measureText('Star 2').width+20)+'; top:'+pulldownTop+'%');

	// buttons
	gfx.font = '14px verdana';
	var submitWidth = gfx.measureText('Enter Values').width;
	var clearWidth = gfx.measureText('Clear Graph').width;
	var pauseWidth = gfx.measureText('Pause   ').width;
	var upButtonWidth = gfx.measureText('-->  ').width;
	var downButtonWidth = gfx.measureText('<--  ').width;
	submitButton.setAttribute('style',
		'position:absolute; left:'+(cwidth*.02)+'; width:'+submitWidth);
	clearButton.setAttribute('style',
		'position:absolute; left:'+(cwidth*.02+submitWidth+5)+'; width:'+clearWidth);
	pauseButton.setAttribute('style',
		'position:absolute; left:'+(cwidth*.02+submitWidth+clearWidth+10)+'; width:'+pauseWidth);

	aDownButton.setAttribute('style','position:absolute; left:2%; top:'+aButtonTop+'%; width:'+downButtonWidth);
	aUpButton.setAttribute('style','position:absolute; left:'+(cwidth*.02+154+downButtonWidth)+'; top:'+aButtonTop+'%; width:'+upButtonWidth);

	sDownButton.setAttribute('style','position:absolute; left:2%; top:'+sButtonTop+'%; width:'+downButtonWidth);
	sUpButton.setAttribute('style','position:absolute; left:'+(cwidth*.02+154+downButtonWidth)+'; top:'+sButtonTop+'%; width:'+upButtonWidth);

	// sliders
	var sliderLeft = cwidth*.02+downButtonWidth;
	if(!is.ie()){
		angleSlider.setAttribute('style','position:absolute; left:'+sliderLeft+'; top:'+aButtonTop+'%; width: 150');
		separationSlider.setAttribute('style','position:absolute; left:'+sliderLeft+'; top:'+sButtonTop+'%; width: 150');
	}else{
		angleSlider.setAttribute('style','position:absolute; left:'+sliderLeft+'; top:'+(aButtonTop-1.5)+'%; width: 150');
		separationSlider.setAttribute('style','position:absolute; left:'+sliderLeft+'; top:'+(sButtonTop-1.5)+'%; width: 150');
	}

	// text
	gfx.fillStyle = gfx.strokeStyle = 'black';
	gfx.font = '12px verdana';

	gfx.fillText('Angle = '+angleSlider.value + "\xB0",
		cwidth*.02, cheight*.1);

	gfx.fillText('Separation = '+separationSlider.value + " Solar Radii",
		cwidth*.02, cheight*.225);

	gfx.fillText('Star 1:',cwidth*.02, cheight*.3+15);
	gfx.fillText('Star 2:',cwidth*.14, cheight*.3+15);

	gfx.fillText('Current Values:',
		cwidth*.02, cheight*.4);

	gfx.fillText('Star 1:',cwidth*.02, cheight*.45);
	gfx.fillText('Type: '+pulldown1.value,cwidth*.02+20, cheight*.45+16);
	gfx.fillText('Temp: '+data[pulldown1.value][0],cwidth*.02+20, cheight*.45+32);
	gfx.fillText('Radius: '+data[pulldown1.value][1],cwidth*.02+20, cheight*.45+48);

	gfx.fillText('Star 2:',cwidth*.02, cheight*.6);
	gfx.fillText('Type: '+pulldown2.value,cwidth*.02+20, cheight*.6+16);
	gfx.fillText('Temp: '+data[pulldown2.value][0],cwidth*.02+20, cheight*.6+32);
	gfx.fillText('Radius: '+data[pulldown2.value][1],cwidth*.02+20, cheight*.6+48);

	gfx.fillText('Angle of Inclination: ' + currentAngle +'\xB0',cwidth*.02, cheight*.8);
	gfx.fillText('Separation: ' + currentSep + ' Solar Radii',cwidth*.02, cheight*.8+16);

	// graph
	gfx.strokeRect(cwidth*.32,cheight*.45,cwidth*.65,cheight*.45);

	// axis
	gfx.fillText('Theta', cwidth*.65, cheight*.985);

	for(var i = 0; i < 7; i++){
		gfx.fillText(''+i*60, lerp(0,6.1,i,cwidth*.32,cwidth*.97), cheight*.927);
	}

	gfx.save();
	gfx.translate(cwidth*.28, cheight*.75);
	gfx.rotate(-Math.PI/2);
	gfx.fillText('Intensity', 0,0)
	gfx.restore();

	for(var i = 0; i < 6; i++){
		gfx.fillText(''+(i*.2).toFixed(1), cwidth*.29, lerp(0,5,i,cheight*.9,cheight*.45))
	}

	// ticks
	for(var i = 1; i < 6; i++){
		line(cwidth*.32+(cwidth*.65/6)*i, cheight*.45,
			cwidth*.32+(cwidth*.65/6)*i, cheight*.9);
	}

	for(var i = 1; i < 5; i++){
		line(cwidth*.32, cheight*.45+(cheight*.45/5)*i,
			cwidth*.97, cheight*.45+(cheight*.45/5)*i);
	}

	gfx.fillStyle = gfx.strokeStyle = 'grey';
	gfx.fillRect(cwidth*.34, cheight*.47, cwidth*.61, cheight*.41);

	// center point
	gfx.fillStyle = gfx.strokeStyle = 'black';
	arc(cwidth*.32+(cwidth*.65/2), cheight*.1+(cheight*.3/2), 3);

	// stars
	//gfx.strokeRect(cwidth*.32,cheight*.1,cwidth*.65,cheight*.3);

	if(currentSep < (parseFloat(data[currentStar1][1]) + parseFloat(data[currentStar2][1]))){

		currentSep = Math.ceil(parseFloat(data[currentStar1][1]) + parseFloat(data[currentStar2][1])) + .4;
	}

	if(currentTheta+Math.PI/2 > 3*Math.PI/2 || currentTheta+Math.PI/2 < Math.PI/2){
		drawStar1();
		drawStar2();
	}else{
		drawStar2();
		drawStar1();
	}

	count();
	if(maxIntensity < frameIntensity){ maxIntensity = frameIntensity; }

	drawGraph();

	if(playing){
		currentTheta += step;
		if(currentTheta <= 0){
			currentTheta = Math.PI*2;
			graphIndex = 0;
			graphData = [];
		}
	}

}

drawGraph = function(){
	//cwidth*.32,cheight*.45,cwidth*.65,cheight*.45
	var origX = cwidth*.32;
	var origY = cheight*.9;
	var rightEdge = cwidth*.97;
	var topEdge = cheight*.45;
	var graphSizeX = rightEdge - origX;
	var graphSizeY = origY - topEdge;

	if(maxIntensity !== -1){
		// graph bead
		gfx.strokeStyle = gfx.fillStyle = 'black';

		//var beadOffsetX = lerp(Math.PI*2,0,currentTheta,0,500);
		var beadOffsetX = lerp(Math.PI*2,0,currentTheta,0,graphSizeX);
		gfx.beginPath();
		gfx.arc(
			origX + beadOffsetX,

			//origY - lerp(0,maxIntensity,frameIntensity,0,350),
			origY - lerp(0,maxIntensity,frameIntensity,0,graphSizeY),

			2,0,Math.PI*2
		);
		gfx.fill(); gfx.stroke();

		graphData[graphIndex] = [];
		graphData[graphIndex][0] = beadOffsetX;
		graphData[graphIndex][1] = frameIntensity;
		graphIndex++;

		// plot data
		if(graphIndex > 0){
			gfx.save();
			gfx.lineWidth = 2;
			gfx.strokeStyle = 'black';
			gfx.translate(origX, origY);

			gfx.beginPath();
			gfx.moveTo(0,-graphData[0]);

			for(var i = 1; i < graphData.length; i++){
				//gfx.lineTo(graphData[i][0],-lerp(0,maxIntensity,graphData[i][1],0,350));
				gfx.lineTo(graphData[i][0],-lerp(0,maxIntensity,graphData[i][1],0,graphSizeY));
			}
			gfx.stroke();

			gfx.restore();
		}
	}else{
		gfx.save();
		gfx.translate(origX+200,origY-125);
		gfx.rotate(-Math.PI/4);
		gfx.font = '24 px verdana';
		gfx.fillText('Calculating...',0,0);
		gfx.restore();
	}
}

count = function(){
	// count star 1
	var x = centerX + solarRad*(currentSep*(parseFloat(data[currentStar2][1]))/(parseFloat(data[currentStar2][1])+parseFloat(data[currentStar1][1]))) * Math.sin(currentTheta+Math.PI/2) - solarRad*parseFloat(data[currentStar1][1]);

	var y = centerY + solarRad*(currentSep*(parseFloat(data[currentStar2][1]))/(parseFloat(data[currentStar2][1])+parseFloat(data[currentStar1][1]))) * Math.cos(currentTheta+Math.PI/2) * Math.sin(currentAngle*Math.PI/180) - solarRad*parseFloat(data[currentStar1][1]);

	var sz = parseFloat(data[currentStar1][1])*solarRad*2;

	var imgData = gfx.getImageData(x,y,sz,sz).data;

	var c = data[currentStar1][2].substr(4,data[currentStar1][2].length-5);
	var r = parseInt(c.substr(0,c.indexOf(',')))+1;
	var g = parseInt(c.substr(c.indexOf(',')+1, c.lastIndexOf(',')-(c.indexOf(',')+1)));
	var b = parseInt(c.substr(c.lastIndexOf(',')+1,c.length));

	var count1 = 0;
	for (var i = 0, n = imgData.length; i < n; i += 4) {
		if(imgData[i  ] === r){
			if(imgData[i+1] === g){
				if(imgData[i+2] === b){
					count1++;
				};
			};
		};
	}

	// count star 2
	x = centerX + solarRad*(currentSep*(parseFloat(data[currentStar1][1]))/(parseFloat(data[currentStar1][1])+parseFloat(data[currentStar2][1]))) * Math.sin(currentTheta+Math.PI/2+Math.PI) - solarRad*parseFloat(data[currentStar2][1]);

	y = centerY + solarRad*(currentSep*(parseFloat(data[currentStar1][1]))/(parseFloat(data[currentStar1][1])+parseFloat(data[currentStar2][1]))) * Math.cos(currentTheta+Math.PI/2+Math.PI) * Math.sin(currentAngle*Math.PI/180) - solarRad*parseFloat(data[currentStar2][1]);

	sz = parseFloat(data[currentStar2][1])*solarRad*2;

	imgData = gfx.getImageData(x,y,sz,sz).data;

	c = data[currentStar2][2].substr(4,data[currentStar2][2].length-5);
	r = parseInt(c.substr(0,c.indexOf(',')));
	g = parseInt(c.substr(c.indexOf(',')+1, c.lastIndexOf(',')-(c.indexOf(',')+1)));
	b = parseInt(c.substr(c.lastIndexOf(',')+1,c.length));

	var count2 = 0;
	for(i = 0, n = imgData.length; i < n; i += 4) {

		if(imgData[i  ] === r){
			if(imgData[i+1] === g){
				if(imgData[i+2] === b){
					count2++;
				};
			};
		};
	}

	var star1area = Math.floor(Math.pow((parseFloat(data[currentStar1][1])*solarRad),2)*Math.PI);
	var star2area = Math.floor(Math.pow((parseFloat(data[currentStar2][1])*solarRad),2)*Math.PI);

	frameIntensity =
		(count1*(parseInt(data[currentStar1][0])/parseInt(data[currentStar2][0])))/(star1area + star2area)
		+ (count2*(parseInt(data[currentStar2][0])/parseInt(data[currentStar1][0])))/(star1area + star2area);
}

drawStar1 = function(){
	var c = data[currentStar1][2].substr(4,data[currentStar1][2].length-5);
	var r = parseInt(c.substr(0,c.indexOf(',')))+1;
	var g = parseInt(c.substr(c.indexOf(',')+1, c.lastIndexOf(',')-(c.indexOf(',')+1)));
	var b = parseInt(c.substr(c.lastIndexOf(',')+1,c.length));

	// star 1
	gfx.fillStyle = gfx.strokeStyle = 'rgb('+r+','+g+','+b+')';
	gfx.beginPath();
	gfx.arc(
		centerX + solarRad*(currentSep*(parseFloat(data[currentStar2][1]))/(parseFloat(data[currentStar1][1])+parseFloat(data[currentStar2][1]))) * Math.sin(currentTheta+Math.PI/2),
		centerY + solarRad*(currentSep*(parseFloat(data[currentStar2][1]))/(parseFloat(data[currentStar1][1])+parseFloat(data[currentStar2][1]))) * Math.cos(currentTheta+Math.PI/2) * Math.sin(currentAngle*Math.PI/180),
		parseFloat(data[currentStar1][1])*solarRad,
		0,
		Math.PI*2
	);
	gfx.fill(); gfx.stroke();
}

drawStar2 = function(){
	// star 2
	gfx.fillStyle = gfx.strokeStyle = data[currentStar2][2];
	gfx.beginPath();
	gfx.arc(
		centerX + solarRad*(currentSep*(parseFloat(data[currentStar1][1]))/(parseFloat(data[currentStar1][1])+parseFloat(data[currentStar2][1]))) * Math.sin(currentTheta+Math.PI+Math.PI/2),
		centerY + solarRad*(currentSep*(parseFloat(data[currentStar1][1]))/(parseFloat(data[currentStar1][1])+parseFloat(data[currentStar2][1]))) * Math.cos(currentTheta+Math.PI+Math.PI/2) * Math.sin(currentAngle*Math.PI/180),
		parseFloat(data[currentStar2][1])*solarRad,
		0,
		Math.PI*2
	);
	gfx.fill(); gfx.stroke();
}

arc = function(x,y,r){
	gfx.beginPath();
	gfx.arc(x,y,r,0,Math.PI*2);
	gfx.fill(); gfx.stroke();
}

line = function(x1,y1,x2,y2){
	gfx.beginPath();
	gfx.moveTo(x1,y1);
	gfx.lineTo(x2,y2);
	gfx.stroke();
}

lerp = function(oldMin,oldMax,oldVal,newMin,newMax){
	return (oldVal-oldMin)/(oldMax-oldMin)*(newMax-newMin)+newMin;
}

dist = function(v1,v2){ return mag(add(v1,neg(v2))); }

vec2 = function(x,y){ this.x = x; this.y = y; }
add = function(v1, v2){ return new vec2(v1.x+v2.x, v1.y+v2.y); }
sub = function(v1, v2){ return new vec2(v1.x-v2.x, v1.y-v2.y); }
neg = function(v){ return new vec2(-v.x, -v.y); }
mag = function(v){ return Math.sqrt(Math.pow(v.x,2) + Math.pow(v.y,2)); }
dot = function(v1,v2){ return v1.x*v2.x + v1.y*v2.y; }
unit = function(v){ return new vec2(v.x/mag(v), v.y/mag(v)); }
mult = function(v,s){ return new vec2(v.x*s, v.y*s); }

