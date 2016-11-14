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

		<form style = "position:absolute; left:80%; top:50px">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<h1>Objects</h1><br><hr>
			<input type="checkbox" id="p1" checked>Population 1<br>
			<input type="checkbox" id="br" checked>Galactic Bar<br>
			<input type="checkbox" id="p2" checked>Population 2<hr>
			<input type="checkbox" id="oc" checked>Open Star Clusters<br>
			<input type="checkbox" id="gc" checked>Globular Star Clusters<br>
			<input type="checkbox" id="neb" checked>Gaseous Nebulae<hr>
			<input type="checkbox" id="sun" checked>Sun<br><hr>
	
			<h1 style = "position:absolute; left:58%; top:97%">Rotate</h1>
			<input type="button" value="^" id="rotateUp" style = "position:absolute; left:63%; top:106%">
			<input type="button" value="<-" id="rotateLeft" style = "position:absolute; left:50%; top:116%">
			<input type="button" value="->" id="rotateRight" style = "position:absolute; left:74%; top:116%">
			<input type="button" value="v" id="rotateDown" style = "position:absolute; left:63%; top:126%">
			
			<h1 style = "position:absolute; left:13%; top:97%">Move</h1>
			<input type="button" value="^" id="moveUp" style = "position:absolute; left:15%; top:106%">
			<input type="button" value="<-" id="moveLeft" style = "position:absolute; left:1%; top:116%">
			<input type="button" value="->" id="moveRight" style = "position:absolute; left:25%; top:116%">
			<input type="button" value="v" id="moveDown"  = "position:absolute; left:15%; top:126%">
			
			<h1 style = "position:absolute; left:40%; top:135%">Zoom</h1>
			<input type="button" value="-" id="zoomOut" style = "position:absolute; left:35%; top:145%">
			<input type="button" value="+" id="zoomIn" style = "position:absolute; left:53%; top:145%">
		</form>
	</body>
</html>