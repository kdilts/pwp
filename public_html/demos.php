<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Games and Demos Gallery";
		?>

		<?php
		require_once("lib/head_utils.php");
		?>
		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script src="javascript/cellDescriptionVisiblity.js" rel="script" type="text/javascript"></script>
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
						<h1 class="text-center">Games and Demos</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<div class="carousel" id="flick" data-flickity='{ "wrapAround": true }'>

							<div class="carousel-cell cell-text">
								<a href="apps/conway/conway.php">
									<img src="images/conway.jpg" class="img-rounded"/>
								</a>
								<div class="cell-description">
									<h1>Game of Life</h1>
									<p>This is a cellular automaton. It simulates cells living and dying based upon the population of other cells around them. It comes up frequently in the study of AI. This particular game happens to be Turing complete, meaning that you could simulate a working computer if you set the initial configuration of cells correctly!</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<a href="apps/tetris/tetris.php">
									<img src="images/tetris.jpg" class="img-rounded"/>
								</a>
								<div class="cell-description">
									<h1>Tetris</h1>
									<p>This is a remake of the arcade classic, Tetris. I've always enjoyed playing this game, so I thought it would be fun to try to recreate it.</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<a href="apps/snake/snake.php">
									<img src="images/snake.jpg" class="img-rounded"/>
								</a>
								<div class="cell-description">
									<h1>Snake</h1>
									<p>Another remake of an old favorite.</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<a href="apps/convex/convex.php">
									<img src="images/convex.jpg" class="img-rounded"/>
								</a>
								<div class="cell-description">
									<h1>Convex Hull Problem</h1>
									<p>This is a program that I wrote when I was studying algorithms. It finds which points it can connect to make the simplest possible closed shape that contains all of the points.</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<a href="apps/wordsearch/wordsearch.php">
									<img src="images/wsearch.jpg" class="img-rounded"/>
								</a>
								<div class="cell-description">
									<h1>Word Search Generator</h1>
									<p>This program generates word search puzzles from a list of words the user enters.</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</main>

	</body>
</html>