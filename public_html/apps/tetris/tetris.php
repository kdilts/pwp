<html>
<head>
	<link rel="stylesheet" href="../../style.css" type="text/css"></link>
	<script type="text/javascript" src="javascript/grid.js"></script>
	<script type="text/javascript" src="javascript/draw.js"></script>
	<script type="text/javascript" src="javascript/piece.js"></script>
	<script type="text/javascript" src="javascript/keys.js"></script>
	<script type="text/javascript" src="javascript/tetris.js"></script>
	<style>
		.flexcontainer {
			display: -webkit-box;
			display: -moz-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
    		align-items: center;
    		justify-content: center;
		}
	</style>
</head>
<body>
	<div style="position:fixed; top:0px; left:0px; width:100%;"><ul>
		<li>
			<a href="../../home.html">Home</a>
		</li>
		
		<li class="dropdown">
			<a href="../../astro.html" class="dropbtn">Astronomy Projects</a>
			<div class="dropdown-content">
				<a href="../../milkyway/milkyway.html" style="border-top:2px solid black">Milky Way Model</a>
				<a href="../../solarsystem/solarsystem.html">Solar System Model</a>
				<a href="../../retrograde/retrograde.html">Retrograde Motion</a>
				<a href="../../spectroscopic/spectroscopic.html">Spectroscopic Binaries</a>
				<a href="../../eclipsing/eclipsing.html">Eclipsing Binaries</a>
			</div>
		</li>
		
		<li class="dropdown" style="float:right;">
			<a href="../../javascript.html" class="active" class="dropbtn">Games and Demos</a>
			<div class="dropdown-content">
				<a href="../conway/conway.html" style="border-top:2px solid black">Conway's Game of Life</a>
				<a href="../convex/convex.html">Convex Hull</a>
				<a href="tetris.php">Tetris</a>
				<a href="../snake/snake.html">Snake</a>
				<a href="../../demos/wordsearch/wordsearch.html">Word Search</a>
			</div>
		</li>
		
		<li>
			<a href="../../contact.html">Contact</a>
		</li>
	</ul></div>

	<h1 style="margin-top:50px">Tetris</h1>

	<div class="flexcontainer">
		<canvas id="mycanvas" style="border:2px solid black; height:800px; width:800px"></canvas>

		<div style="margin-left:10px; height:80%; width:20%;">
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