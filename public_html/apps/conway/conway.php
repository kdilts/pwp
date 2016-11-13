<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Game of Life";
		?>

		<?php
		require_once("../../lib/head_utils_no_flickity.php");
		?>
		<script type="text/javascript" src="grid.js"></script>
		<script type="text/javascript" src="life.js"></script>
		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>
		<div class="flexcontainer">
			<div>
				<h1>Conway's Game of Life</h1>
				<canvas id="mycanvas"></canvas>
			</div>
			<div id="instructions">
				<h1>Instructions</h1>
				<p>Click play to see a simulation of the board in its current state. The clear and randomize buttons can be used to reset the board. The state of a cell can be toggled by clicking the board while the game is paused. The wrap feature determines what happens at the edges of the board. When wrap is enabled things that go off one edge of the board will show up on the opposing edge. When it is disabled, the edges will be treated like walls.</p>
				<h2>Rules:</h2>
				<p>Green cells are alive.<br>
					Grey cells are dead.<br>
					A living cell will remain alive if it has 2 or 3 living neighbors.<br>
					A dead cell with exactly 3 living neighbors will turn into a live cell.<br>
					A living cell with less than 2, or more than 3 living neighbors will die.<br>
					<br>
				</p>
			</div>
		</div>

		<form class="flexcontainer">
			<input class="flexobject" type="button" value="Play" id="play" />
			<input class="flexobject" type="button" value="Clear" id="clear"/>
			<input class="flexobject" type="button" value="Randomize" id="randomize"/>
			<input class="flexobject" type="button" value="Disable Wrap" id="wrap"/>
			<p class="flexobject" id="sliderLabel">
				Speed:
				<input type="range" value="2" min="0" max="5" id="speed"/>
			</p>
		</form>

	</body>
</html>