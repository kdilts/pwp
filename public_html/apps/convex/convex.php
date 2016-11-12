<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Conway";
		?>

		<?php
		require_once("../../lib/head_utils.php");
		?>
		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script rel="script" src="javascript/convex.js" type="text/javascript"></script>

	</head>
	<body bgcolor="grey">
		<?php
		require_once("../../lib/navbar.php");
		?>
		<h1 style="margin-top:50px;">Convex Hull</h1>

		<div class="flexcontainer">
			<div class="flexobject" style="margin-left:25%;">
				<canvas style="border:2px solid black; margin-top:5px;" id="mycanvas"></canvas>
				<form>
					<input type="button" value="Random" id="random"></input>
					<input type="button" value="Clear" id="clear"></input>
					<input type="button" value="Calculate" id="calc"></input>
					<p>Number of points:</p>
					<input type="textbox" value="20" id="numbox"></input>
				</form>
			</div>

			<div class="flexobject" style="margin-right:25%;">
				<p>
					The convex hull of a set of points is the set of points that make a polygon when connected, and contain all the other points. If the points represented nails in a board, the convex hull is the shape you would get by stretching a rubberband around all of the nails.
					<br>
					Points can be added by clicking. Calculate must be clicked for changes to take affect.
				</p>
			</div>

	</body></html>