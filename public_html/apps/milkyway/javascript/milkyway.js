// Kevin Dilts 2016
window.onload = function() {
	window.onresize = function() {
		renderer.setSize(window.innerWidth * .77, window.innerHeight * .95);
		camera.aspect = window.innerWidth * .77 / window.innerHeight * .95;
		camera.updateProjectionMatrix();
	};

	Math.randomGaussian = function(mean, standardDeviation) {

		if(!mean) {
			mean = 0.0;
		}
		if(!standardDeviation) {
			standardDeviation = 1.0;
		}

		if(Math.randomGaussian.nextGaussian !== undefined) {
			var nextGaussian = Math.randomGaussian.nextGaussian;
			delete Math.randomGaussian.nextGaussian;
			return (nextGaussian * standardDeviation) + mean;
		} else {
			var v1, v2, s, multiplier;
			do {
				v1 = 2 * Math.random() - 1; // between -1 and 1
				v2 = 2 * Math.random() - 1; // between -1 and 1
				s = v1 * v1 + v2 * v2;
			} while(s >= 1 || s == 0);
			multiplier = Math.sqrt(-2 * Math.log(s) / s);
			Math.randomGaussian.nextGaussian = v2 * multiplier;
			return (v1 * multiplier * standardDeviation) + mean;
		}

	};

	document.documentElement.style.overflow = 'hidden';  // firefox, chrome
	document.body.scroll = "no"; // ie only

// pop1 - light blue
// bar - white
// pop2 - orange
// open - green
// globular - brownish yellow
// gaseous - pinkish
// sun - yellow

//var sceneWidth = 1024*.975; var sceneHeight = 768*.95;
	var sceneWidth = window.innerWidth * .77;
	var sceneHeight = window.innerHeight * .95;

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, sceneWidth / sceneHeight, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	var controls = new THREE.OrbitControls(camera);
	controls.target.z = 0;

	var dist = 10;
	var height = 15;
	var theta = 0;

	renderer.setSize(sceneWidth, sceneHeight);
	renderer.domElement.setAttribute("style", "position:absolute; top:3px; left:0px; z-index:-1;");
	document.body.appendChild(renderer.domElement);

	var rotate = function() {
		camera.position.set(Math.cos(theta) * dist, height, Math.sin(theta) * dist);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
		camera.position.setLength(dist);
	};

	rotate();

	var axisHelper = new THREE.AxisHelper(15); // mesh 0
	scene.add(axisHelper);
	axisHelper.visible = false;

	var addStar = function(x, y, z, r, c) {
		var geometry = new THREE.SphereGeometry(r, 5, 5);
		var material = new THREE.MeshBasicMaterial({color: c});
		var star = new THREE.Mesh(geometry, material);
		star.position.x = x;
		star.position.y = y;
		star.position.z = z;
		scene.add(star);
	};

	var cylindricalToXYZ = function(r, theta, z) {
		return [r * Math.cos(theta), z, r * Math.sin(theta)];
	};

// sun -- mesh 1
	addStar(3.25, 0, 2, .35 / 4, 0xffff00);

// population 1
	var pop1Start = 2;
	var pop1End = 2;
	var twist = 0;
	var twistCount = 0;
	for(var r = 1; r < 6; r += .05) {
		for(var t = 0; t < Math.PI * 2; t += Math.PI * 2 / 4) {
			var tempCoords = cylindricalToXYZ(r, t - twist, 0);
			addStar(
				tempCoords[0] + (Math.random() * (.2 * twistCount) - (.1 * twistCount)),
				tempCoords[1] + (Math.random() * .05 - .025),
				tempCoords[2] + (Math.random() * (.2 * twistCount) - (.1 * twistCount)),
				.35 / 16,
				0x26d9c7 //light blue
			);
			pop1End++;
		}
		twist += Math.PI / 100;
		twistCount += .075;
	}

	twist = 0;
	twistCount = 0;
	for(var r = 1; r < 3; r += .05) {
		for(var t = 0; t < Math.PI * 2; t += Math.PI * 2 / 4) {
			var tempCoords = cylindricalToXYZ(r, t - twist, 0);
			addStar(
				tempCoords[0] + Math.random() * .3 - .15,
				tempCoords[1] + Math.random() * .05 - .025,
				tempCoords[2] + Math.random() * .3 - .15,
				.35 / 16,
				0x26d9c7 // light blue
			);
			pop1End++;
		}
		twist += Math.PI / 100;
		twistCount += .075;
	}

// galactic bar
	var barStart = pop1End;
	var barEnd = barStart;
	var barRot = Math.PI / 2 * 3;
	for(var i = 0; i < 100; i++) {
		var tempX = Math.randomGaussian(0, .01) * 70;
		var tempY = Math.randomGaussian(0, .01) * 12;
		var tempZ = Math.randomGaussian(0, .01) * 20;
		addStar(
			tempX * Math.cos(barRot) - tempZ * Math.sin(barRot),
			tempY,
			tempX * Math.sin(barRot) + tempZ * Math.cos(barRot),
			.35 / 16,
			0xffffff // white
		);
		barEnd++;
	}

// population 2 stars
	var pop2Start = barEnd;
	var pop2End = pop2Start;
	for(var i = 0; i < 250; i++) {
		var tempX = Math.randomGaussian(0, .01) * 200;
		var tempY = Math.randomGaussian(0, .01) * 60;
		var tempZ = Math.randomGaussian(0, .01) * 200;
		addStar(tempX, tempY, tempZ, .35 / 16, 0xfcab03); // orange
		pop2End++;
	}

	for(var i = 0; i < 450; i++) {
		var tempX = Math.randomGaussian(0, .01) * 30;
		var tempY = Math.randomGaussian(0, .01) * 12;
		var tempZ = Math.randomGaussian(0, .01) * 30;
		addStar(tempX, tempY, tempZ, .35 / 16, 0xfcab03); // orange
		pop2End++;
	}

	var render = function() {
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	};

// open cluster
	var openStart = pop2End;
	var openEnd = pop2End;
	var twist = 0;
	var twistCount = 0;
	var alt = 0;
	var spread = .4;
	for(var z = 0; z < 2; z++) {
		for(var r = 1; r < 6; r += .05) {
			for(var t = 0; t < Math.PI * 2; t += Math.PI * 2 / 4) {
				if(alt == 0) {
					var tempCoords = cylindricalToXYZ(r, t - twist, 0);
					addStar(
						tempCoords[0] + (Math.random() * (spread * twistCount) - (spread / 2 * twistCount)),
						tempCoords[1] + (Math.random() * .05 - .025),
						tempCoords[2] + (Math.random() * (spread * twistCount) - (spread / 2 * twistCount)),
						.35 / 12,
						0x00ff00 // green
					);
					openEnd++;
					alt++;
				} else if(alt == 8) {
					alt = 0;
				} else {
					alt++;
				}
			}
			twist += Math.PI / 85;
			twistCount += .075;
		}
		twist = 0;
		twistCount = 0;
	}

	twist = 0;
	twistCount = 0;
	alt = 0;
	for(var z = 0; z < 3; z++) {
		for(var r = 1; r < 3; r += .05) {
			for(var t = 0; t < Math.PI * 2; t += Math.PI * 2 / 4) {
				if(alt == 0) {
					var tempCoords = cylindricalToXYZ(r, t - twist, 0);
					addStar(
						tempCoords[0] + Math.random() * spread - spread / 2,
						tempCoords[1] + Math.random() * .05 - .025,
						tempCoords[2] + Math.random() * spread - spread / 2,
						.35 / 12,
						0x00ff00 // green
					);
					openEnd++;
					alt++;
				} else if(alt == 8) {
					alt = 0;
				} else {
					alt++;
				}
			}
			twist += Math.PI / 85;
			twistCount += .075;
		}
		twist = 0;
		twistCount = 0;
	}

// globular
	var globStart = openEnd;
	var globEnd = globStart;
	for(var i = 0; i < 50; i++) {
		var tempX = Math.randomGaussian(0, .01) * 200 * 2;
		var tempY = Math.randomGaussian(0, .01) * 60 * 2;
		var tempZ = Math.randomGaussian(0, .01) * 200 * 2;
		addStar(tempX, tempY, tempZ, .35 / 8, 0xbeba0e); // brownish yellow
		globEnd++;
	}

	for(var i = 0; i < 100; i++) {
		var tempX = Math.randomGaussian(0, .01) * 30 * 2;
		var tempY = Math.randomGaussian(0, .01) * 12 * 2;
		var tempZ = Math.randomGaussian(0, .01) * 30 * 2;
		addStar(tempX, tempY, tempZ, .35 / 8, 0xbeba0e); // brownish yellow
		globEnd++;
	}


// gaseous
	var gasStart = globEnd;
	var gasEnd = globEnd;
	var twist = 0;
	var twistCount = 0;
	var alt = 0;
	for(var z = 0; z < 2; z++) {
		for(var r = 1; r < 6; r += .05) {
			for(var t = 0; t < Math.PI * 2; t += Math.PI * 2 / 4) {
				if(alt == 0) {
					var tempCoords = cylindricalToXYZ(r, t - twist, 0);
					addStar(
						tempCoords[0] + (Math.random() * (.2 * twistCount) - (.1 * twistCount)),
						tempCoords[1] + (Math.random() * .05 - .025),
						tempCoords[2] + (Math.random() * (.2 * twistCount) - (.1 * twistCount)),
						.35 / 16,
						0xffb3d9 // pinkish
					);
					gasEnd++;
					alt++;
				} else if(alt == 8) {
					alt = 0;
				} else {
					alt++;
				}
			}
			twist += Math.PI / 100;
			twistCount += .075;
		}
		twist = 0;
		twistCount = 0;
	}

	twist = 0;
	twistCount = 0;
	alt = 0;
	for(var z = 0; z < 3; z++) {
		for(var r = 1; r < 3; r += .05) {
			for(var t = 0; t < Math.PI * 2; t += Math.PI * 2 / 4) {
				if(alt == 0) {
					var tempCoords = cylindricalToXYZ(r, t - twist, 0);
					addStar(
						tempCoords[0] + Math.random() * .3 - .15,
						tempCoords[1] + Math.random() * .05 - .025,
						tempCoords[2] + Math.random() * .3 - .15,
						.35 / 16,
						0xffb3d9 // pinkish
					);
					gasEnd++;
					alt++;
				} else if(alt == 8) {
					alt = 0;
				} else {
					alt++;
				}
			}
			twist += Math.PI / 100;
			twistCount += .075;
		}
		twist = 0;
		twistCount = 0;
		// check boxes
		var p1 = document.getElementById('p1');
	}


	var br = document.getElementById('br');
	var p2 = document.getElementById('p2');
	var oc = document.getElementById('oc');
	var gc = document.getElementById('gc');
	var neb = document.getElementById('neb');
	var sunBox = document.getElementById('sun');

	var boxes = [p1, br, p2, oc, gc, neb, sunBox];

	sunBox.addEventListener('click', function() {
		if(sunBox.checked) {
			scene.children[1].visible = true;
		}
		else {
			scene.children[1].visible = false;
		}
	});

	p1.addEventListener('click', function() {
		if(p1.checked) {
			for(var i = pop1Start; i < pop1End; i++) {
				scene.children[i].visible = true;
			}
		}
		else {
			for(var i = pop1Start; i < pop1End; i++) {
				scene.children[i].visible = false;
			}
		}
	});

	br.addEventListener('click', function() {
		if(br.checked) {
			for(var i = barStart; i < barEnd; i++) {
				scene.children[i].visible = true;
			}
		}
		else {
			for(var i = barStart; i < barEnd; i++) {
				scene.children[i].visible = false;
			}
		}
	});

	p2.addEventListener('click', function() {
		if(p2.checked) {
			for(var i = pop2Start; i < pop2End; i++) {
				scene.children[i].visible = true;
			}
		}
		else {
			for(var i = pop2Start; i < pop2End; i++) {
				scene.children[i].visible = false;
			}
		}
	});

	oc.addEventListener('click', function() {
		if(oc.checked) {
			for(var i = openStart; i < openEnd; i++) {
				scene.children[i].visible = true;
			}
		}
		else {
			for(var i = openStart; i < openEnd; i++) {
				scene.children[i].visible = false;
			}
		}
	});

	gc.addEventListener('click', function() {
		if(gc.checked) {
			for(var i = globStart; i < globEnd; i++) {
				scene.children[i].visible = true;
			}
		}
		else {
			for(var i = globStart; i < globEnd; i++) {
				scene.children[i].visible = false;
			}
		}
	});

	neb.addEventListener('click', function() {
		if(neb.checked) {
			for(var i = gasStart; i < gasEnd; i++) {
				scene.children[i].visible = true;
			}
		}
		else {
			for(var i = gasStart; i < gasEnd; i++) {
				scene.children[i].visible = false;
			}
		}
	});

// rotate buttons
	var rotateUp = document.getElementById('rotateUp');
	var rotateDown = document.getElementById('rotateDown');
	var rotateLeft = document.getElementById('rotateLeft');
	var rotateRight = document.getElementById('rotateRight');

	rotateUp.addEventListener('click', function() {
		controls.rotateUp(Math.PI / 9);
		controls.update();
	});

	rotateDown.addEventListener('click', function() {
		controls.rotateUp(-Math.PI / 9);
		controls.update();
	});

	rotateLeft.addEventListener('click', function() {
		controls.rotateLeft(Math.PI / 9);
		controls.update();
	});

	rotateRight.addEventListener('click', function() {
		controls.rotateLeft(-Math.PI / 9);
		controls.update();
	});

// move buttons
	var moveUp = document.getElementById('moveUp');
	var moveDown = document.getElementById('moveDown');
	var moveLeft = document.getElementById('moveLeft');
	var moveRight = document.getElementById('moveRight');

	moveUp.addEventListener('click', function() {
		controls.panUp(-1);
		controls.update();
	});

	moveDown.addEventListener('click', function() {
		controls.panUp(1);
		controls.update();
	});

	moveLeft.addEventListener('click', function() {
		controls.panLeft(-1);
		controls.update();
	});

	moveRight.addEventListener('click', function() {
		controls.panLeft(1);
		controls.update();
	});

// zoom buttons
	var zoomIn = document.getElementById('zoomIn');
	var zoomOut = document.getElementById('zoomOut');

	zoomIn.addEventListener('click', function() {
		controls.dollyIn(1.1);
		controls.update();
	});

	zoomOut.addEventListener('click', function() {
		controls.dollyOut(1.1);
		controls.update();
	});

	var buttons = [
		rotateUp, rotateDown, rotateLeft, rotateRight,
		moveUp, moveDown, moveLeft, moveRight,
		zoomIn, zoomOut
	];

	render();
};