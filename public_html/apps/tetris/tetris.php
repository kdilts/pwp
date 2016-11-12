<html>
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
		<script type="text/javascript" src="javascript/grid.js"></script>
		<script type="text/javascript" src="javascript/draw.js"></script>
		<script type="text/javascript" src="javascript/piece.js"></script>
		<script type="text/javascript" src="javascript/keys.js"></script>
		<script type="text/javascript" src="javascript/tetris.js"></script>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>
		<div class="flexcontainer">
			<div>
				<h1>Tetris</h1>
				<canvas id="mycanvas" ></canvas>
			</div>

			<div id="instructions">
				<h2>Keys:</h2>
				<p>	R - Restart game<br>
					P - Pause / Unpause game<br>
					<br>
					W - Swap hold pieces<br>
					A - Move left<br>
					S - Move down faster<br>
					D - Move right<br>
					Space - Rotate piece<br>
					<br>
				</p>
			</div>
		</div>

	</body>
</html>