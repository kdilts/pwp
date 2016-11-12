<!DOCTYPE html>
<html>
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Snake";
		?>

		<?php
		require_once("../../lib/head_utils.php");
		?>

		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script type="text/javascript" src="javascript/snake.js"></script>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>
		<div class="flexcontainer">
			<div>
				<h1>Snake</h1>
				<canvas id="mycanvas"></canvas>
			</div>

			<div id="instructions">
				<h2>Keys</h2>
				<p>Left arrow - Turn left<br>
					Right arrow - Turn right<br>
					Up arrow - Speed up<br>
					R - Restart game
				</p>
			</div>
		</div>

	</body>
</html>