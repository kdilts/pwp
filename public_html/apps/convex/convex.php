<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Convex Hull";
		?>

		<?php
		require_once("../../lib/head_utils_no_flickity.php");
		?>
		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script rel="script" src="javascript/convex.js" type="text/javascript"></script>

	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>

		<h1>Convex Hull</h1>
		<div class="flexcontainer">
			<div class="flexobject">
				<canvas id="mycanvas"></canvas>
				<form>
					<input type="button" value="Random" id="random"/>
					<input type="button" value="Clear" id="clear"/>
					<input type="button" value="Calculate" id="calc"/>
					<p>Number of points:</p>
					<input type="text" value="20" id="numbox"/>
				</form>
			</div>

			<div class="flexobject">
				<p>
					The convex hull of a set of points is the set of points that make a polygon when connected, and contain all the other points. If the points represented nails in a board, the convex hull is the shape you would get by stretching a rubberband around all of the nails.
					<br>
					Points can be added by clicking. Calculate must be clicked for changes to take affect.
				</p>
			</div>

	</body></html>