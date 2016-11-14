// Kevin Dilts 2016
window.onload = function(){

	window.onresize = function() {
		canvas.width = window.innerWidth * .70;
		canvas.height = window.innerHeight * .95 + 1;

		renderer.setSize(window.innerWidth * .70, window.innerHeight * .95);
		camera.aspect = window.innerWidth * .70 / window.innerHeight * .95;
		camera.updateProjectionMatrix();
	}

// create canvas for text label overlay
	var canvas = document.createElement('canvas');
	canvas.width = window.innerWidth * .70;
	canvas.height = window.innerHeight * .95 + 1;
	canvas.style.zIndex = 1;
	canvas.style.position = 'absolute';
	canvas.style.left = 0;
	canvas.style.top = 3;
	document.body.appendChild(canvas);
	var gfx = canvas.getContext('2d');

// 3js setup
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(
		75, window.innerWidth * .70 / window.innerHeight * .95, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();

	var controls = new THREE.OrbitControls(camera, canvas);
	controls.target.z = 0;

// menu setup
	var spdSlider = document.getElementById('slider');
	var spdBox = document.getElementById('simSpeed');
	var pullDown = document.getElementById('planetSelect');

	var upButton = document.getElementById('up');
	var leftButton = document.getElementById('left');
	var rightButton = document.getElementById('right');
	var downButton = document.getElementById('down');

	var zInButton = document.getElementById('zoomIn');
	var zOutButton = document.getElementById('zoomOut');

	var ringBoxes = [];
	ringBoxes.push(document.getElementById('mercuryRingBox'));
	ringBoxes.push(document.getElementById('venusRingBox'));
	ringBoxes.push(document.getElementById('earthRingBox'));
	ringBoxes.push(document.getElementById('marsRingBox'));
	ringBoxes.push(document.getElementById('jupiterRingBox'));
	ringBoxes.push(document.getElementById('saturnRingBox'));
	ringBoxes.push(document.getElementById('uranusRingBox'));
	ringBoxes.push(document.getElementById('neptuneRingBox'));
	ringBoxes.push(document.getElementById('plutoRingBox'));
	ringBoxes.push(document.getElementById('halleyRingBox'));
	ringBoxes.push(document.getElementById('erisRingBox'));

	var ringCheckAllButton = document.getElementById('ringCheckAllButton');
	var ringUncheckAllButton = document.getElementById('ringUncheckAllButton');

	var tagBoxes = [];
	tagBoxes.push(document.getElementById('mercuryTagBox'));
	tagBoxes.push(document.getElementById('venusTagBox'));
	tagBoxes.push(document.getElementById('earthTagBox'));
	tagBoxes.push(document.getElementById('marsTagBox'));
	tagBoxes.push(document.getElementById('jupiterTagBox'));
	tagBoxes.push(document.getElementById('saturnTagBox'));
	tagBoxes.push(document.getElementById('uranusTagBox'));
	tagBoxes.push(document.getElementById('neptuneTagBox'));
	tagBoxes.push(document.getElementById('plutoTagBox'));
	tagBoxes.push(document.getElementById('halleyTagBox'));
	tagBoxes.push(document.getElementById('erisTagBox'));

	var tagCheckAllButton = document.getElementById('tagCheckAllButton');
	var tagUncheckAllButton = document.getElementById('tagUncheckAllButton');

	pullDown.onchange = function() {
	}

	if(!is.ie()) {
		spdSlider.oninput = function() {
			console.log('slider');
			spdBox.value = spdSlider.value;
			const2 = const2orig * parseFloat(spdSlider.value);
		}
	} else {
		spdSlider.onchange = function() {
			console.log('slider');
			spdBox.value = spdSlider.value;
			const2 = const2orig * parseFloat(spdSlider.value);
		}
	}

	upButton.onclick = function() {
		controls.rotateUp(Math.PI / 180 * 5);
		controls.update();
	}

	leftButton.onclick = function() {
		controls.rotateLeft(Math.PI / 180 * 5);
		controls.update();
	}

	rightButton.onclick = function() {
		controls.rotateLeft(-Math.PI / 180 * 5);
		controls.update();
	}

	downButton.onclick = function() {
		controls.rotateUp(-Math.PI / 180 * 5);
		controls.update();
	}

	zInButton.onclick = function() {
		controls.dollyIn(1.1);
		controls.update();
	}

	zOutButton.onclick = function() {
		controls.dollyOut(1.1);
		controls.update();
	}

	ringCheckAllButton.onclick = function() {
		for(var p in ringBoxes) {
			ringBoxes[p].checked = true;
		}
	}

	ringUncheckAllButton.onclick = function() {
		for(var p in ringBoxes) {
			ringBoxes[p].checked = false;
		}
	}

	tagCheckAllButton.onclick = function() {
		for(var p in tagBoxes) {
			tagBoxes[p].checked = true;
		}
	}

	tagUncheckAllButton.onclick = function() {
		for(var p in tagBoxes) {
			tagBoxes[p].checked = false;
		}
	}

// camera variables
	var dist = 5;
	var height = 5;
	var spd = .0175;
	var camTheta = spd * 45;

// planet variables
	var t = 0;
	var deltaT = 1000 / 60;
	var theta = [];
	var deltaTheta = [];
	var r = [];
	var const2orig = 0.001;
	var const2 = 0.001; // const1 isn't used. name remains const2 for consistency with formulas given

	var planets = [];
	var planetScreenCoords = [];

	rToD = Math.PI / 180;
	var planetData = [
		{id: 'Mercury', semimajor: .387, ecc: .206, i: 7 * rToD, w: 48 * rToD},
		{id: 'Venus', semimajor: .723, ecc: .007, i: 3.4 * rToD, w: 77 * rToD},
		{id: 'Earth', semimajor: 1.0, ecc: .017, i: 0 * rToD, w: 0 * rToD},
		{id: 'Mars', semimajor: 1.52, ecc: .093, i: 1.85 * rToD, w: 49.6 * rToD},
		{id: 'Jupiter', semimajor: 5.2, ecc: .048, i: 1.3 * rToD, w: 100 * rToD},
		{id: 'Saturn', semimajor: 9.55, ecc: .056, i: 2.5 * rToD, w: 114 * rToD},
		{id: 'Uranus', semimajor: 19.2, ecc: .046, i: .77 * rToD, w: 74 * rToD},
		{id: 'Neptune', semimajor: 30.1, ecc: .009, i: 1.7 * rToD, w: 131.7 * rToD},
		{id: 'Pluto', semimajor: 39.7, ecc: .252, i: 17 * rToD, w: 110 * rToD},
		{id: 'Halley', semimajor: 17.9, ecc: .967, i: 162 * rToD, w: 58.4 * rToD},
		{id: 'Eris', semimajor: 67.7, ecc: .441, i: 44 * rToD, w: 35.9 * rToD}
	]

//// build variable arrays that will represent the state of each planet
	for(var p = 0; p < planetData.length; p++) {
		r[p] = planetData[p].semimajor * (1 - planetData[p].ecc);
		theta[p] = 0;
		deltaTheta[p] = 0;
	}

//// create orbit rings and add them to the scene
	var lines = [];

	var material = new THREE.LineBasicMaterial({color: 0xffffff});

	for(var p = 0; p < planetData.length; p++) {
		var geometry = new THREE.Geometry();
		var ringTheta = 0;
		var ringDeltaTheta = 0;
		var a = planetData[p].semimajor;
		var ecc = planetData[p].ecc;

		var ringR = a * (1 - ecc);

		while(ringTheta < Math.PI * 2.1) {
			if(p < 3) {
				ringDeltaTheta = (const2 * 2) / (ringR * ringR) * deltaT;
			} else {
				ringDeltaTheta = (const2 * 10) / (ringR * ringR) * deltaT;
			}
			ringTheta = ringTheta + ringDeltaTheta;
			ringR = a * (1 - Math.pow(ecc, 2)) / (1 + ecc * Math.cos(ringTheta));

			var ptx =
				ringR * Math.cos(ringTheta - planetData[p].w);

			var ptz =
				ringR * Math.sin(ringTheta - planetData[p].w);

			var pty =
				ringR * Math.sin(planetData[p].i) * Math.sin(ringTheta - planetData[p].w);

			geometry.vertices.push(new THREE.Vector3(ptx, pty, ptz));
		}
		//lines.push(geometry);
		lines.push(new THREE.Line(geometry, material));
	}

//for(var p in lines){ scene.add(new THREE.Line(lines[p], material)); }
	for(var p in lines) {
		scene.add(lines[p]);
	}
////

	renderer.setSize(window.innerWidth * .70, window.innerHeight * .95);
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.left = 0;
	renderer.domElement.style.top = 3;
//renderer.domElement.style.zIndex = -2;
	document.body.appendChild(renderer.domElement);

// function for determining if a point is in front of or behind plane
	var zTest = function(cam, lookPt, testPt) {
		var p1 = cam.position;
		var p2 = lookPt;
		var p3 = testPt;

		return (p2.x - p1.x) * (p3.x - p1.x)
			+ (p2.y - p1.y) * (p3.y - p1.y)
			+ (p2.z - p1.z) * (p3.z - p1.z);
	}

//// setup 3js mouse camera controls
	var rotate = function() {
		camera.position.set(Math.cos(camTheta) * dist, height, Math.sin(camTheta) * dist);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
		camera.position.setLength(dist);
	}

	rotate();
////

	var mx = -1;
	var my = -1;
	window.onmousemove = function(e) {
		mx = e.x;
		my = e.y;
		if(!mx) {
			mx = e.clientX;
			my = e.clientY;
		}
	}

	var projector = new THREE.Projector();

	var render = function() {
		requestAnimationFrame(render);

		renderer.render(scene, camera);

		//// update the camera target
		if(parseInt(pullDown.value) === 0) {
			controls.target.set(0, 0, 0);
		} else {
			controls.target.copy(
				planets[parseInt(pullDown.value) - 1].position
			);
		}
		controls.update();
		////

		//// update the position of each planet
		for(var p = 0; p < planetData.length; p++) {
			//deltaTheta[p] = const2/(r[p]*r[p])*deltaT;
			//deltaTheta[p] = const2/(Math.pow(r[p],3/2))*deltaT;
			deltaTheta[p] =
				(const2 * (
					Math.sqrt(planetData[p].semimajor *
						(1 - Math.pow(planetData[p].ecc, 2)))) /
				(Math.pow(r[p], 2))) * deltaT;

			if(planetData[p].id === 'Halley') {
				deltaTheta[p] *= -1;
			}
			theta[p] = theta[p] + deltaTheta[p];
			if(theta[p] >= Math.PI * 2) {
				theta[p] -= Math.PI * 2;
			}
			r[p] = planetData[p].semimajor * (1 - Math.pow(planetData[p].ecc, 2)) / (1 + planetData[p].ecc * Math.cos(theta[p]));

			planets[p].position.x = r[p] * Math.cos(theta[p] - planetData[p].w);
			planets[p].position.z = r[p] * Math.sin(theta[p] - planetData[p].w);
			planets[p].position.y = r[p] * Math.sin(planetData[p].i) * Math.sin(theta[p] - planetData[p].w);

		}
		////

		//// hide / show orbit rings
		for(var p in ringBoxes) {
			if(ringBoxes[p].checked) {
				lines[p].visible = true;
			} else {
				lines[p].visible = false;
			}
		}
		////

		//// update all planets screen coords and labels
		for(var p in planets) {
			var vector = planets[p].position.clone();
			var v = projector.projectVector(vector, camera);

			var percX = (v.x + 1) / 2;
			var percY = (-v.y + 1) / 2;
			var left = percX * window.innerWidth * .70;
			var top = percY * window.innerHeight * .95;

			var pos2d = new THREE.Vector2(left.toFixed(0), top.toFixed(0));

			planetScreenCoords[p] = pos2d;
		}
		////

		// clear canvas
		gfx.clearRect(0, 0, canvas.width, canvas.height);

		gfx.fillStyle = gfx.strokeStyle = 'red';
		gfx.font = '16px verdana';
		for(var p in planetData) {
			if(parseInt(pullDown.value) === 0) {
				if(zTest(camera, star.position, planets[p].position) > 0) {
					var px = parseInt(planetScreenCoords[p].x);
					var py = parseInt(planetScreenCoords[p].y);
					gfx.fillRect(px - 2.5, py - 2.5, 5, 5);
					if(tagBoxes[p].checked) {
						gfx.fillText(planetData[p].id, px + 3, py - 2);
					}
				}
			} else {
				if(zTest(camera, planets[parseInt(pullDown.value) - 1].position, planets[p].position) > 0) {
					var px = parseInt(planetScreenCoords[p].x);
					var py = parseInt(planetScreenCoords[p].y);
					gfx.fillRect(px - 2.5, py - 2.5, 5, 5);
					if(tagBoxes[p].checked) {
						gfx.fillText(planetData[p].id, px + 3, py - 2);
					}
				}
			}
		}

		t++; // increment time
	};

//// create sun sphere and add it to scene
	var geometry = new THREE.SphereGeometry(.25, 20, 20);
	var material = new THREE.MeshBasicMaterial({color: 0xffff00});
	var star = new THREE.Mesh(geometry, material);
	scene.add(star);
////

//// create planet spheres and add them to scene
	var geometry = new THREE.SphereGeometry(.125, 20, 20);
	var material = new THREE.MeshBasicMaterial({color: 0xff0000});
	for(var p = 0; p < planetData.length; p++) {
		planets[p] = new THREE.Mesh(geometry, material);
		scene.add(planets[p]);
		planets[p].visible = false;
		planets[p].position.x = r[p];
	}
////

	render();
}