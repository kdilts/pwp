<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		require_once("lib/head_utils.php");
		?>
		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script src="javascript/cellDescriptionVisiblity.js" rel="script" type="text/javascript"></script>
		<title>Games and Demos Gallery</title>
	</head>
	<body>

		<header>
			<?php
			require_once("lib/navbar.php");
			?>
		</header>

		<main>
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="carousel" id="flick" data-flickity='{ "wrapAround": true }'>

							<div class="carousel-cell cell-text">
								<img src="images/conway.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Conway's Game of Life</h1>
									<p>conway</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<img src="images/tetris.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Tetris</h1>
									<p>tetris</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<img src="images/snake.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Snake</h1>
									<p>snake</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<img src="images/convex.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Convex Hull Problem</h1>
									<p>convex</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<img src="images/wsearch.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Word Search Generator</h1>
									<p>word search</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</main>

	</body>
</html>