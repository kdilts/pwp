<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Java Downloads Gallery";
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
						<div class="carousel" id="flick" data-flickity='{ "wrapAround": true }'>

							<div class="carousel-cell cell-text">
								<a href="apps/jars/juliaset.jar">
									<img src="images/juliaset.jpg" class="img-rounded"/>
								</a>
								<div class="cell-description">
									<h1>Julia Set Fractals</h1>
									<p>julia</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<a href="apps/jars/game.jar">
									<img src="images/zombie.jpg" class="img-rounded"/>
								</a>
								<div class="cell-description">
									<h1>Zombie Defense</h1>
									<p>zombie</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</main>

	</body>
</html>