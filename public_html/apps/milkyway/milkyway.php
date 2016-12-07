<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Milky Way Model";
		?>

		<?php
		require_once("../../lib/head_utils_no_flickity.php");
		?>
		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script src="javascript/three.min.js"></script>
		<script src="javascript/Quaternion.js"></script>
		<script src="javascript/OrbitControls.js"></script>
		<script src="javascript/milkyway.js"></script>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>
		<div class="flexbox">
			<div id="renderPanel"></div>
			<div id="menuPanel">
				<form>
					<h1>Objects</h1>
					<hr>
					<input type="checkbox" id="p1" checked><label>Population 1</label><br>
					<input type="checkbox" id="br" checked><label>Galactic Bar</label><br>
					<input type="checkbox" id="p2" checked><label>Population 2</label>
					<hr>
					<input type="checkbox" id="oc" checked><label>Open Star Clusters</label><br>
					<input type="checkbox" id="gc" checked><label>Globular Star Clusters</label><br>
					<input type="checkbox" id="neb" checked><label>Gaseous Nebulae</label>
					<hr>
					<input type="checkbox" id="sun" checked><label>Sun</label>
					<hr>

					<h1>Rotate</h1>
					<input type="button" value="^" id="rotateUp">
					<input type="button" value="<-" id="rotateLeft">
					<input type="button" value="->" id="rotateRight">
					<input type="button" value="v" id="rotateDown">

					<h1>Move</h1>
					<input type="button" value="^" id="moveUp">
					<input type="button" value="<-" id="moveLeft">
					<input type="button" value="->" id="moveRight">
					<input type="button" value="v" id="moveDown">

					<h1>Zoom</h1>
					<input type="button" value="-" id="zoomOut">
					<input type="button" value="+" id="zoomIn">
				</form>
			</div>
		</div>
	</body>
</html>